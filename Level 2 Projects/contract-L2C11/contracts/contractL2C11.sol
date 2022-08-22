pragma solidity 0.8.16;
//SPDX-License-Identifier: MIT

contract contractL2C11 {

    address payable public landlord;
    string public tenantName;
    uint public tenantAge;
    string public tenantOccupation;

    constructor (string memory name, uint age, string memory occupation) public{
        tenantName = name;
        tenantAge = age;
        tenantOccupation = occupation;
        landlord = msg.sender;
    }

    receive() external payable {
        require(landlord != msg.sender, "Landlord should not pay the rent.");
        require(msg.value == 0.5 ether, "Rent should be exactly 0.5 ETH.")
        landlord.transfer(msg.value);
    }
}