// Intercept the fetch function to redirect specific URLs
const originalFetch = window.fetch;

// Create a map of old URLs to their corresponding new URLs
const redirectMap = {
    'https://2hac.github.io/JqpyYBVblDA3dx22yrxgxo8AnAauomBT/static/': 'https://builds.crazygames.com/gameframe/v1/static/'
};

// Override the fetch function to detect and redirect specific URLs
window.fetch = async function (input, init) {
    // Extract URL from the input
    const url = typeof input === 'string' ? input : input.url;

    // Check if the requested URL matches any in the redirect map
    for (const oldURL in redirectMap) {
        if (url.startsWith(oldURL)) {
            console.log(`Redirecting URL: ${url} -> ${redirectMap[oldURL]}`);
            // Replace the old base URL with the new base URL
            input = url.replace(oldURL, redirectMap[oldURL]);
            break;
        }
    }

    // Call the original fetch function with the modified URL
    return originalFetch(input, init);
};

// This function continuously monitors for any frame updates
function checkEveryFrame() {
    requestAnimationFrame(checkEveryFrame);
}

// Start the frame monitoring
requestAnimationFrame(checkEveryFrame);

console.log('Fetch URL redirection script is active.');
