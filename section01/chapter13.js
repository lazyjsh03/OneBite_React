// call back function
// -> 인수로써 전달되는 함수(자신이 아닌 다른 함수)
// call back -> 나중에 실행되는는
function main(value) {
    // console.log(value);
    value(); // value() -> Sub()를 호출
}

function Sub(){
    // console.log("I am Sub function");
}

main(Sub); // Sub function을 인수로 전달

main(() => {
    // console.log("I am anonymous function"); // 익명함수
}); // 익명함수 전달

main(function() {
    // console.log("I am anonymous function"); // 익명함수
}); // 익명함수 전달

// callback function usage
function repeat(count) {
    for (let i = 1; i <= count; i++){
        console.log(i);
    }
}

function repeatDouble(count) {
    for (let i = 1; i <= count; i++){
        console.log(i * 2);
    }
}

function repeatTriple(count) {
    for (let i = 1; i <= count; i++){
        console.log(i * 3);
    }
}

repeat(5); // 1, 2, 3, 4, 5
repeatDouble(5); // 2, 4, 6, 8, 10
repeatTriple(5); // 3, 6, 9, 12, 15

// callback function을 인수로 전달
repeat(5, (i) => {
    console.log(i); // 1, 2, 3, 4, 5
});

repeat(5, (i) => {
    console.log(i * 2); // 2, 4, 6, 8, 10
});

repeat(5, (i) => {
    console.log(i * 3); // 3, 6, 9, 12, 15
});
