"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostRepository = void 0;
class BlogPostRepository {
    constructor(author) {
        this.author = author;
    }
    save(post) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.author.posts.push(post);
                resolve(post);
            }, 2000);
        });
    }
    delete(post) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.author.posts = this.author.posts.filter((p) => {
                    return p.id != post.id;
                });
            }, 2000);
        });
    }
    getAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.author.posts);
            }, 2000);
        });
    }
}
exports.BlogPostRepository = BlogPostRepository;
