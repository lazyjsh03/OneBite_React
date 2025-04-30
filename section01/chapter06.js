// Type casting
// 1. Implicit Type Casting

let num = 10;
let str = "20";

const result = num + str;
// console.log(result); // Output: "1020" (string concatenation)

// 2. Explicit Type Casting
// String -> Number
let str1 = "10";
let strToNum = Number(str1);

// console.log(10 + strToNum);

let str2 = "10abc";
let strToNum2 = parseInt(str2);

// Number -> String
let num1 = 20;
let numToStr1 = String(num1);
// console.log("result is " + numToStr1); // Output: "20"