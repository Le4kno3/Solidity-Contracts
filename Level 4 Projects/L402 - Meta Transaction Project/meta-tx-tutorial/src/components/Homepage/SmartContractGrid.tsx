import React, { useEffect, useState } from 'react';
import MetamaskButton from '@components/Homepage/MetamaskButton';
import { useWeb3React  } from '@web3-react/core';
import Grid from '@mui/material/Grid';
import { contractAddress } from '@cache/deploy';
import deployedContract from '@artifacts/contracts/L402.sol/L402.json';
import deployedContractV2 from '@artifacts/contracts/L402V2.sol/L402V2.json';
import WalletAddress from '@components/Homepage/WalletAddress';
import { TextField } from '@mui/material';
import { ethers } from 'ethers';
import StoreButton from './StoreButton';

const SmartContractGrid = () => {
    const [val, setVal] = useState(0);
    const [newVal, setNewVal] = useState(0);

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

            contract = new ethers.Contract(
                contractAddress,
                deployedContract.abi,
                library
            );

            const signer = library.getSigner();

            console.log("The signer is: ", signer)

            // console.log('The address is: ', library);
            console.log('The library is: ', library);

            let getVal = await contract.retrieve();
            console.log('The value already set is: ', getVal.toString());

            console.log('The new value is: ', newVal);

            setVal(getVal.toNumber())

        };

        init();
    }, []);

    return (
        <Grid container justifyContent="center" alignItems="center">
            
            <Grid item xs={2}>
                <StoreButton val={newVal} />
            </Grid>
            <Grid item xs={2}>
                <TextField placeholder={String(val)} onChange={e => setNewVal(Number(e.target.value))}></TextField>
            </Grid>
        </Grid>
    );
};

export default SmartContractGrid;
