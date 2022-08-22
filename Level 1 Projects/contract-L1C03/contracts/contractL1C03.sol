pragma solidity 0.8.15;
//SPDX-License-Identifier: MIT

contract contractL1C03 {

    //this state variable, is defined outside a function so that it can be accessed by both functions.
    //define string and its visibility
    address owner = address(0);   //default owner is address(0)

    //define the event which will be sent every time the owner is changed.
    event OwnerSet(address owner);

    //set the owner address from user input. - This will require gas
    //sample address = 0xd034739c2ae807c70cd703092b946f62a49509d1
    function setOwner(address inputAddress) public {
        owner = inputAddress;
        OwnerSet(owner);
    }

    // print the current owner address. - This will require no gas.
    function printOwner() public view returns (address) {
        return owner;
    }
}
