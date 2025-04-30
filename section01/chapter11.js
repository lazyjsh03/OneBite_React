function add(num1, num2) {
    return num1 + num2;
}

let num1 = 5;
let num2 = 10;
let result = add(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${result}.`);

// 함수의 선언을 함수의 호출보다 뒤에 해도 상관없다.
// 자바스크립트는 함수 선언을 호이스팅하기 때문에, 함수 선언이 호출보다 뒤에 있어도 정상적으로 작동한다.
// 호이스팅 -> 자바스크립트 엔진이 코드를 실행하기 전에 함수 선언을 메모리에 올리는 것