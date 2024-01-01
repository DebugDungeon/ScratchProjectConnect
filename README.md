# Welcome to ScratchProjectConnect!
This browser extension allows you to do things that you cannot normally do in Scratch or that are normally very expensive to compute.

## Usage

### Modular Exponentiation
Modular Exponentiation is a very useful algorithm, used in RSA and other things. On Scratch, it is normally either only possible for very small numbers or very slow. 

With ScratchProjectConnnect, you can very easily use Modular Exponentiation by setting the variable "[math]modpow" to the base, the exponent and the modulus separated by a space:
`set [[math]modpow v] to ([Base] [Exponent] [Modulus])`

The value of the variable will be set to the result of the Modular Exponentiation.

Examples:
`set [[math]modpow v] to (2 10 5)` -> 4
`set [[math]modpow v] to (5 10000 5000)` -> 625

It also works with very big integers:
`set [[math]modpow v] to (9999999999 9999999999 99999999999999999999999999999999999999999999999999)` -> 52741607538340512501055527952006928603125137186912

### Local Storage
In Scratch, we often have save codes for continuing playing a game, but Scratch doesn't have a system for storing these codes well.

Using ScratchProjectConnect, you can just mark variables as local and they will be saved in your browser's Local Storage. For this, you just need to add the prefix `[local]` to your variable.

Examples:
`[local]savecode`
`[local]data`

### More coming soon!