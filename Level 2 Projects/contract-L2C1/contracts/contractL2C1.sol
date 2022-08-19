pragma solidity 0.8.16;
//SPDX-License-Identifier: MIT

contract contractL2C1 {

    uint private A1 = 8;
    uint private B1 = 2;

    function printA1() public view returns (uint){
        return A1;
    }

    function printB1() public view returns (uint){
        return B1;
    }

    function sum() public view returns (uint) {
        return A1+B1;
    }

    function multiply() public view returns (uint) {
        return A1*B1;
    }

    function division() public view returns (uint) {
        return A1/B1;
    }

    function subtraction() public view returns (uint) {
        return A1-B1;
    }

}