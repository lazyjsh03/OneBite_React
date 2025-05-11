// async
// 특정 함수를 비동기 함수로 변환
// 함수가 promise를 반환하게 됨

async function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "JSH", age: 23 });
        }, 1000);
    });
}

// console.log(getData()); // Promise { <pending> }

// await
// async 함수 안에서만 사용 가능
// 비동기 함수가 끝날 때까지 기다림

async function printData(){
    const data = await getData();
    console.log(data); // { name: 'JSH', age: 23 }
}

printData();