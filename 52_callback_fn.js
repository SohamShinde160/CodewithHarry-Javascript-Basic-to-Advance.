// Synchronous Programming & Asynchronous Programming

//  Synchronous actions are the actions that initiate and finish one-by-one
// let a = prompt("name?");
// let b = prompt("age?");
// let c = prompt("color?");
// console.log(a + " age is " + b + " yrs old & favourite color is " + c);

//  Asynchronous action are the actions that we initiate now and they finish later . eg:- setTimeout
// console.log("Mi");
// setTimeout(function () {
//     console.log("sry for delay")
// }, 5000);   // here delay by 5 seconds . first code will execute & they delay in code is executed 
// console.log("Csk");


// Callback Function :-
//  callback function is a function passed into another function as an arguement , which is then invoked
//  inside the outer function to complete one action
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    script.onload = function () {
        console.log("your src " + src)
        callback(src);
    };
}
function loaded(src) {
    alert("script loaded ----> " + src)
}
// scriptloader("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", loaded);


// another example:-
// register
// send welcome email
//  login
// get user data
// display user data .....

function register(callback) {
    setTimeout(() => {
        console.log('register end');
        callback();
    }, 1000);
}
function email(callback) {
    setTimeout(() => {
        console.log("email send");
        callback();
    }, 2000);
}
function login(callback) {
    setTimeout(() => {
        console.log("login end");
        callback();
    }, 3000);
}
function userData(callback) {
    setTimeout(() => {
        console.log("User data send");
        callback();
    }, 1000);
}
function displayData() {
    setTimeout(() => {
        console.log("data displayed");
    }, 5000);
}
console.log("account created !!!");
register(function () {
        email(function () {
            login(function () {
                userData(function () {
                    displayData();
                });
           });
      });
});



// ===========================================================================================================================
// handling error in javascript
// we can handle a error by supplying error argument
//  sometimes if the script not loaded then it will show error
//   it wrong script you try to load
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    script.onload = function () {
        console.log("your src " + src)
        callback(null , src);
    };
    script.onerror = Function =() => {
        console.log("error loading script " + src);
        callback(new Error ("SRC GOT ERROR"))
    }
}
function loaded(error, src) {
    if (error) {
        console.log(error);
        return
    }
    alert("script loaded ----> " + src)
}
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", loaded);




