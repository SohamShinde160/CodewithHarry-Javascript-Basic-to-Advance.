// condition expression
//   if , if ..... else ,if .... else if .....else  -------> statemnet
//  prompt in editor uses node.js

// prompt & alert function
// prompt will ask you a question and you have to give it a input
// alert will inform you about the event

let a = prompt("hello soham")    //  prompt will not work in vscode    . here type of a id string

a = Number.parseInt(a)            // convert a string into a number this function is used
console.log(typeof (a))           // here type of a is number becoz converted it into number from string

// from to check ur valid age
let r = prompt('hey enter yout age :')
r = Number.parseInt(r)
if (r > 0) {
    alert('valid age');
}
else {
    alert("invalid age");
}

//  in ----> if statement we have only one condition to exexcute
//  in ----> if ...else statement we have two condition to execute
//  in ----> if ...else if statement we have more than two statement to execute

let p = prompt('hey enter your age :')
p = Number.parseInt(p)
if (p < 0) {
    alert('Invalid age');
}
else if( p< 9) {
    alert("you are a dumb kid ... dont think of driving");
}
else if (p > 9 && p <= 18) {
    alert("you can now think of driving");
}
else {
    alert("you can drive now")
}

//   ternary operator
// evaluates acondition and executes a block of code based on condition
// syntax----> condition? exp1(ifTrue) : exp2(ifFalse)
console.log(" you can ", age < 18 ? "not drive" : " drive")
