require({baseUrl: chrome.extension.getURL('/')}, ['app/highlighter', 'var/document'], highlighter => {
    // highlights every code that has been already displayed
    highlighter.init();
});
