pragma solidity 0.8.15;
//SPDX-License-Identifier: MIT

contract contractL1C04 {

    //this state variable, is defined outside a function so that it can be accessed by both functions.
    //define string and its visibility
    address owner = address(0);   //default owner is address(0)
    string private mystr = "";

    function getCallerAddress() public view returns (address){
        return msg.sender;
    }

    //set the owner address from user input. - This will require gas
    //sample address = 0xd034739c2ae807c70cd703092b946f62a49509d1
    function setOwner() public {
        owner = msg.sender;
    }

    // Set string value.
    function setString(string memory inputString) public {
        //it is required that msg.sender should be equal to owner.
        require(msg.sender == owner);

        //if pass then set the string.
        mystr = inputString;
    }

    // print the current owner address. - This will require no gas.
    function printString() public view returns (string memory) {
        return mystr;
    }
}
