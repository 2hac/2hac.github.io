(function() {
    'use strict';

    const targetUrls = [
        'https://database.pixelwarfare.io/scripts_v1/get_rooms.php',
        'https://pixelwarfare.io/PhpScripts/get_rooms.php'
    ];
    let modifiedContent = null;
    let isFetching = false;

    async function fetchAndModifyPhp(url) {
        if (isFetching) return;
        isFetching = true;

        try {
            console.log('Fetching and modifying PHP content from:', url);
            const response = await fetch(url);
            const text = await response.text();

            // Check if the response starts with "[Success]"
            const jsonString = text.startsWith('[Success]') ? text.substring('[Success]'.length).trim() : text;

            // Parse the JSON text
            let json = JSON.parse(jsonString);
            console.log('Original JSON:', json);

            // Modify the Password and RoomName
            if (json.room && Array.isArray(json.room)) {
                json.room.forEach(room => {
                    if (room.Password && room.Password.trim() !== "") {
                        console.log(`Modifying room: ${room.RoomName} with Password: ${room.Password}`);
                        room.Password = ""; // Clear the password
                        room.RoomName += " | <color=#00ff44>UNLOCKED</color>"; // Add "UNLOCKED" to RoomName
                    }
                });

                // Convert back to JSON text
                modifiedContent = '[Success]' + JSON.stringify(json);
                console.log('Modified JSON:', modifiedContent);
            } else {
                console.log('No rooms to modify.');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            isFetching = false;
        }
    }

    // Intercept fetch requests
    const originalFetch = window.fetch;
    window.fetch = async function(input, init) {
        if (typeof input === 'string' && targetUrls.includes(input)) {
            console.log('Intercepted fetch request to:', input);
            await fetchAndModifyPhp(input);
            if (modifiedContent) {
                console.log('Returning modified response for:', input);
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
                xhr.addEventListener('readystatechange', function() {
                    if (xhr.readyState === 4 && xhr.status === 200 && modifiedContent) {
                        console.log('Returning modified response for XMLHttpRequest:', url);
                        Object.defineProperty(xhr, 'responseText', { value: modifiedContent });
                        Object.defineProperty(xhr, 'response', { value: modifiedContent });
                    }
                });
            });
        }
        return originalXhrOpen.call(this, method, url, ...rest);
    };
    
    console.log('Interception script loaded and running for target URLs.');
})();
