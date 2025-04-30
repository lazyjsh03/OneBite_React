// 1. constant object
const animal = {
    species: 'Dog',
    name: 'Buddy',
    age: 5,
}

animal.color = 'Brown'; // Adding a new property
animal.age = 6; // Modifying an existing property
delete animal.name; // Deleting a property
// console.log(animal); // { species: 'Dog', age: 6, color: 'Brown' }
// -> 프로퍼티 컨트롤 가능

// 2. method
const person = {
    name: 'JSH',
    // method declaration
    sayHi() {
        console.log(`Hi, my name is ${this.name}`);
    },
}

person.sayHi(); // Hi, my name is JSH
person['sayHi'](); // Hi, my name is JSH