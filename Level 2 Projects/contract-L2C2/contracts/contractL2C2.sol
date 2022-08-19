pragma solidity 0.8.16;
//SPDX-License-Identifier: MIT

contract contractL2C2 {

    uint private A1 = 0;    //default value is 0.
    uint private B1 = 0;    //default value is 0.

    function setA1B1(uint user_A1, uint user_B1) public {   //only this function will require gas.
        A1 = user_A1;
        B1 = user_B1;
    }

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