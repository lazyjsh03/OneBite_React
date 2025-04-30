// 1. falsy values
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // BigInt zero

// 2. truthy values
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. usage

function printName(person){
    if(!person){
        console.log("person value does not exist");
        return;
    }
    console.log(person.name);
}

let person;

printName(person); // JSH