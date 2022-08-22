pragma solidity 0.8.16;
//SPDX-License-Identifier: MIT

contract contractL2C03 {

    uint private A1 = 0;    //default value is 0.

    function setA1(uint user_A1) public {   //only this function will require gas.
        require(user_A1 > 1, "Number should be greater than 1.");
        A1 = user_A1;
    }

    function printA1() public view returns (uint){
        return A1;
    }

    function checkEvenOdd() public view returns (bool) {

        require(A1 > 1, "Number should be greater than 1.");    //this check is already done, but still doing again.

        if(A1 % 2 == 0){
            return true;
        } else {
            return false;
        }
    }

    function checkThreeSeven() public view returns (bool) {

        require(A1 > 10, "Number should be greater than 10.");    //this check is already done, but still doing again.

        if(A1 % 3 == 0){
            return true;
        } else if (A1 % 7 == 0) {
            return true;
        } else {
            return false;
        }
    }
}
