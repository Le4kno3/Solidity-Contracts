## LEVEL 2

## Contract 12 Project - StudentsRegister

## Problem Statement

- Write a contract which will be deployed by teacher.
- There will be a function `add()` which will take student `name`, `class` & `joiningDate` as arguments and will store it where:
  - **name:** String to store student name
  - **class:** Number from 1 to 12
  - **joiningDate:** UNIX Date timestamp of student joining day (Example, 1661166376 (unix time) = 2022 year, 08 month, 22 date, 11 hours, 06 minutes, 16 seconds) Ref: https://www.unixtimestamp.com/

* Only teacher can add the data of student. An event will be emitted on success.
* Each student will be stored corresponding to a unique serial number called roll number which will be an integer (like, roll number = 4).

Write another function `checkStudent()` which accepts `roll number` as arguments and returns the name of the student. This function can be called by anyone.

Use `struct`, `modifier`, `mapping` in the contract.

### Hints

"hints" folder has hint

### Solution

"contracts" folder has the solutions.

### Solution Screenshots

"screenshots" folder has the screenshots.
