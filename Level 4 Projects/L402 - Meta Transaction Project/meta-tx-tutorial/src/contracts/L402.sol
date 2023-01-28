// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//We dont need to use standard library but we should always best practices even if we are learning
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract L402 is Initializable {
    uint256 private _value;

    //initialize function is needed for new version of solidity proxy
    function initialize(uint256 _x) public initializer {
        _value = _x;
    }

    // Emitted when the stored value changes
    event ValueChanged(uint256 value);

    // Stores a new value in the contract
    function store(uint256 value) public {
        _value = value;
        emit ValueChanged(value);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }
}
