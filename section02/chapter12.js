// function add(a, b, callback){
//     setTimeout(() => {
//         const sum = a + b;
//         callback(sum);
//     }, 3000);
// }

// add(1, 2, (value) => {
//     console.log(value);
// });

// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(() => {
        const food = 'Pizza';
        callback(food);
    }, 3000);
}

function coolDown(food, callback){
    setTimeout(() => {
        const cooledFood = `cooled ${food}`;
        callback(cooledFood);
    }, 2000);
}

function freezeFood(food, callback){
    setTimeout(() => {
        const frozenFood = `frozen ${food}`;
        callback(frozenFood);
    }, 1500);
}


orderFood((food) => {               // 콜백 지옥
    console.log(food);

    coolDown(food, (cooledFood) => {
        console.log(cooledFood);

        freezeFood(food, (frozenFood) => {
            console.log(frozenFood);
        });
    });
});

// Promise로 변환(다음 장에서 배울 예정)