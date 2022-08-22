pragma solidity 0.8.16;
//SPDX-License-Identifier: MIT

contract contractL2C09 {

    uint private A1 = 0;    //default value is 0.
    uint private B1 = 0;    //default value is 0.

    function setA1B1(uint user_A1, uint user_B1) public {   //only this function will require gas.
        require(A1 >= 0, "A1 variable underflow is triggered.")
        require(B1 >= 0, "A1 variable underflow is triggered.")

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
        uint C1 = A1 + B1;

        require(C1 >= A1, "A variable overflow is triggered.")   //if the condition is not satisfied, then this error msg will be displayed.

        //we can also use "C1 >= B1", they are interchangable.

        //if there is no "variable overflow" then,
        return C1;
    }

    function multiply() public view returns (uint) {

        uint C1 = A1 * B1;

        require(C1/A1 == B1, "A variable overflow is triggered.")   //if the condition is not satisfied, then this error msg will be displayed.

        //we can also use "C1 >= b", they are interchangable.

        //if there is no "variable overflow" then,
        return C1;
    }

    function division() public view returns (uint) {

        uint C1 = A1 / B1;

        require(C1 * B1 == A1, "A variable underflow is triggered.")   //if the condition is not satisfied, then this error msg will be displayed.

        //we can also use "C1 >= b", they are interchangable.

        require(B1 > 0, "An invalid operator.")     //division by 0

        //if there is no "variable overflow" then,
        return C1;
    }

    function subtraction() public view returns (uint) {
        uint C1 = A1 - B1;

        require(C1 > 0, "A variable overflow is triggered.")   //if the condition is not satisfied, then this error msg will be displayed.

        //we can also use "C1 >= b", they are interchangable.

        //if there is no "variable overflow" then,
        return C1;
    }
}
