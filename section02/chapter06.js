// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1. Array index
for (let i = 0; i < arr.length; i++){
    // console.log(arr[i]); // 1, 2, 3
}

let arr2 = [4,5,6,7,8];

for (let i = 0; i < arr2.length; i++){
    // console.log(arr2[i]); // 4, 5, 6, 7, 8
}

// 1.2. for of (배열, 문자열 순회 가능)
// -> for of는 배열을 순회할 때 사용
for (let item of arr){
    // console.log(item); // 1, 2, 3
}

// 2. 객체 순회
let person = {
    name: 'jsh',
    age: 23,
    hobby: 'coding',
};

// 2.1. Object.keys
// -> 객체의 키를 배열로 반환

let keys = Object.keys(person);
// console.log(keys); // ['name', 'age', 'hobby']

for (let i = 0; i < keys.length; i++){
    // console.log(person[keys[i]]); // jsh, 23, coding
}

for (let key of keys){
    // console.log(person[key]); // jsh, 23, coding
}

// key and value
for (let key of keys){
    const value = person[key];
    // console.log(key, value); // name jsh, age 23, hobby coding
}

// 2.2. Object.values
// -> 객체의 value를 배열로 반환(value만 반환하고 싶을 때때)

let values = Object.values(person);
// console.log(values); // ['jsh', 23, 'coding']

for (let value of values){
    // console.log(value); // jsh, 23, coding
}

// 2.3. for in(객체에만 사용 가능능)
for (let key in person){
    let value = person[key];
    // console.log(key, value); // name, age, hobby
}