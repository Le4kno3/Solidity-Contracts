import React from 'react';
import MetamaskButton from '@components/Homepage/MetamaskButton';
import Grid from '@mui/material/Grid';
import WalletAddress from '@components/Homepage/WalletAddress';
import { Box } from '@mui/system';
import StoreButton from './StoreButton';

const ConnectWalletGrid = () => {
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={2}>
                <MetamaskButton />
            </Grid>
            <Grid item xs={2}>
                <WalletAddress />
            </Grid>
        </Grid>
    );
};

export default ConnectWalletGrid;
