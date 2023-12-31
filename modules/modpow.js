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
        try {
            modpow = backdrop.lookupVariableByNameAndType("[math]modpow", "");
            if (modpow === null) { return; }
            if (modpow.value.toString().split(" ").length !== 3) { return; }
            inputs = modpow.value.split(" ");
            base = BigInt(inputs[0]);
            exponent = BigInt(inputs[1]);
            modulus = BigInt(inputs[2]);
            modpow.value = fastModularExponentiation(base, exponent, modulus).toString();
        }
        catch (err) {
            modpow.value = 0;
            console.log("There was an error while calculating Modular Exponentiation");
        }
    }, 20)
    console.log("modpow is here");
}