
function main(runtime) {
    // Scripts go in here
    function answerModPow() { // Respond to changes to the variable [math]modpow
        function fastModularExponentiation(base, exponent, modulus) {
            if (modulus === 1n) {
                return 0n;
            }

            let result = 1n;
            base = base % modulus;

            while (exponent > 0n) {
                if (exponent % 2n === 1n) {
                    result = (result * base) % modulus;
                }

                exponent = exponent >> 1n;
                base = (base * base) % modulus;
            }

            return result;
        }
        setInterval(function () {
            modpow = backdrop.lookupVariableByNameAndType("[math]modpow", "");
            if (modpow === null) { return; }
            if (modpow.value.toString().split(" ").length !== 3) { return; }
            inputs = modpow.value.split(" ");
            base = BigInt(inputs[0]);
            exponent = BigInt(inputs[1]);
            modul = BigInt(inputs[2]);
            modpow.value = fastModularExponentiation(base, exponent, modul).toString();

        }, 20)
    }
    answerModPow();
}


console.log("Getting targets...");

// Don't edit past this point

const reactRoot = document.createElement("div");
reactRoot.id = "reactRoot";
(document.head || document.documentElement).appendChild(reactRoot);

const reactRootFinder = document.createElement("script");
reactRootFinder.append(document.createTextNode("const interval = setInterval(function () {try {window.runtime = document.getElementById('app')._reactRootContainer._internalRoot.current.child.stateNode.store.getState().scratchGui.vm.runtime; window.sprites = runtime.targets; window.backdrop = sprites[0]; window.global_variables = backdrop.variables; clearInterval(interval); console.log('Running main'); (" + main + ")(runtime);} catch (err) {}}, 1000)"));
(document.head || document.documentElement).appendChild(reactRootFinder);