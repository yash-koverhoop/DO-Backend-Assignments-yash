import { BlogPostRepository } from "./blogPostRepository";
import { Author } from "./author";
import { BlogPost, category } from "./typescript-assignment";
export class Client {
  constructor(private blogRepo: BlogPostRepository) {}
  public async save(post: BlogPost) {
    const result = await this.blogRepo.save(post);
    console.log(result);
  }
  public async getAll() {
    const result = await this.blogRepo.getAll();
    console.log(result);
  }
  public async delete(post: BlogPost) {
    await this.blogRepo.delete(post);
  }
}
const author = new Author([], 1, "John", "Doe", "johnDoe");
const blogRepo1 = new BlogPostRepository(author);
const client1 = new Client(blogRepo1);
client1.save({
  id: 100,
  title: "BlogPost 100",
  content: "BlogPost 100 content",
  date: new Date(),
  category: category.Tech,
  authorId: 1000,
});
client1.save({
  id: 101,
  title: "BlogPost 100",
  content: "BlogPost 100 content",
  date: new Date(),
  category: category.Tech,
  authorId: 1000,
});
client1.getAll();
client1.delete({
  id: 100,
  title: "BlogPost 100",
  content: "BlogPost 100 content",
  date: new Date(),
  category: category.Tech,
  authorId: 1000,
});
client1.getAll();
