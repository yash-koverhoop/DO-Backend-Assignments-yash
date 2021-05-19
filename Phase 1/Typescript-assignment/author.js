"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
const user_1 = require("./user");
class Author extends user_1.User {
    constructor(posts, id, firstName, lastName, username) {
        super(id, firstName, lastName, username);
        this.posts = posts;
    }
}
exports.Author = Author;
