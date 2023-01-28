import { ethers, upgrades } from 'hardhat';
import { expect } from 'chai';

describe('Box', function () {
    it('works', async () => {
        const Box = await ethers.getContractFactory('L303');
        const BoxV2 = await ethers.getContractFactory('L303V2');

        const instance = await upgrades.deployProxy(Box, [42]);

        let value = await instance.retrieve();
        expect(value.toString()).to.equal('42');

        const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2);

        value = await upgraded.retrieveV2();
        expect(value.toString()).to.equal('42'); //because the initialize will take values from the pervious version state variables.
    });
});
