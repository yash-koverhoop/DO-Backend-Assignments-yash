import { User } from "./user";
import { BlogPost } from "./typescript-assignment";
export class Author extends User {
  posts: BlogPost[];
  constructor(
    posts: BlogPost[],
    id: number,
    firstName: string,
    lastName: string,
    username: string
  ) {
    super(id, firstName, lastName, username);
    this.posts = posts;
  }
}
