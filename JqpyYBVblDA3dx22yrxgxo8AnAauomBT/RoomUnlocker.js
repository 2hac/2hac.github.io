(function() {
    'use strict';

    const targetUrls = [
        'https://database.pixelwarfare.io/scripts_v1/get_rooms.php',
        'https://pixelwarfare.io/PhpScripts/get_rooms.php'
    ];
    let modifiedContent = null;

    async function fetchAndModifyPhp(url) {
        try {
            console.log('Fetching and modifying PHP content from:', url);
            const response = await fetch(url);
            const text = await response.text();

            // Extract JSON if response starts with "[Success]"
            const jsonString = text.startsWith('[Success]') ? text.substring('[Success]'.length).trim() : text;

            // Parse the JSON and apply modifications
            let json = JSON.parse(jsonString);
            console.log('Original JSON:', json);

            // Modify Password and RoomName fields
            if (json.room && Array.isArray(json.room)) {
                json.room.forEach(room => {
                    if (room.Password && room.Password.trim() !== "") {
                        console.log(`Unlocking room: ${room.RoomName}`);
                        room.Password = ""; // Clear the password
                        room.RoomName += " | <color=#00ff44>UNLOCKED</color>"; // Append "UNLOCKED"
                    }
                });

                // Re-encode the JSON with "[Success]" prefix
                modifiedContent = '[Success]' + JSON.stringify(json);
                console.log('Modified JSON:', modifiedContent);
            } else {
                console.log('No rooms to modify.');
                modifiedContent = text; // Fallback to unmodified content
            }
        } catch (error) {
            console.error('Error fetching and modifying:', error);
            modifiedContent = null; // Reset if there's an issue
        }
    }

    // Intercept fetch requests
    const originalFetch = window.fetch;
    window.fetch = async function(input, init) {
        const url = typeof input === 'string' ? input : input.url;
        if (targetUrls.includes(url)) {
            console.log('Intercepted fetch request to:', url);
            await fetchAndModifyPhp(url);
            if (modifiedContent) {
                console.log('Returning modified response for fetch:', url);
                return new Response(modifiedContent, { status: 200, headers: { 'Content-Type': 'application/json' } });
            }
        }
        return originalFetch.apply(this, arguments);
    };

    // Intercept XMLHttpRequests
    const originalXhrOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, ...rest) {
        const xhr = this;
        if (targetUrls.includes(url)) {
            console.log('Intercepted XMLHttpRequest to:', url);
            fetchAndModifyPhp(url).then(() => {
                const modifiedResponseHandler = function() {
                    if (xhr.readyState === 4 && xhr.status === 200 && modifiedContent) {
                        console.log('Modifying XMLHttpRequest response for:', url);
                        Object.defineProperty(xhr, 'responseText', { value: modifiedContent });
                        Object.defineProperty(xhr, 'response', { value: modifiedContent });
                    }
                };
                xhr.addEventListener('readystatechange', modifiedResponseHandler);
            });
        }
        return originalXhrOpen.call(this, method, url, ...rest);
    };

    console.log('Interception script loaded and running for target URLs.');
})();
