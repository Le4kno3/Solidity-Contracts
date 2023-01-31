import { Button, Grid, TextField } from '@mui/material';
import React from 'react'
import { useWeb3React  } from '@web3-react/core';
import { contractAddress } from '@cache/deploy';
import deployedContract from '@artifacts/contracts/L402.sol/L402.json';
import deployedContractV2 from '@artifacts/contracts/L402V2.sol/L402V2.json';
import { ethers } from 'ethers';

const StoreButton = (props) => {

  const {
    account,
    library,
} = useWeb3React();

  const handleButtonClick = async () => {

    let contract = new ethers.Contract(
      contractAddress,
      deployedContract.abi,
      library
  );

  const signer = library.getSigner();

  const tx = await contract.connect(signer).store(props.val);
  await tx.wait();
  const getVal = await contract.retrieve();
  console.log('The new value set is: ', getVal.toString());
  }
  return (
    <Grid container justifyContent="center" alignItems="center">
            
    <Grid item xs={2}>
    <Button variant="contained" onClick={handleButtonClick}>Store Value</Button>
    </Grid>
</Grid>
    
  )
}

export default StoreButton