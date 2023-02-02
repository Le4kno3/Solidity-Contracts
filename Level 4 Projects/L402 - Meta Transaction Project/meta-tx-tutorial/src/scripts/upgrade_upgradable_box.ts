import { ethers, upgrades } from 'hardhat';
import { contractAddress as BOX_ADDRESS } from '../cache/deploy';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
dotenv.config();

async function main() {
    const BoxV2 = await ethers.getContractFactory('L402');
    const box = await upgrades.upgradeProxy(BOX_ADDRESS, BoxV2); // where "42" is the argument, i.e. initialize(42)

    const value = await box.retrieve();
    console.log('The value in V2 is: ', value);
    //await box.initialize(53);
    console.log('Previous Box upgraded:', box.address);
    console.log('New Box upgraded:', box.address);

    const { BASE_PATH, CURRENT_RPC_URL } = process.env;

    const rpc_url = CURRENT_RPC_URL;

    let config = `
  export const contractAddress = "${box.address}"
  export const rpc_url = "${rpc_url}"`;
    let data = JSON.stringify(config);
    fs.writeFileSync(`${BASE_PATH}/cache/deploy.ts`, JSON.parse(data));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
