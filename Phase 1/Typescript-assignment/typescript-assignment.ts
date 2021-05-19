// Q1 Create an enum called Category and add 3-5 values in this enum.

export enum category {
  Food = "FOOD",
  Travel = "TRAVEL",
  Tech = "TECH",
}

/*
  
  Q2  Create an interface called BlogPost with the following properties:
  
  id
  title
  content
  date
  category (use the above created enum)
  authorId 
  
  */

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: Date;
  category: category;
  authorId: number;
}

// Q3 Create 3 objects using the BlogPost interface.

const blogPost1: BlogPost = {
  id: 1,
  title: "BlogPost 1",
  content: "BlogPost 1 content",
  date: new Date(),
  category: category.Tech,
  authorId: 100,
};

const blogPost2: BlogPost = {
  id: 2,
  title: "BlogPost 2",
  content: "BlogPost 2 content",
  date: new Date(),
  category: category.Tech,
  authorId: 200,
};

const blogPost3: BlogPost = {
  id: 3,
  title: "BlogPost 3",
  content: "BlogPost 3 content",
  date: new Date(),
  category: category.Tech,
  authorId: 300,
};

/*
  
  Q4 Create an intersection type using the BlogPost interface called BlogPostWithImage. This type should have all the properties of BlogPost and following additional properties (use typescript's concept of intersection types):
  
  image
  
  */

type BlogPostWithImage = BlogPost & {
  image: string;
};

// Q5 Show an example of typescript's union types and berifly explain how they differ from intersection types

// union type

interface I1 {
  prop1: number;
}

interface I2 {
  prop2: string;
}

const obj1: I1 | I2 = {
  prop1: 10,
};

// intersection type

const obj2: I1 & I2 = {
  prop1: 1,
  prop2: "abc",
};

/*
  Let say there are two interfaces I1 and I2. if we create an object obj1 with union type using interfaces I1 and I2 then any of the properties of I1 and I2 can  be present in obj1 but if we create object obj2 with intersection type using interfaces I1 and I2 then all the properties of I1 and I2 should be present in obj2.
  */
