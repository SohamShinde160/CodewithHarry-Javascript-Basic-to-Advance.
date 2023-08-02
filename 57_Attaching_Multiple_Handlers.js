// attaching_mutiple_handlers_to_promises :-
// we can attach multiple handlers to one promises. they dont pass the result to eqch other , instead they proceed it immediately

//  p1.(handler1)  ----|
//  p2.(handler2)      |----> runs independently
//  p3.(handler3)  ----| 

// promise chaining & multiple handler are different 

function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('register end');
        resolve();
    }, 1000);
    }) 
}
function email() {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
        console.log("email send");
        resolve();
    }, 2000);
    })
}
function login() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("login end");
        resolve();
    }, 3000);    
    })
}
function userData() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("User data send");
        resolve();
    }, 1000);    
    })
}
function displayData() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("data displayed");
        resolve();
    }, 5000);
    })  
}
console.log("account created !!!");


// attaching_mutiple_handlers_to_promises
register()
    .then(email)
    .then(login)
    .then(userData)
    .then(displayData)

