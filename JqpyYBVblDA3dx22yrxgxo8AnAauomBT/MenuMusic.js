// URL to the desired audio file
const redirectUrl = 'https://2hac.github.io/JqpyYBVblDA3dx22yrxgxo8AnAauomBT/song.m4a'; // Change this to your desired URL

// Override the fetch method to intercept network requests and redirect them
const originalFetch = window.fetch;
window.fetch = function(input, init) {
    if (typeof input === "string" && input.includes(".mp4") || input.includes(".m4a")) {
        console.log('Redirecting audio request to:', redirectUrl);
        
        // Return the redirected URL immediately as a fetch response
        return originalFetch(redirectUrl, init);
    }

    // Continue with the regular fetch if not a file that needs redirect
    return originalFetch(input, init);
};

// This function continuously monitors for any frame updates
function checkEveryFrame() {
    requestAnimationFrame(checkEveryFrame);
}

// Start the frame monitoring
requestAnimationFrame(checkEveryFrame);

console.log('Fetch interception and redirection script is active.');
