import React from 'react';
import Grid from '@mui/material/Grid';
import ConnectWalletGrid from '@components/Homepage/ConnectWalletGrid';
import SmartContractGrid from './Homepage/SmartContractGrid';
import { Box } from '@mui/system';
import { useWeb3React } from '@web3-react/core';
import StoreButton from './Homepage/StoreButton';

const Homepage = () => {
    const { active } = useWeb3React();
    return (
        <>
            <Grid container justifyContent="center" alignItems="center">
                <h1>Welcome to Gas Free dApp</h1>
            </Grid>
            <ConnectWalletGrid />
            {active ? <SmartContractGrid /> : <></>}

        </>
    );
};

export default Homepage;
