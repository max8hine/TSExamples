"use strict";
/**
 * Interfaces
 *
 * In TypeScript, two types are compatible
 * If their internal structure is compatible.
 *
 * This allows us to implement an interface
 * By having the shape the interface requires,
 * Without an explicit implements clause.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
const user = { firstName: "Jane", lastName: "User" };
const result = greeter(user);
//# sourceMappingURL=02_interface.js.map