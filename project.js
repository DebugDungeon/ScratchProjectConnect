
function main(runtime) {
    // Scripts go in here
    answerModPow();
}

function injectScript(file) {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL(file);
    script.onload = function () {
        this.remove(); // Clean up the injected script tag
    };
    (document.head || document.documentElement).appendChild(script);
}

async function injectModules() {
    const manifest = await chrome.runtime.getManifest();

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

console.log("Injecting Modules")

injectModules();

console.log("Getting targets...");

// Don't edit past this point

const reactRoot = document.createElement("div");
reactRoot.id = "reactRoot";
(document.head || document.documentElement).appendChild(reactRoot);

const reactRootFinder = document.createElement("script");
reactRootFinder.append(document.createTextNode("const interval = setInterval(function () {try {window.runtime = document.getElementById('app')._reactRootContainer._internalRoot.current.child.stateNode.store.getState().scratchGui.vm.runtime; window.sprites = runtime.targets; window.backdrop = sprites[0]; window.global_variables = backdrop.variables; clearInterval(interval); console.log('Running main'); (" + main + ")(runtime);} catch (err) {}}, 1000)"));
(document.head || document.documentElement).appendChild(reactRootFinder);