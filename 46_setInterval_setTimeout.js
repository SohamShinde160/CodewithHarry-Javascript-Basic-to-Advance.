alert('heloo')

// setTimeout allows us to run a function after the given interval of time.
// if want alert after specific timeout (1s , 2s, 3s,).... i.e, after javascript execution
//  if want to avoid a task in javascript use --> set timeout
let a = setTimeout(function(){
    alert("i am set time out")
}, 2000) //2000ms = 2s

if ('n' == a) {
    clearTimeout(a)
}
clearTimeout(a)  // now after 2s no alert will appear becoz you cleared it
console.log(a)  // in browser(console) you will get the timerid which is 1

// example ---> settimeout
const sum = (a,b,c) => {
    console.log("yes i am red", (a + b + c))
}
setTimeout(sum, 2, 1, 2, 9)

// syntax :- let timerid = setTimeout (function , <delay> , <arg 1>, <arg2>, <arg3>)

// setInterval
//  --> is similar syntax to set timeout but .... set interval runs in repeated interval
// syntax :- let timerid = setInterval (function , <delay> , <arg 1>, <arg2>, <arg3>)

setInterval(function () {
    alert("set-Interval")
}, 3000)  // after every 3s of interval this alert will appear
clearInterval(a)  // now after 3s no alert will appear becoz you cleared it