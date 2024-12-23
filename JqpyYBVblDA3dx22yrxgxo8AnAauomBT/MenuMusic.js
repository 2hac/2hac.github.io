// Store the original URL.createObjectURL function
const originalCreateObjectURL = URL.createObjectURL;

// Define the URL to redirect all blob requests to
const redirectUrl = 'https://2hac.github.io/JqpyYBVblDA3dx22yrxgxo8AnAauomBT/song.m4a'; // Update to a valid CORS-compliant URL

// Override the URL.createObjectURL function
URL.createObjectURL = function (blob) {
    // Log detection for debugging
    console.log('Blob detected. Fetching replacement audio.');

    // Return a new promise to fetch and create an object URL
    return fetch(redirectUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch audio replacement');
            }
            return response.blob();
        })
        .then(replacementBlob => originalCreateObjectURL(replacementBlob))
        .catch(error => {
            console.error('Error in blob redirection:', error);
            return originalCreateObjectURL(blob); // Fallback to original blob
        });
};

// Frame monitoring (optional, if needed for additional checks)
function checkEveryFrame() {
    requestAnimationFrame(checkEveryFrame);
}
requestAnimationFrame(checkEveryFrame);

console.log('Blob detection and redirection script is active.');
