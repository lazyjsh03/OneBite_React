function returnFalse() {
    console.log("False returned");
    return false;
}

function returnTrue() {
    console.log("True returned");
    return true;
}

// console.log(returnFalse() && returnTrue()); // false
// console.log(returnTrue() && returnFalse()); // false
// console.log(returnTrue() || returnFalse()); // True
// console.log(returnFalse() || returnTrue()); // True

function returnFalsy(){
    console.log("Falsy value returned");
    return undefined; // or null, 0, NaN, "", false
}

function returnTruthy(){
    console.log("Truthy value returned");
    return 1; // or any non-zero number, non-empty string, object, etc.
}

// console.log(returnFalsy() && returnTruthy()); // undefined (falsy)
// console.log(returnTruthy() && returnFalsy()); // undefined (falsy)
// console.log(returnTruthy() || returnFalsy()); // 1 (truthy)
// console.log(returnFalsy() || returnTruthy()); // 1 (truthy)

// usage of short-circuit evaluation

function printName(person){
    const name = person && person.name;
    console.log(name || "No name provided");
}

// printName({age: 30});
// printName();
// printName({name: "John"});