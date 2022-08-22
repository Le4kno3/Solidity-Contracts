## Informational Hint

### Event

Solidity events give an abstraction on top of the EVM’s logging functionality. Applications can subscribe and listen to these events through the RPC interface of an Ethereum client. When you call them, they cause the arguments to be stored in the transaction’s log - a special data structure in the blockchain. The Log and its event data is not accessible from within contracts.
