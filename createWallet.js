const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin  = require('bitcoinjs-lib')

//definir rede
const network = bitcoin.networks.testnet


const path =`m/49'/1'/0'/0`
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync()

let root = bip32.fromSeed(seed,network)

let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAdress = bitcoin.payments.p2pkh({
    pubkey:node.pubkey,
    network:network
}).address
console.log('Carteira gerada')
console.log('Endereço: ',btcAdress)
console.log("Chave privada: ",node.toWIF())

console.log("Seed", mnemonic);
