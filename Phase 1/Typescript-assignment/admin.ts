import { User } from "./user";

class Admin extends User {
  permissions: string[];
  constructor(
    permissions: string[],
    id: number,
    firstName: string,
    lastName: string,
    username: string
  ) {
    super(id, firstName, lastName, username);
    this.permissions = permissions;
  }
}
