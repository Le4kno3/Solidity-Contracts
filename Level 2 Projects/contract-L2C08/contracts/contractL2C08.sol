pragma solidity 0.8.16;
//SPDX-License-Identifier: MIT

contract contractL2C08 {

    mapping( uint => string) private students;

    function enroll(uint rollnumber, string memory name) public {
        students[rollnumber] = name;
    }

    function printName(uint rollnumber) public view {
        return students[rollnumber];
    }
}
