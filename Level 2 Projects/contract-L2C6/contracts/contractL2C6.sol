pragma solidity 0.8.16;
//SPDX-License-Identifier: MIT

contract contractL2C6 {
    //example time, 1660916670 = 2022 year - 08 month - 19th day - 13 hour - 44 min - 30 sec
    function getTime(uint time) public view returns (uint){
        if(time > block.timestamp)
            return time + 1 hours + 20 minutes + 30 seconds;    //1 hours = 1 hour in uint
        else
            return 0;
    }

}