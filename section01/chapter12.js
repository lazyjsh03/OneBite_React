function funcA(){
    // console.log("funcA");
}

let varA = funcA;
// console.log(varA); // function funcA(){...}
// funcA(); // funcA

// 함수 표현식
let varB = function () {    // 익명 함수
    // console.log("funcB");
};

// 화살표 함수
let varC = () => {
    // console.log("funcC");
}

let varD = (value) => value + 1; // 화살표 함수
// console.log(varD()); // 1