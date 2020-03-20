require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember equip half arctic blue summer'; 
let testAccounts = [
"0x7c8288a1d59c36e9ff5ec84db2394fae76fa52bc7177b8bd9334467364db3f82",
"0x64d7b720a816545be08c4e943ad351ce5bb91c196458a7f9a598af529cda5bfb",
"0x76892cb8216679202beabb2fc72b8b3d9ea5c8cc5df45adbdd5d49b0ab9d6cf0",
"0x2b0437cb0033e9ba393275a3227f2cb82c2342211846230234941adb5fa69868",
"0xb6243fbcd97642b5e2e349bb2c8b590c24acbfe3e5ed319f52f13212945609c5",
"0x55414d5ed96fa4f19efefa72bfcf623f2598ffea0408f6a5166ecc17c72db737",
"0xea9cc2d475dee5f43c5bd20f144c6cdb84c56425092822d0f53da4a30da7a00d",
"0x4b544e4dbc2859e279b320dbe2e5f72f03e8a5a1d06759bad630584e444cad5c",
"0x9351874260e45fa75536786f8a78f929d1ec8e909a19d40c403340527f200242",
"0x3b7da90435fa9eabedb4729ac62e2af4ddb116e7dee3c2c8360f6d2f01b905f9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
