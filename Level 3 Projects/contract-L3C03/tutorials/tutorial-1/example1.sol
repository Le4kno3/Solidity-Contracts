//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.6.12;
//to get "usingProvable" contract.
import "github.com/provable-things/ethereum-api/blob/master/provableAPI_0.6.sol";

//the contract should inherit all functions from "usingProvable".
contract ExampleContract is usingProvable {
    string public ETHUSD; //this variable stores the latest price in USD.

    //events
    event LogConstructorInitiated(string nextStep);
    event LogPriceUpdated(string price);
    event LogNewProvableQuery(string description);

    //constructor
    constructor() public {
        //event
        emit LogConstructorInitiated(
            "Constructor was initiated. Call 'updatePrice()' to send the Provable Query."
        );
    }

    //when the oracle has received data from the data source, it will call the __callback function.
    function __callback(bytes32 myid, string memory result) public override {
        //checks if the sender is "provable"
        if (msg.sender != provable_cbAddress()) revert();
        ETHUSD = result;

        //event
        emit LogPriceUpdated(result);
    }

    function updatePrice() public payable {
        //check for sufficient gas price for fetching the oracle data.
        if (provable_getPrice("URL") > address(this).balance) {
            //if not sufficient balance in contract.

            //event
            emit LogNewProvableQuery(
                "Provable query was NOT sent, please add some ETH to cover for the query fee"
            );
        } else {
            //if there is sufficient balance to perform the transactions.

            //event
            emit LogNewProvableQuery(
                "Provable query was sent, standing by for the answer.."
            );

            //call the oracle to get the updated price. We can use any trusted exchanges like coinbase to set the data source.
            provable_query(
                "URL",
                "json(https://api.pro.coinbase.com/products/BTC-USD/ticker).price"
            );
        }
    }
}
