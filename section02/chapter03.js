// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3, 4, 5, 6];

let [one, two, three] = arr; // 배열의 구조 분해 할당
// console.log(one, two, three); // 1 2 3

// 2. 객체의 구조 분해 할당
let person = {
    name: "JSH",
    age: 23,
    hobby: "coding",
}

let {name, age, hobby} = person; // 객체의 구조 분해 할당
// console.log(name, age, hobby); // JSH 23 coding

// 3. 객체의 구조 분해 할당의 활용
const func = ({name, age, hobby}) => {
    console.log(name, age, hobby); // JSH 23 coding
}

// func(person);