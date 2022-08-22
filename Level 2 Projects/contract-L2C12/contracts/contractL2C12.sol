pragma solidity 0.8.16;
//SPDX-License-Identifier: MIT

contract contractL2C12 {

    struct Student{
        string name;
        uint class;
        uint joiningDate;
    }

    address public teacher;
    uint rollNumber;

    event Added(string name, uint class, uint time);

    mapping(uint => Student) register; // roll number => student details

    modifier isTeacher {
        require(msg.sender == teacher,"Only teacher can add student");
        _;
    }

    constructor() {
        teacher = msg.sender;
        rollNumber = 0;
    }

    //function to add a new student to the register
    function add(string memory name, uint class, uint joiningDate) public isTeacher{
        require(class > 0 && class <= 12, "Invalid class");
        Student memory s = Student(name, class, joiningDate);
        rollNumber++;
        register[rollNumber] = s;
        emit Added(name, class, block.timestamp);
    }

    function checkStudent(uint r_number) public view returns (string memory) {
        require(r_number <= rollNumber, "This roll number is not registered!");
        return register[r_number].name;
    }
}