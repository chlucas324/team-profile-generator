// imports employee constructor
const Employee = require('./Employee');

// engineer constructor extends employee construtor
class Engineer extends Employee {
    constructor(name, id, email, gitHubUserName) {

// call parent constructor
    super(name, id, email);

    this.gitHubUserName= gitHubUserName;
}

// override employee role to engineer
getGitHub() {
    return this.gitHubUserName;
}

getRole() {
    return "Engineer";
}
};

module.exports = Engineer;