## Introduction

This contract fetches the latest ETH price from a data source (e.g. An exchange API) via the Provable Oracle.
After you call the updatePrice() function, the Provable Oracle sends the execution flow to the Provable servers and the server then fetches the updated price.
After fetching this price, the execution flow returns back to the contract, the Provable servers call the contract's `__callback()` function. (You can see this in the etherscan transactions also)

## Instructions

- To run `example1.sol` you will need some ether on either ethereum testnet like Ropsten or Goerli, or in mainnet.
- We cannot use the latest version of solidity for provable oracle. We can go as high as version 0.6.12.
- Open remix ide using browser. Before deploying the contract in remix, first connect to the metamask account to any ethereum network (ropsten, goerli, mainnet).
- make sure the account have faucet.
- Select the provider "inject provider" during deployment, this will automatically fetch the metamask account.

![screenshot 1](screenshots/output1.png)
![screenshot 2](screenshots/output2.png)
![screenshot 3](screenshots/output3.png)
