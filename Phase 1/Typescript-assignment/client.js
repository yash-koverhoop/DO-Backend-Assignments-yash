"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const blogPostRepository_1 = require("./blogPostRepository");
const author_1 = require("./author");
const typescript_assignment_1 = require("./typescript-assignment");
class Client {
    constructor(blogRepo) {
        this.blogRepo = blogRepo;
    }
    save(post) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.blogRepo.save(post);
            console.log(result);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.blogRepo.getAll();
            console.log(result);
        });
    }
    delete(post) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.blogRepo.delete(post);
        });
    }
}
exports.Client = Client;
const author = new author_1.Author([], 1, "John", "Doe", "johnDoe");
const blogRepo1 = new blogPostRepository_1.BlogPostRepository(author);
const client1 = new Client(blogRepo1);
client1.save({
    id: 100,
    title: "BlogPost 100",
    content: "BlogPost 100 content",
    date: new Date(),
    category: typescript_assignment_1.category.Tech,
    authorId: 1000,
});
client1.save({
    id: 101,
    title: "BlogPost 100",
    content: "BlogPost 100 content",
    date: new Date(),
    category: typescript_assignment_1.category.Tech,
    authorId: 1000,
});
client1.getAll();
client1.delete({
    id: 100,
    title: "BlogPost 100",
    content: "BlogPost 100 content",
    date: new Date(),
    category: typescript_assignment_1.category.Tech,
    authorId: 1000,
});
client1.getAll();
