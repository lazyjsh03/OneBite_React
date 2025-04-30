// 1. Spread operator
// -> 객체나 배열의 요소들을 펼쳐서 새로운 객체나 배열을 만들 때 사용합니다.

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

// console.log(arr2); // [4, 1, 2, 3, 5, 6]

let obj1 = {
    a: 1,
    b: 2,
}

let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
}

// console.log(obj2); // { a: 1, b: 2, c: 3, d: 4 }

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

// funcA(...arr1); // 1 2 3

// 2. Rest operator
// -> 함수의 매개변수에서 나머지 인자를 배열로 받을 때 사용합니다.

function funcB(one, two, ...Rest) { // Rset 매개변수가 마지막 인수로 사용되어야 합니다.
    console.log(Rest);
} 

// funcB(...arr1); // 1 2 3