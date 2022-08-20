## Informational Hint

### Mapping

You declare mapping types with the syntax `mapping(KeyType => ValueType)`. The `_KeyType` can be any elementary type. This means it can be any of the built-in value types plus bytes and string. `_ValueType` can be any type, including mappings. Example, to generate a simple balance book such that the key will be a blockchain address and the value will be the balance of that address, this will look like below,

```js
contract contractL2C6 {

    mapping(address => uint) BalanceBook;   //thi is how mapping is defined

    function updateBalance() public {
        address addr = msg.sender;

        BalanceBook[addr] = 10 ether;  //this is how a mapping is updated.

    }
}

```

Mappings can only have a data location of **storage** and thus are allowed for state variables, as storage reference types in functions, or as parameters for library functions. They cannot be used as parameters or return parameters of contract functions that are publicly visible.

### Events

Solidity events give an abstraction on top of the EVM’s logging functionality. Applications can subscribe and listen to these events through the RPC interface of an Ethereum client.

Events are inheritable members of contracts. When you call them, they cause the arguments to be stored in the transaction’s log - a special data structure in the blockchain.
