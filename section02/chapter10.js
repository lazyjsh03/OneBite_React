// 1. Create Date Objects

let date1 = new Date();
// console.log(date1); // Current date and time

let date2 = new Date("2023, 10, 1");
// console.log(date2);

// 2. Time stamp

let ts1 = date2.getTime();
// console.log(ts1); // 1696118400000

let date3 = new Date(ts1);
// console.log(date3); // 2023-10-01T00:00:00.000Z

// 3. Date methods

let year = date1.getFullYear();
// console.log(year); // 2023
let month = date1.getMonth();
// console.log(month); // 9 (October is month 9, as months are zero-indexed)
let date = date1.getDate();
// console.log(date); // 1
let hour = date1.getHours();
// console.log(hour); // 10
let minute = date1.getMinutes();
// console.log(minute); // 0
let second = date1.getSeconds();
// console.log(second); // 0

// 자바 스크립트의 월은 0부터 시작한다. 즉, 0은 1월, 1은 2월, ..., 11은 12월을 의미한다.
month = date1.getMonth() + 1;
// console.log(month); // 10 (October)

// 4. 시간 수정
date1.setFullYear(2024);
date1.setMonth(11);
date1.setDate(25);
date1.setHours(15);
date1.setMinutes(30);
date1.setSeconds(45);
// console.log(date1); // 2024-12-25T15:30:45.000Z

// 5. Date formating
// console.log(date1.toDateString()); // Wed Dec 25 2024 15:30:45 GMT+0000 (Coordinated Universal Time)
// console.log(date1.toLocaleDateString()); // 12/25/2024