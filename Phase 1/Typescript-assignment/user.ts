/* Q6 Create a new file, add a class named User in this file and export the class. Add the following properties to the User class:

id
firstName
lastName
username
*/

export class User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    username: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
  }
}
