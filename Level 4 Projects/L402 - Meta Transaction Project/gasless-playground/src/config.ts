import * as dotenv from "dotenv";
import deployedContract from '../artifacts/contracts/L402.sol/L402.json';

dotenv.config();

export const configData = () => {
    return ({
        "contract": {
          "address": "0x1360e9f61892d5c13f49573c9b0E518183870218",
          "abi": deployedContract.abi
        },
        "apiKey": {
          "test": process.env.apiKeyTest,
          "prod": process.env.apiKeyProd
        }
      })
}