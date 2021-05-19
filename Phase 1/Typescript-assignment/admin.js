"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
class Admin extends user_1.User {
    constructor(permissions, id, firstName, lastName, username) {
        super(id, firstName, lastName, username);
        this.permissions = permissions;
    }
}
