function main(runtime) {
    // Scripts go in here
    answerModPow();
    answerStorage();
}

const interval = setInterval(function () {try {window.runtime = document.getElementById('app')._reactRootContainer._internalRoot.current.child.stateNode.store.getState().scratchGui.vm.runtime; window.sprites = runtime.targets; window.backdrop = sprites[0]; window.global_variables = backdrop.variables; clearInterval(interval); console.log('Running main'); (main)(runtime);} catch (err) {}}, 1000);