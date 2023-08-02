// the soln to the callback hell is promises.
//  a promises is -----> promise od code of execution.
//  your promise will be fulfilled . i.e, either your code is executed or fails to execute
//    in both cases user will be notified. (either resolve or reject).

// syntax :----> let promise = new Promise((resolve, reject) => { });
//  resolve and reject are two callback provided by javscript itself.
//   how to call resolve & reject
// resolve(value) :- if job is finished successfully
// reject(error)  :- if the job fails

let promise = new Promise((resolve, reject) => {
    alert('hello');
    resolve(45);
});
console.log("one");
setTimeout(function () {
    console.log("two");
}, 3000);
console.log("three");
console.log(promise);

//  by default promise has two properties:-
//    PromiseState :- initially pending, then changes to either "fulfilled "  or "rejected"
//    PromiseResult:- initially undefined , then changes to value "resolved(value)" or "rejected(error)"

//  promises are used for parallele execution.