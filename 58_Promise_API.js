//  ************************************ Promise API ******************************
//  promise api is a class which has 6 static methods

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value1");
    }, 1000);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("value2");
        reject(new Error("Error 404"))
    }, 2000);
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value3");
    }, 3000);
});

// p1.then((value) => {
//     console.log(value);
// })
// p2.then((value) => {
//     console.log(value);
// })
// p3.then((value) => {
//     console.log(value);
// })
//  ***************************************************************************************************************************************************
//  1. Promise.all(promises) --> waits for all promises to resolve and returns the array of their resuits
//                               if anyone fails it becomes the error and all results are ignored
let promiseAll = Promise.all([p1, p2, p3])
promiseAll.then((value) => {
     console.log(value)
});
//  ***************************************************************************************************************************************************
//  2. Promise.allSettled(promises) --> waits for all promises to settle and return their results as an array of objects with status & values
//                                       if anyone fails , still it will print the result
let promiseallSettled = Promise.allSettled([p1, p2, p3])
promiseallSettled.then((value) => {
    console.log(value)
});
// *************************************************************************************************************************************************************
//  3. Promise.race(promises) --> waits for first promise to settle and its result/error becomes the outcome
//                                 the one with the less time executes first
let promiseRace = Promise.race([p1, p2,p3])
promiseRace.then((value) => {
    console.log(value)
});
// ****************************************************************************************************************************************************
//  4. Promise.any(promises) --> waits for first promise to fulfill (& not reject) , and its result becomes the outcome
//                               throws aggregrate error if if all promises are rejected
let promiseAny= Promise.any([p1, p2,p3])
promiseAny.then((value) => {
    console.log(value)
});
// *************************************************************************************************************************************************
//  5. Promise.resolve(promises) --> makes a resolved promise with the given number.
let promiserResolve= Promise.resolve(6)

// ****************************************************************************************************************************************************
//  6. Promise.Reject(promises) --> makes a rejected promise with the given number
let promiserReject = Promise.reject(new Error("hi"));

