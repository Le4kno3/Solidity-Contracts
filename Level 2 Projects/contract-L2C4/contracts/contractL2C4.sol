pragma solidity 0.8.16;
//SPDX-License-Identifier: MIT

contract contractL2C4 {

    uint private A1 = 0;    //default value is 0.

    function setA1(uint user_A1) public {   //only this function will require gas.
        require(user_A1 > 0, "Number should be greater than 0.");
        A1 = user_A1;
    }

    function printA1() public view returns (uint){
        return A1;
    }

    //this logic is not optimised version of checking prime numbers.
    function ifPrime() public view returns (bool) {

        require(A1 > 0, "Number should be greater than 0.");    //this check is already done, but still doing again.

        uint counter = 0;

        for (uint i=1; i<=A1; i++){
            if(A1 % i == 0){    //check number of divisibles from 1...A1
                counter = counter + 1;
            }
        }

        if(counter == 2){   //if the number has only two divisors, 1 and the number itself A1, then it is a prime number.
            return true;
        } else {
            return false;
        }

    }

}