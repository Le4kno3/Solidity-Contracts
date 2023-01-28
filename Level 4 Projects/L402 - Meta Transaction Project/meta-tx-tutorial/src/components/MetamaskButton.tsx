import Button from '@mui/material/Button';
import { useWeb3React } from '@web3-react/core';

const MetamaskButton = () => {
    const { active } = useWeb3React();

    console.log(`Active: ${active}`);

    return <Button variant="contained">Hello</Button>;
};

export default MetamaskButton;
