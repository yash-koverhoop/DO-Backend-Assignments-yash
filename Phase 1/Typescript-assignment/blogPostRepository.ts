import { Author } from "./author";
import { BlogPost } from "./typescript-assignment";

export class BlogPostRepository {
  constructor(private author: Author) {}
  save(post: BlogPost): Promise<BlogPost> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.author.posts.push(post);
        resolve(post);
      }, 2000);
    });
  }

  delete(post: BlogPost): Promise<BlogPost> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.author.posts = this.author.posts.filter((p) => {
          return p.id != post.id;
        });
      }, 2000);
    });
  }

  getAll(): Promise<BlogPost[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.author.posts);
      }, 2000);
    });
  }
}
