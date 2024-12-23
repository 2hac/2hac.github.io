// Define redirect maps for all resource types
const redirectMap = {
    'https://builds.crazygames.com/gameframe/v1/bundle.js': 
    'https://2hac.github.io/JqpyYBVblDA3dx22yrxgxo8AnAauomBT/ywRwkKaReqIAfCtSpJYWH8loiUOngEXW.js'
};

// Helper function to find and replace URLs
function getRedirectedURL(url) {
    for (const oldURL in redirectMap) {
        if (url.includes(oldURL)) {
            console.log(`Redirecting URL: ${url} -> ${redirectMap[oldURL]}`);
            return url.replace(oldURL, redirectMap[oldURL]);
        }
    }
    return null;
}

// Intercept fetch
const originalFetch = window.fetch;
window.fetch = async function(input, init) {
    let url = typeof input === 'string' ? input : input.url;
    const redirectedURL = getRedirectedURL(url);

    if (redirectedURL) {
        console.log(`Intercepted Fetch: ${url} -> ${redirectedURL}`);
        input = redirectedURL;
    }

    return originalFetch(input, init);
};

// Intercept XMLHttpRequest
const originalOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function(method, url, ...args) {
    const redirectedURL = getRedirectedURL(url);

    if (redirectedURL) {
        console.log(`Intercepted XHR: ${url} -> ${redirectedURL}`);
        url = redirectedURL;
    }

    return originalOpen.call(this, method, url, ...args);
};

// Redirect dynamically added elements (e.g., script, img, link)
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node;
                const attr = element.src ? 'src' : element.href ? 'href' : null;

                if (attr) {
                    const redirectedURL = getRedirectedURL(element[attr]);
                    if (redirectedURL) {
                        console.log(`Redirecting ${element.tagName}: ${element[attr]} -> ${redirectedURL}`);
                        element[attr] = redirectedURL;
                    }
                }
            }
        });
    });
});

// Start observing the document for dynamically added elements
observer.observe(document.documentElement || document.body, { childList: true, subtree: true });

// Ensure redirection script initializes
console.log('Universal URL redirection script is active.');
