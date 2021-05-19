"use strict";
// Q1 Create an enum called Category and add 3-5 values in this enum.
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = void 0;
var category;
(function (category) {
    category["Food"] = "FOOD";
    category["Travel"] = "TRAVEL";
    category["Tech"] = "TECH";
})(category = exports.category || (exports.category = {}));
// Q3 Create 3 objects using the BlogPost interface.
const blogPost1 = {
    id: 1,
    title: "BlogPost 1",
    content: "BlogPost 1 content",
    date: new Date(),
    category: category.Tech,
    authorId: 100,
};
const blogPost2 = {
    id: 2,
    title: "BlogPost 2",
    content: "BlogPost 2 content",
    date: new Date(),
    category: category.Tech,
    authorId: 200,
};
const blogPost3 = {
    id: 3,
    title: "BlogPost 3",
    content: "BlogPost 3 content",
    date: new Date(),
    category: category.Tech,
    authorId: 300,
};
const obj1 = {
    prop1: 10,
};
// intersection type
const obj2 = {
    prop1: 1,
    prop2: "abc",
};
/*
  Let say there are two interfaces I1 and I2. if we create an object obj1 with union type using interfaces I1 and I2 then any of the properties of I1 and I2 can  be present in obj1 but if we create object obj2 with intersection type using interfaces I1 and I2 then all the properties of I1 and I2 should be present in obj2.
  */
