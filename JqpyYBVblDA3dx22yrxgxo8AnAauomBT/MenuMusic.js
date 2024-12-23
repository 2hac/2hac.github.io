// Store the original URL.createObjectURL function
const originalCreateObjectURL = URL.createObjectURL;

// Define the URL to fetch the audio from
const redirectUrl = 'https://2hac.github.io/JqpyYBVblDA3dx22yrxgxo8AnAauomBT/song.m4a'; // Change this to your desired URL

// Override the URL.createObjectURL function to detect and redirect blob URLs
URL.createObjectURL = function(blob) {
    console.log('Blob detected and redirected');
    // Return the resolved URL (ensure it's the Object URL that will work)
    return fetch(redirectUrl)
        .then(response => response.blob())  // Fetch the audio and convert it into a Blob
        .then(audioBlob => {
            // Use the Blob to create the new Object URL for audio playback
            return originalCreateObjectURL(audioBlob); // Ensure it's returning the URL
        })
        .catch(err => {
            console.error('Error fetching audio file:', err);
            return ''; // Return an empty string if the fetch fails
        });
};

// This function continuously monitors for any frame updates
function checkEveryFrame() {
    requestAnimationFrame(checkEveryFrame);
}

// Start the frame monitoring
requestAnimationFrame(checkEveryFrame);

console.log('Blob detection and redirection script is active.');
