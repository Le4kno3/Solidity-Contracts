import Button from '@mui/material/Button';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

const injected = new InjectedConnector({
    supportedChainIds: [80001, 31337, 1337]
});

const MetamaskButton = () => {
    const { active, activate, deactivate } = useWeb3React();

    console.log(`Active: ${active}`);

    const handleConnectButtonToggle = () => {
        if (active) {
            deactivate();
        } else {
            activate(injected);
        }

        // alert('Activated');
    };

    return (
        <Button
            variant="contained"
            color={active ? 'error' : 'primary'}
            onClick={handleConnectButtonToggle}
        >
            {active ? 'Disconnect Wallet' : 'Connect Wallet'}
        </Button>
    );
};

export default MetamaskButton;
