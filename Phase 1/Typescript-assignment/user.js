"use strict";
/* Q6 Create a new file, add a class named User in this file and export the class. Add the following properties to the User class:

id
firstName
lastName
username
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, firstName, lastName, username) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
    }
}
exports.User = User;
