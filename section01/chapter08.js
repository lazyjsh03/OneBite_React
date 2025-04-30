// 1. null 병합 연산자
// -> 존재하는 값 추려냄(null, undefined 제외)

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
// console.log(var4); // 10 (var1이 null이므로 var2의 값인 10을 반환)

let var5 = var1 ?? var3;
// console.log(var5); // 20 (var1이 null이므로 var3의 값인 20을 반환)

let var6 = var2 ?? var3;
// console.log(var6); // 10 (var2가 null이 아니므로 var2의 값인 10을 반환 -> 처음 값을 반환)

// 2. typeof 연산자
// -> 데이터 타입을 문자열로 반환

// 3. 삼항 연산자

let var7 = 10;

let res = var7 % 2 === 0 ? "even" : "odd";
// console.log(res); // even (var7이 짝수이므로 "even" 반환)