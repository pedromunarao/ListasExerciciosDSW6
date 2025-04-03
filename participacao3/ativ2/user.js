class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printName() {
        console.log(this.name);
    }

    printAge() {
        console.log(this.age);
    }
}

function printName(user) {
    console.log(`User's name is ${user}`);
}

function printAge(age) {
    console.log(`User's age is ${age}`);
}

module.exports = { User, printName, printAge };
