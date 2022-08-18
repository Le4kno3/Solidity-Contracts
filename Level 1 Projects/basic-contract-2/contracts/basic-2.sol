pragma solidity 0.8.15;
//SPDX-License-Identifier: MIT

contract basic2 {

    //this string state variable, is defined outside a function so that it can be accessed by both functions.
    //define string and its visibility
    string private myString = "";    //default value is empty

    //set the string from user input. - This will require gas
    function getString(string memory newval) public {
        myString = newval;
    }

    // print the current set string. - This will require no gas.
    //view = means we atmax can only read a state variable.
    function printString() public view returns (string memory) {
        return myString;
    }
}