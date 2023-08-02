//  a javascript program is a block of code designed to perform a particular task
// instead o writing the logic repeatedly to print the logic , we can directly define a fn
// once fn is defined define the logic inside it .
// now u can run code any amount of time , just by calling the function
// to call a function .... give name to that function
// functionn are used to separate a logic
// syntax:- function functionName( parameter1 , parameter2){code}

function soham(x, y) {
    console.log("done")
    return Math.round(1 + (x + y) / 2)    // to do roundoff logic in javascript (Math.round)
}
let a = 44;
let b = 57;
let c = 40;
console.log("sum of avg plus one of a & b :", soham(a, b))
console.log("sum of avg plus one of b & c :", soham(b, c))
console.log("sum of avg plus one of a & c :", soham(a, c))

// new format javascript function
let hello = ()=> {
    console.log(" hello ! how are you?");
    return "hi";
}
let ok = hello();
console.log(ok)


let bread1 = prompt("enter bread you want:");
let sauce1 = prompt("enter sauce you want:");
let veggies1 = prompt("enter veggies you want:");

function makesandwich( bread , sauce , veggies) {
    let sandwich = console.log('your sandwich has ' + bread + " bread "+ sauce + " sauce and " + veggies + " as veggies ");
    return sandwich;
}

let vegsandwich = makesandwich(bread1, sauce1, veggies1)
console.log(vegsandwich);