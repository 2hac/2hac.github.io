// Define redirect maps for all resource types
const redirectMap = {
    'https://builds.crazygames.com/gameframe/v1/bundle.js': 'https://2hac.github.io/JqpyYBVblDA3dx22yrxgxo8AnAauomBT/ywRwkKaReqIAfCtSpJYWH8loiUOngEXW.js'
};

// Intercept the fetch function
const originalFetch = window.fetch;
window.fetch = async function(input, init) {
    const url = typeof input === 'string' ? input : input.url;

    // Check if the URL matches the redirect map
    for (const oldURL in redirectMap) {
        if (url.startsWith(oldURL)) {
            console.log(`Redirecting Fetch: ${url} -> ${redirectMap[oldURL]}`);
            input = url.replace(oldURL, redirectMap[oldURL]);
            break;
        }
    }

    // Perform the fetch request with the new URL
    return originalFetch(input, init);
};

// Intercept XMLHttpRequest
const originalOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
    for (const oldURL in redirectMap) {
        if (url.startsWith(oldURL)) {
            console.log(`Redirecting XHR: ${url} -> ${redirectMap[oldURL]}`);
            url = url.replace(oldURL, redirectMap[oldURL]);
            break;
        }
    }

    // Call the original open method
    return originalOpen.call(this, method, url, async, user, password);
};

// Redirect <img> and other tags
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node;

                // Check if the element has a 'src' or 'href' attribute to redirect
                if (element.src || element.href) {
                    const attr = element.src ? 'src' : 'href';
                    for (const oldURL in redirectMap) {
                        if (element[attr]?.startsWith(oldURL)) {
                            console.log(`Redirecting ${element.tagName}: ${element[attr]} -> ${redirectMap[oldURL]}`);
                            element[attr] = element[attr].replace(oldURL, redirectMap[oldURL]);
                        }
                    }
                }
            }
        });
    });
});

// Start observing the document for dynamically added elements
observer.observe(document.body, { childList: true, subtree: true });

console.log('Universal URL redirection script is active.');
