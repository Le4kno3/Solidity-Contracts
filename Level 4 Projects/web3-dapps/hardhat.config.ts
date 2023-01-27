import {
    PRIVATE_KEY,
    LOCALTESTNET_URL,
    MUMBAITESTNET_URL,
    RINKEBY_URL
} from './src/config';
import { HardhatUserConfig, task } from 'hardhat/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomicfoundation/hardhat-chai-matchers';
import '@nomicfoundation/hardhat-toolbox';

const privateKey = String(PRIVATE_KEY);

const config: HardhatUserConfig = {
    paths: {
        root: './src/web3'
    },
    solidity: {
        compilers: [
            {
                version: '0.8.17',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    }
                }
            }
        ]
    },
    defaultNetwork: 'hardhat_local_node', //hardhat-network-helpers: can only be used in "hardhat" or the "runtime" network. If you want to run the test script on some other blockchain, make sure to remove the use of this library.
    networks: {
        hardhat: {
            chainId: 31337
        },
        hardhat_local_node: {
            url: 'http://localhost:8545',
            accounts: [
                '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
                '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d',
                '0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a'
            ],
            chainId: 31337,
            gasPrice: 470000000000
        },
        polygon_mumbai_testnet: {
            url: MUMBAITESTNET_URL,
            accounts: [privateKey],
            chainId: 80001,
            gasPrice: 470000000000
        }
        // polygon_mainnet: {},
        /* avalanche_testnet_fuji: {
  url: 'https://api.avax-test.network/ext/bc/C/rpc',
  gasPrice: 470000000000,
  chainId: 43113,
  accounts: []
},
avalanche_mainnet: {
  url: 'https://api.avax.network/ext/bc/C/rpc',
  gasPrice: 470000000000,
  chainId: 43114,
  accounts: []
} */

        // rinkeby: {
        //     url: RINKEBY_URL || '',
        //     accounts: [privateKey],
        //     chainId: 4,
        //     gasPrice: 470000000000
        // }
    }
};

export default config;
