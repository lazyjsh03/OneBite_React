// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 배열의 각 요소에 대해 주어진 함수를 실행합니다.

let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
    // console.log(idx, item * 2);
});

arr1.forEach((item, idx, arr) => {
    // console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
    doubledArr.push(item * 2);
})

// console.log(doubledArr); // [2, 4, 6]

// 2. includes
// 배열에 특정 요소가 포함되어 있는지 확인합니다.

let arr2 = [1, 2, 3];
let result1 = arr2.includes(2); // true
let result2 = arr2.includes(4); // false

// console.log(result1); // true
// console.log(result2); // false

// 3. indexOf
// 배열에서 특정 요소의 첫 번째 인덱스를 반환합니다.

let arr3 = [1, 2, 3];
let index = arr3.indexOf(2); // 1
let index2 = arr3.indexOf(4); // -1 (존재하지 않음)
// console.log(index); // 1
// console.log(index2); // -1

let objectArr = [
    {name: 'jsh'},
    {name: 'jsh2'},
];

objectArr.indexOf({name: 'jsh'}); // -1 얕은 참조로 인해 특정 객체를 찾지 못함


// 4. findIndex
// 배열에서 주어진 콜백백 함수를 만족하는 첫 번째 요소의 인덱스를 반환합니다.

let arr4 = [1, 2, 3];

const findedIndex = arr4.findIndex((item) => item === 4); // -1 (존재하지 않음)
// console.log(findedIndex); // -1

objectArr.findIndex((item) => item.name === 'jsh2'); // 1 깊은 참조로 특정 객체를 찾을 수 있음

// 5. find
// findIndex와 유사하지만, 조건을 만족하는 인덱스가 아니라 요소를를 반환

let arr5 = [
    {name: 'jsh'},
    {name: 'jsh2'},
    {name: 'jsh3'},
];

let findedElement = arr5.find((item) => item.name === 'jsh2'); // {name: 'jsh2'}
// console.log(findedElement); // {name: 'jsh2'}