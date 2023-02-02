import { useEffect, useState, useCallback } from "react";
import { useNetwork, useContract, useSigner } from "wagmi";

/**
 * Fetch quote hook to be updated on connecting supported networks
 */
const useGetValueFromNetwork = (address: string, abi: any) => {
  const { data: signer } = useSigner();
  const { chain } = useNetwork();
  const [value, setValue] = useState(0);
  // const [quote, setQuote] = useState("This is a default quote");
  // const [owner, setOwner] = useState("Default Owner Address");

  const contract = useContract({
    addressOrName: address,
    contractInterface: abi,
    signerOrProvider: signer,
  });
  console.log("The signer is : ", signer)

  // const fetchValue = useCallback(async () => {
  //   try {
  //     console.log("Reached 3, the fetched value is: ", await contract.retrieve())
  //     setValue(await contract.retrieve());
  //     console.log("Reached 4")
  //     // setQuote(res.currentQuote);
  //     // setOwner(res.currentOwner);
  //   } catch (err: any) {
  //     console.error(err);
  //   }
  // }, [contract]);

  const checkValue = async () => {
    const getVal = await contract.retrieve();
  }

  const fetchValue = useCallback(async () => {
    checkValue();
    try {
      setValue(await contract.retrieve());
      // setQuote(res.currentQuote);
      // setOwner(res.currentOwner);
    } catch (err: any) {
      console.error(err);
    }
  }, [contract]);

  useEffect(() => {
    checkValue();
    if (chain && !chain.unsupported && signer) fetchValue();
  }, [chain, signer, contract, fetchValue]);

  return {value, fetchValue};
};

export default useGetValueFromNetwork;
