// Store the original URL.createObjectURL function
const originalCreateObjectURL = URL.createObjectURL;

// Define the URL to redirect all blob requests to
const redirectUrl = 'https://github.com/2hac/2hac.github.io/raw/refs/heads/main/JqpyYBVblDA3dx22yrxgxo8AnAauomBT/song.m4a'; // Change this to your desired URL

// Override the URL.createObjectURL function to detect and redirect blob URLs
URL.createObjectURL = function(blob) {
    console.log('Blob detected and redirected');
    return redirectUrl;
};

// This function continuously monitors for any frame updates
function checkEveryFrame() {
    requestAnimationFrame(checkEveryFrame);
}

// Start the frame monitoring
requestAnimationFrame(checkEveryFrame);

console.log('Blob detection and redirection script is active.');
