"use strict";
/**
 * Classes
 */
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Jane", "M.", "User");
const result = greeter(user);
result;
//# sourceMappingURL=03_classes.js.map