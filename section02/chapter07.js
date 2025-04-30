// 6가지 요소 조작 메서드

// 1. push(e) : 배열의 끝에 요소 e 추가

let arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
// console.log(arr); // [1, 2, 3, 4]

const newLength = arr.push(5, 6); // [1, 2, 3, 4, 5, 6]
// console.log(arr); // [1, 2, 3, 4, 5, 6]
// console.log(newLength); // 6

// 2. pop() : 배열의 끝에서 요소 제거 후 반환

let arr2 = [1, 2, 3];

const poppedItem = arr2.pop(); // [1, 2]
// console.log(arr2); // [1, 2]
// console.log(poppedItem); // 3

// 3. shift() : 배열의 첫 번째 요소 제거 후 반환

let arr3 = [1, 2, 3];

const shiftedItem = arr3.shift(); // [2, 3]
// console.log(arr3); // [2, 3]
// console.log(shiftedItem); // 1

// unshift(e) : 배열의 첫 번째에 요소 e 추가

let arr4 = [1, 2, 3];

const newLength2 = arr4.unshift(0); // [0, 1, 2, 3]
// console.log(arr4); // [0, 1, 2, 3]
// console.log(newLength2); // 4

// 5. splice(start, end, item1, item2, ...) 
// -> 배열의 start 위치에서 end 위치까지 잘라내서 배열로 반환환

let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // [3, 4, 5]
let sliced2 = arr5.slice(2); // [3, 4, 5]
let sliced3 = arr5.slice(-1); // [5]

// console.log(sliced); // [3, 4, 5]
// console.log(sliced2); // [3, 4, 5]
// console.log(sliced3); // [5]
// console.log(arr5); // [1, 2, 3, 4, 5]

// 6. concat(arr1, arr2, ...) : 배열을 합쳐서 새로운 배열 반환

let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];

let concated = arr6.concat(arr7); // [1, 2, 3, 4, 5, 6]
let concated2 = arr7.concat(arr6); // [4, 5, 6, 1, 2, 3]

// console.log(concated); // [1, 2, 3, 4, 5, 6]
// console.log(concated2); // [4, 5, 6, 1, 2, 3]