const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Function to load and play audio
async function loadAudio(url) {
    const response = await fetch(url, { mode: "cors" }); // Enable CORS for fetch
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    // Create a buffer source
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();

    console.log('Audio loaded and played.');
}

// Store the original URL.createObjectURL function
const originalCreateObjectURL = URL.createObjectURL;

// Define the URL to redirect all blob requests to
const redirectUrl = 'https://2hac.github.io/JqpyYBVblDA3dx22yrxgxo8AnAauomBT/song.m4a'; // Change this to your desired URL

// Override the URL.createObjectURL function to detect and redirect blob URLs
URL.createObjectURL = function(blob) {
    console.log('Blob detected and redirected');
    loadAudio(redirectUrl); // Use the loadAudio function to handle the redirected audio
    return redirectUrl;
};

// This function continuously monitors for any frame updates
function checkEveryFrame() {
    requestAnimationFrame(checkEveryFrame);
}

// Start the frame monitoring
requestAnimationFrame(checkEveryFrame);

console.log('Blob detection and redirection script is active.');
