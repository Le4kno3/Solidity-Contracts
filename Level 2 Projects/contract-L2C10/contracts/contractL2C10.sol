pragma solidity 0.8.16;
//SPDX-License-Identifier: MIT

contract contractL2C10 {

    enum Stage{Infant, Toddler, Child, Teen, Adult, Old}

    function getStage(uint months) public pure returns (Stage){
        if(months > 0 && months <= 12)
            return Stage.Infant;
        else if(months > 12 && months <= 24)
            return Stage.Toddler;
        else if(months > 24 && months <= 155)
            return Stage.Child;
        else if(months > 156 && months <= 228)
            return Stage.Teen;
        else if(months > 228 && months <= 720)
            return Stage.Adult;
        else
            return Stage.Old;
    }
}