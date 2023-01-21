require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'idea climb flee skull guard render remind concert harvest brave bottom throw'; 
let testAccounts = [
"0xc263198a0e66f4bc66f14bb26f2908318cb0312cfd6a2064a599ea22feaf012a",
"0x5984b1a357993fd15dd5f0461861d4723ee4a246596ff2b65a67fecce2dce457",
"0x2f4baac33c892432682599cfb7d17b65e151821684a994b7ae51b478b0d9f6b7",
"0xf65e15824a1383cade116736d6a9c9d4076e46d18c2358778b02dadbbdf56f5b",
"0xc9c5648dd51c9db97019621171d013e5b3529013a786e36d6274e1a15e875b76",
"0x0daf7c32a417b5c85b93fa57f413fd34146adc7518abf190098a77fcc9799c2e",
"0xe0080bb75ef20dccb91ebf1d54676a86ac737c14f2acc422d9480ad54cd8cef6",
"0xf879e81bd7e48f5e4a80ad77e00abb6e5465166c2142d83c4e573e7dfa3441cb",
"0xdf04312937bd6088f1f6f1b942c3580b4f156fec9d33a5324b46645d6e7e5127",
"0x970771a738b15248fda58f0c9bc36f8aa90a878acec17cf6dc0e630b5590cee8"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


