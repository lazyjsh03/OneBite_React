// Promise는 비동기 작업을 처리하기 위한 자바스크립트 객체입니다.
// 비동기 작업을 감싸는 객체
// Pending: 대기 중
// Fulfilled: 성공함
// Rejected: 실패함
// resolve: 이행하다 -> fulfilled
// reject: 거부하다 -> rejected

function add10(num){
    const promise = new Promise((resolve, reject) => {
    // 비동기 작업 수행
    // exacutor

        setTimeout(() => {
            if(typeof num === "number"){
                resolve(num + 10); // fulfilled
            }else{
                reject("num is not number"); // rejected
            }
        }, 1000);
    }
);

return promise;
}

add10(0).then((result) => {
    console.log("result: ", result); // result: 10
    return add10(result);
}).then((result) => {
    console.log("result: ", result); // result: 20
    return add10(undefined);
}).then((result) => {
    console.log("result: ", result); // result: 30
}).catch((error) => {
    console.log("error: ", error); // error: num is not number
});
