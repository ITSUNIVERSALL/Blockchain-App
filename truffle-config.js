require('babel-polyfill');
require('dotenv').config(); 
const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKeys = process.env.PRIVATE_KEYS || ""

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }, 
    kovan: {
      provider: function () {
        return new HDWalletProvider(
          // Private Key
          privateKeys.split(','), // Array of account private keys
          `wss://kovan.infura.io/ws/v3/${process.env.INFURA_API_KEY}`
        )  
      },  
      gas: 5000000,
      gasPrice: 2500000000,
      network_id:42
    }     
  },
contracts_directory: './src/contracts/',
contracts_build_directory: './src/abis/',
compliers: {
  solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
