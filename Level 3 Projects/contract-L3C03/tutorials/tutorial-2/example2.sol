//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.6.12;
//to get "usingProvable" contract.
import "github.com/provable-things/ethereum-api/blob/master/provableAPI_0.6.sol";

//the contract should inherit all functions from "usingProvable".
contract RandomNumber1 is usingProvable {
    string public random_number; //this variable stores the latest price in USD.

    event LogStatus(string description);

    //when the oracle has received data from the data source, it will call the __callback function.
    function __callback(bytes32 myid, string memory result) public override {
        //checks if the sender is "provable"
        if (msg.sender != provable_cbAddress()) revert();
        random_number = result;
    }

    function getRandomNumber() public payable {
        //check for sufficient gas price for fetching the oracle data.
        if (provable_getPrice("URL") > address(this).balance) {
            //if not sufficient balance in contract.

            //event
            emit LogStatus(
                "Provable query was NOT sent, please add some ETH to cover for the query fee"
            );
        } else {
            //if there is sufficient balance to perform the transactions.

            //event
            emit LogStatus(
                "Provable query was sent, standing by for the answer.."
            );

            //call the oracle to get the random number
            provable_query("WolframAlpha", "random number between 0 and 100");
        }
    }
}
