pragma solidity 0.8.16;
//SPDX-License-Identifier: MIT

contract contractL2C5 {

    function ifPrime(uint number) private pure returns (bool) {

        require(number > 1, "Number should be greater than 1.");    //this check is already done, but still doing again.

        uint counter = 0;

        for (uint i=1; i<=number; i++){
            if(number % i == 0){    //check number of divisibles from 1...A1
                counter = counter + 1;
            }
        }

        if(counter == 2){   //if the number has only two divisors, 1 and the number itself A1, then it is a prime number.
            return true;
        } else {
            return false;
        }

    }

    //this logic is not optimised version of checking prime numbers.
    function addPrimes(uint number) public pure returns (uint) {

        require(number > 1, "Number should be greater than 1.");    //this check is already done, but still doing again.

        uint sum = 0;

        for (uint i=2; i<number; i++){
            if(ifPrime(i) == true){    //check number of divisibles from 1...A1
                sum = sum + i;
            }
        }

        return sum;

    }

    uint[] private primes;

    function getPrimes(uint number) public returns (uint[] memory) {

        require(number > 1, "Number should be greater than 1.");    //this check is already done, but still doing again.

        for (uint i=2; i<number; i++){
            if( ifPrime(i) == true){    //we have created a new function, but we can implement the same in this function itself.
                primes.push(i);
            }
        }

        return primes;

    }

}