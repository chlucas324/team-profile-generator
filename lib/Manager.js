// imports employee constructor
const Employee = require('./Employee');

// manager constructor extends employee constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        // call parent constructor
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    // overrides employee role to manager
    getRole() {
        return "Manager";
    }
};

//to be exported
module.exports = Manager;