// imports employee constructor
const Employee = require('./Employee');

// intern constructor extends employee constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
    // calls parent constructor
        super(name, id, email);

        this.school = school;
    }

// returns school from input
    getSchool() {
        return this.school;
    }

// overrides employee role to intern
    getRole() {
        return "Intern";
    }
}

// to be exported
module.exports = Intern;