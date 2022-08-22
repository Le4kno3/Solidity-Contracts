## Informational Hint

### Enums

Enums are one way to create a user-defined type in Solidity. They are explicitly convertible to and from all integer types but implicit conversion is not allowed. The explicit conversion from integer checks at runtime that the value lies inside the range of the enum and causes a failing assert otherwise. Enums require at least one member, and its default value when declared is the first member.

The data representation is the same as for enums in C: The options are represented by subsequent unsigned integer values starting from 0.
