import React from 'react';
import Grid from '@mui/material/Grid';
import ConnectWalletGrid from '@components/Homepage/ConnectWalletGrid';
import SmartContractGrid from './Homepage/SmartContractGrid';
import { Box } from '@mui/system';

const Homepage = () => {
    return (
        <>
            <Grid container justifyContent="center" alignItems="center">
                <h1>Welcome to Gas Free dApp</h1>
            </Grid>
            <ConnectWalletGrid />
            <SmartContractGrid />
        </>
    );
};

export default Homepage;
