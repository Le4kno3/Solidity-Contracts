import React, { useEffect, useState } from 'react';
import MetamaskButton from '@components/Homepage/MetamaskButton';
import { useWeb3React } from '@web3-react/core';
import Grid from '@mui/material/Grid';
import { contractAddress } from '@cache/deploy';
import deployedContract from '@artifacts/contracts/L402V2.sol/L402V2.json';
import WalletAddress from '@components/Homepage/WalletAddress';
import { TextField } from '@mui/material';
import { ethers } from 'ethers';

const SmartContractGrid = () => {
    const [val, setVal] = useState(0);

    let contract;

    const {
        account,
        activate,
        active,
        chainId,
        connector,
        library,
        deactivate,
        error,
        setError
    } = useWeb3React();

    // const provider = library.provider;

    console.log('The signer is: ', library);

    useEffect(() => {
        const init = async () => {
            // TODO: init smart contract
            contract = new ethers.Contract(
                contractAddress,
                deployedContract.abi,
                library.provider
            );
            console.log('The address is: ', contract.address);
            // TODO: retriveV2.call()
            let getVal = await contract.retrieveV2();
            console.log('The value already set is: ', getVal);
            // TODO: setVal()
            const newVal = 88;
            await contract.storeV2(newVal);
            getVal = await contract.retrieveV2();
            console.log('The new value set is: ', getVal);
        };

        init();
    }, []);

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={2}>
                <TextField placeholder={String(val)}></TextField>
            </Grid>
            <Grid item xs={2}>
                <MetamaskButton />
            </Grid>
        </Grid>
    );
};

export default SmartContractGrid;
