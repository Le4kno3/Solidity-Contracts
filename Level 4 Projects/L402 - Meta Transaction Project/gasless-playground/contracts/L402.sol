// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//We dont need to use standard library but we should always best practices even if we are learning
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
// import "@openzeppelin/contracts/metatx/ERC2771Context.sol";
import "@opengsn/contracts/src/ERC2771Recipient.sol";

contract L402 is  Initializable, ERC2771Recipient  {
    uint256 private _value;
    address public trustedForwarder;

    //initialize function is needed for new version of solidity proxy
    function initialize(uint256 _x, address _trustedForwarder) public initializer {
        _value = _x;
        trustedForwarder = _trustedForwarder;
    }

    // Emitted when the stored value changes
    event ValueChanged(uint256 value);

    // Stores a new value in the contract
    function store(uint256 value) public {
        _value = value;
        emit ValueChanged(value);
    }

    function setTrustedForwarder(address _trustedForwarder) public {
        trustedForwarder = _trustedForwarder;
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }

    function versionRecipient() external view returns (string memory) {
        return "1";
    }
}
