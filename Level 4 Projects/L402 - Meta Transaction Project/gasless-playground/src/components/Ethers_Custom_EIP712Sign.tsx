import React, { useState, useEffect } from "react";
import { Button, Box, Typography, CircularProgress } from "@material-ui/core";
import { Link, Backdrop, makeStyles } from "@material-ui/core";

import { ethers, ContractInterface, providers } from "ethers";
import { useAccount, useNetwork, useSigner } from "wagmi";

import { Biconomy } from "@biconomy/mexa";
import useGetValueFromNetwork from "../hooks/useGetValueFromNetwork";
import {
  getConfig,
  getSignatureParametersEthers,
  ExternalProvider,
  showErrorMessage,
  showInfoMessage,
  showSuccessMessage,
} from "../utils";

import Web3 from 'web3';

// import { configData } from "../config";

let biconomy: any;

function App() {
  const classes = useStyles();

  const { address } = useAccount();
  const { chain } = useNetwork();
  const { data: signer } = useSigner();

  const [backdropOpen, setBackdropOpen] = React.useState(false);
  const [loadingMessage, setLoadingMessage] = React.useState("");
  const [newValue, setNewValue] = useState("");
  const [metaTxEnabled] = useState(true);
  const [transactionHash, setTransactionHash] = useState("");
  const [config, setConfig] = useState(getConfig("").configCustom_EIP712Sign);

  useEffect(() => {
    // const conf2 = JSON.stringify(configData());
    const conf = getConfig(chain?.id.toString() || "").configCustom_EIP712Sign;

    setConfig(conf);
  }, [chain?.id]);
  // const value = 0;
  // const fetchValue = () => 0;
  const {value, fetchValue} = useGetValueFromNetwork(
    config.contract.address,
    config.contract.abi
  );

  useEffect(() => {
    const initBiconomy = async () => {
      setBackdropOpen(true);
      setLoadingMessage("Initializing Biconomy ...");
      biconomy = new Biconomy(window.ethereum as ExternalProvider, {
        apiKey: config.apiKey.test,
        debug: true,
        contractAddresses: [config.contract.address],
      });
      await biconomy.init();
      setBackdropOpen(false);
    };
    if (address && chain && signer?.provider) initBiconomy();
  }, [address, chain, config, signer?.provider]);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setTransactionHash("");
    if (!address) {
      showErrorMessage("Please connect wallet");
      return;
    }
    if (!newValue) {
      showErrorMessage("Please enter the quote");
      return;
    }
    if (metaTxEnabled) {
      console.log("Sending meta transaction");
      let userAddress = address;
      // const web3 = new Web3(window.ethereum as any);
      const ethersProvider = new ethers.providers.Web3Provider(
        window.ethereum as any
      );
      const domainType = [
        { name: "name", type: "string" },
        { name: "version", type: "string" },
        { name: "verifyingContract", type: "address" },
        { name: "salt", type: "bytes32" },
      ];
      const metaTransactionType = [
        { name: "nonce", type: "uint256" },
        { name: "from", type: "address" },
        { name: "functionSignature", type: "bytes" },
      ];
      let domainData = {
        name: "TestContract",
        version: "1",
        verifyingContract: config.contract.address,
        salt: "0x" + (chain?.id || 80001).toString(16).padStart(64, "0"),
      };
      const contractInstance = new ethers.Contract(
        config.contract.address,
        config.contract.abi as ContractInterface,
        signer!
      );

      const account = await window.ethereum?.request({ method: 'eth_requestAccounts' })
      // let nonce = "123";
      let nonce:any;
      if(account){
        nonce = Number(await ethersProvider.getTransactionCount(account[0]));
      }
      const contractInterface = new ethers.utils.Interface(config.contract.abi);
      let functionSignature = contractInterface.encodeFunctionData("store", [
        newValue,
      ]);
      let message = {
        nonce: parseInt(nonce),
        from: userAddress,
        functionSignature: functionSignature,
      };

      const dataToSign = JSON.stringify({
        types: {
          EIP712Domain: domainType,
          MetaTransaction: metaTransactionType,
        },
        domain: domainData,
        primaryType: "MetaTransaction",
        message: message,
      });

      // Its important to use eth_signTypedData_v3 and not v4 to get EIP712 signature because we have used salt in domain data
      // instead of chainId
      let signature = await ethersProvider.send("eth_signTypedData_v3", [
        userAddress,
        dataToSign,
      ]);
      let { r, s, v } = getSignatureParametersEthers(signature);
      sendSignedTransaction(address!, functionSignature, r, s, v);
    } else {
      console.log("Sending normal transaction");
      // let tx = await contractInstance.methods.setQuote(newQuote).send({
      //   from: address,
      // });
      // setTransactionHash(tx.transactionHash);
      // tx = await tx.wait(1);
      // console.log(tx);
      showSuccessMessage("Transaction confirmed");
      fetchValue();
    }
  };

  const sendSignedTransaction = async (
    userAddress: string,
    functionData: string,
    r: string,
    s: string,
    v: number
  ) => {
    try {
      showInfoMessage(`Sending transaction via Biconomy`);
      const provider = await biconomy.provider;
      let contractInstance:any;
      if(signer){
        contractInstance = new ethers.Contract(
          config.contract.address,
          config.contract.abi,
          biconomy.ethersProvider
        );
      }
      
      let { data } =
        await contractInstance.populateTransaction.store(newValue);

      // let { data } = await contractInstance.store(newValue);

      let txParams = {
        data: data,
        to: config.contract.address,
        from: userAddress,
        signatureType: "EIP712_SIGN",
      };
      console.log("parameters: ",txParams);
      // const ethersProvider = new ethers.providers.Web3Provider(
      //   window.ethereum as any
      // );

      const tx = await provider.send("eth_sendTransaction", [txParams]);
      console.log(tx);
      biconomy.on("txHashGenerated", (data: any) => {
        console.log(data);
        showSuccessMessage(`tx hash ${data.hash}`);
      });
      biconomy.on("txMined", (data: any) => {
        console.log(data);
        showSuccessMessage(`tx mined ${data.hash}`);
        fetchValue();
      });
    } catch (error) {
      console.log(error);
      fetchValue();
    }
  };

  return (
    <div className="App">
      <section className="main">
        <div className="flex">
          <p className="mb-author">Value: {Number(value)}</p>
        </div>
      </section>
      <section>
        {transactionHash !== "" && (
          <Box className={classes.root} mt={2} p={2}>
            <Typography>
              Check your transaction hash
              <Link
                href={`https://kovan.etherscan.io/tx/${transactionHash}`}
                target="_blank"
                className={classes.link}
              >
                here
              </Link>
            </Typography>
          </Box>
        )}
      </section>
      <section>
        <div className="submit-container">
          <div className="submit-row">
            <input
              type="text"
              placeholder="Enter your quote"
              onChange={(event) => setNewValue(event.target.value)}
              value={newValue}
            />
            <Button variant="contained" color="primary" onClick={onSubmit}>
              Submit
            </Button>
            {/* <Button
              variant="contained"
              color="primary"
              onClick={onSubmitWithPrivateKey}
              style={{ marginLeft: "10px" }}
            >
              Submit (using private key)
            </Button> */}
          </div>
        </div>
      </section>
      <Backdrop
        className={classes.backdrop}
        open={backdropOpen}
        onClick={() => setBackdropOpen(false)}
      >
        <CircularProgress color="inherit" />
        <div style={{ paddingLeft: "10px" }}>{loadingMessage}</div>
      </Backdrop>
    </div>
  );
}

export default App;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      // marginLeft: theme.spacing(0),
    },
  },
  link: {},
  main: {},
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    opacity: ".85!important",
    background: "#000",
  },
}));
