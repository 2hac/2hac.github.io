// Store the original URL.createObjectURL function
const originalCreateObjectURL = URL.createObjectURL;

// Define the URL to fetch the audio from
const redirectUrl = 'https://2hac.github.io/JqpyYBVblDA3dx22yrxgxo8AnAauomBT/song.m4a'; // Change this to your desired URL

// Override the URL.createObjectURL function to detect and redirect blob URLs
URL.createObjectURL = function(blob) {
    console.log('Blob detected and redirected');
    // Instead of calling original function, fetch the audio and create a Blob
    return fetch(redirectUrl)
        .then(response => response.blob())  // Fetch and convert the audio into a Blob
        .then(audioBlob => {
            // Use the Blob to create the new ObjectURL for audio playback
            return originalCreateObjectURL(audioBlob);
        })
        .catch(err => {
            console.error('Error fetching audio file:', err);
        });
};

// This function continuously monitors for any frame updates
function checkEveryFrame() {
    requestAnimationFrame(checkEveryFrame);
}

// Start the frame monitoring
requestAnimationFrame(checkEveryFrame);

console.log('Blob detection and redirection script is active.');
