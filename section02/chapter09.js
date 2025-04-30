// 5가지 배열 변형 메서드

// 1. filter
// 조건을 만족하는 요소만 추출해서 새로운 배열을 생성

let arr1 = [
    {name: 'jsh', hobby: 'game'},
    {name: 'nora', hobby: 'game'},
    {name: 'oliver', hobby: 'conding'},
];

const Age30 = arr1.filter(
    (item) => item.hobby === 'game'
);
// console.log(Age30); // [{name: 'jsh1', age: 30}]

// 2. map
// 배열의 각 요소에 콜백 함수를 적용하여 그 결과를 새로운 배열로 반환환

let arr2 = [1, 2, 3];

const mapResult = arr2.map((item, index, arr) => {
    // console.log(index, item); // 0 1, 1 2, 2 3
    return item * 2;
});

// console.log(mapResult); // [2, 4, 6]

const names = arr1.map((item) => item.name);
// console.log(names); // ['jsh', 'nora', 'oliver']

// 3. sort
// 배열의 요소를 사전순으로 정렬하여 원본 배열을 변형

let arr3 = [10, 3, 5];
arr3.sort(
    (a, b) => {
    if (a > b) return 1;    // a가 b보다 앞에 위치
    if (a < b) return -1;   // a가 b보다 뒤에 위치
    return 0;       // a와 b가 같음
    }
); // [3, 5, 10]
// console.log(arr3); // [3, 5, 10]

arr3.sort((a, b) => b - a); // [10, 5, 3]
// console.log(arr3); // [10, 5, 3]

// 4. toSorted
// sort와 비슷하지만 원본 배열을 변형하지 않고 새로운 배열을 반환

let arr4 = [10, 3, 5];
let sorted = arr4.toSorted(
    (a, b) => a - b
);
// console.log(arr4); // [10, 3, 5]
// console.log(sorted); // [3, 5, 10]

// 5. join
// 배열의 요소를 문자열로 변환하여 하나의 문자열로 반환

arr5 = ["hi", "i am", "jsh"];
// console.log(arr5.join(" ")); // hi i am jsh