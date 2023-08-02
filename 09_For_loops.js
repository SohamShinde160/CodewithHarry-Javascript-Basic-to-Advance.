// loops - we use loops to perform repeated actions

// types of loops
//    1.  for loop      :- loop a block of code number of times
//    2.  for in loop   :- loop through the keys of an object
//    3.  for of loop   :- loop through the value of an object
//    4.  while loop    :- loops based on specific condition
//    5.  do-while loop :- while loop varient which runs atleast once

//    for loop
//  syntax :- for( statement 1 ; statement 2 ; statement 3){code}
//  statement 1 :- executed only once
//  statement 2 :- condition based on which loop runs
//  statement 3 :- executed everytime the loop body is executed
//  eg:- below
for (i = 0; i < 10; i++){
    console.log("hello world")
}

//  program to find sum of n natural numbers
let sum = 0;
let a = prompt("enter your number")
a = Number.parseInt(a)
for (i = 0; i < a; i++){
    sum +=  (i+1)
}
console.log("sum of first " + a + "natural no. is: " + sum)

// for in loop
let obj = {
    soham: "99*",
    rohit: "77",
    kholi: "67",
    dhoni: "2",
    surya: "100",
}
for (let a in obj) {
    console.log("highest score of " + a + " in t20 is " + obj[a])
}

//  for of loop
//  for of loop used in array and object should be compulsary iterable or string
 