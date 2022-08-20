## Informational Hint

### Value Overflow

- It means if a integer is set a value which exceeds its maximum limit then we get integer overflow. Example, `uint8` can store 8 bit data which ranges from 0 to 255, now if you set 256 as the variable's value, then it will cause integer overflow and the value will be 0. Realization: "..., 253, 254, 255, 0, 1, 2, 3, ..."

### Value Underflow

- It means if a integer is set a value which is below its maximum limit then we get integer underflow. Example, `uint8` can store 8 bit data which ranges from 0 to 255, now if you set -1 as the variable's value, then it will cause integer underflow and the value will be 255. Realization: "..., 253, 254, 255, 0, 1, 2, 3, ..."

### Invalid Operators

- It means the result of the operation is not defined (like divide by 0). Or the operators are not standard. (like sqrt(-1))

### Error Handling

- `assert(bool condition)`: causes an invalid opcode and thus state change reversion if the condition is not met - to be used for internal errors.
- `require(bool condition)`: reverts if the condition is not met - to be used for errors in inputs or external components.
- `require(bool condition, string memory message)`: reverts if the condition is not met - to be used for errors in inputs or external components. Also provides an error message.
- `revert()`: abort execution and revert state changes
- `revert(string memory reason)`:abort execution and revert state changes, providing an explanatory string

See the dedicated section on assert and require for more details on error handling and when to use which function here: https://solidity.readthedocs.io/en/latest/control-structures.html#error-handling-assert-require-revert-and-exceptions
