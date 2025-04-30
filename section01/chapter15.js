// 1. Object Creation
let obj1 = new Object(); // Using Object constructor
let obj2 = {}; // Using object literal syntax


let Person = {

    // 2. Object Properties
    name: "Jesh",
    age: 23,
    hobby: "coding",
    extra: {},
    10: 20,
    "like cats": true,
}

// 3. Object Properties Control
// 3.1 Dot Notation, Bracket Notation
let name = Person.name; // Jesh
// console.log(name); // Jesh

let age = Person["age"]; // 23
// console.log(age); // 23

let property = "hobby";
let hobby = Person[property]; // coding
// console.log(hobby); // coding

// 3.2 Adding Properties
Person.job = "FE developer"; // Adding a new property
Person["location"] = "Korea"; // Adding a new property using bracket notation
// console.log(Person);

// 3.3 Updating Properties
Person.name = "John"; // Updating a property
Person["age"] = 30; // Updating a property using bracket notation

// 3.4 Deleting Properties
delete Person.hobby; // Deleting a property
delete Person["age"]; // Deleting a property using bracket notation
// console.log(Person);

// 3.5 Checking Properties (in operator)
let result1 = "name" in Person; // true
let result2 = "money" in Person; // false
// console.log(result1); // true
// console.log(result2); // false
