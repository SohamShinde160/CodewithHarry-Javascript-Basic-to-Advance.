// promise chaining
//  we can create promises and make them pass the resolved values to one another.

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("resolved after 2 sec");
        resolve(45);
    }, 3000);
})
p1.then((value) => {
    // console.log(value);
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise 2');
        }, 3000);
    })
    return p2;
}).then((value) => {
    // console.log("done");
    return 2;
}).then((value) => {
    // console.log("done finally")
})
// flow of execution :-
//    1. the initial promise resolved in 3 sec
//    2. the next .then() handler is then called which returns a new promises (resolved in 3 sec)
//    3. the next .then() gets the result of previous one and keeps on going



// ==================================================================================================================================================================================================================================================================
// rewrite the loadscript function we wrote in beginning of the chapter using promises 
function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
        script.onload = function () { resolve("script has been loaded ")};
        script.onerror = function () { reject(0) };
    });
};
let p11 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js");
p11.then((value)=> {
    console.log(value);
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js");
}).then((value) => {
    console.log("second script loaded ");
}).catch((error) => {
    console.log("we are sorry there is a error ");
})