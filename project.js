
function injectScript(file) {
    const script = document.createElement('script');
    script.src = browser.runtime.getURL(file);
    script.onload = function () {
        this.remove(); // Clean up the injected script tag
    };
    (document.head || document.documentElement).appendChild(script);
}

async function injectModules() {
    let manifest
    try { window.browser = chrome; }
    catch (err) { console.log(err); }
    manifest = await browser.runtime.getManifest();

    for (const scriptPath of manifest.project_modules) {
        injectScript(scriptPath);
    }
}

async function getFolderContents(folder) {
    return new Promise((resolve, reject) => {
        folder.createReader().readEntries(entries => {
            resolve(entries);
        });
    });
}

console.log("Injecting Modules...")

injectModules();
