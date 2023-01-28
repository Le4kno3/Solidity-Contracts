import { ethers, upgrades } from 'hardhat';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
dotenv.config();

async function main() {
    const Box = await ethers.getContractFactory('L402');
    const box = await upgrades.deployProxy(Box, [42]); // where "42" is the argument, i.e. initialize(42)
    await box.deployed();
    console.log('Box deployed to:', box.address);

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
