## Informational Hint

### Receive Ether Function

- A contract can have at most one receive function, declared using `receive() external payable { ... }`(without the `function` keyword).
- This function cannot have arguments, cannot return anything and must have external visibility and payable state mutability.

Know more: https://solidity.readthedocs.io/en/latest/contracts.html#receive-ether-function

### Sending money to contract programatically

- This is the function that is executed on plain Ether transfers (e.g. via `.send()` or `.transfer()`).

### Sending money to contract using low-level calls (Remix IDE).

- Step 1: We first need to deploy the contract using the owner wallet/account.

- Step 2: After the contract is deployed, in the **Deployed Contracts** section, we get an additional section called **Low level transactions** in Remix IDE.

- Step 3: Now to send money, first we need to change the sender's address properly. Then we need to set the amount of money to be transferred.

- Step 3: Now, to send money directly to a contract we need to use **low level functions** such as `address.send()`. This is done in Remix IDE, using the **Transact** button in **Low level transactions** section. It is executed on a call to the contract with **empty calldata.**
