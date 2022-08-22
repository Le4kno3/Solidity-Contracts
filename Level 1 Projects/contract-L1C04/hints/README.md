## Informational Hint

### "msg" object

"msg" object is used in solidity to refer the caller of the contract. Example,

- to get the address of the caller: `msg.sender`
- to get the amount of money given by sender: `msg.value`

For more details refer: https://medium.com/upstate-interactive/what-you-need-to-know-about-msg-global-variables-in-solidity-566f1e83cc69

### "require" Statement

It is similar to `if` statement, but more strict, such that if in `require(condition)` if the `condition` is false, then the complete execution is stopped and an exception is created.

For more details refer: https://medium.com/blockchannel/the-use-of-revert-assert-and-require-in-solidity-and-the-new-revert-opcode-in-the-evm-1a3a7990e06e
