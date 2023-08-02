//  string :- collection of character
//  string is used to store and manipulate text .
//  string can be created using " "  &  ' '  &  ` `
let nme = "soham"        // double quote
console.log(nme.length)  // length is the number of letters

let yy = 'rohit'
console.log(yy[0])
console.log(yy[1])
console.log(yy[3])
console.log(yy)


// template literals
//  backtick `` is used to represent a string
//  with template literals it is possible to use both single and double quotes in a string
//  we can insert variables directly in template literal ---> string interpolation
let boy1 = "rohit";
let boy2 = "kholi";
let friend = `${boy1}  is friend of  ${boy2}`
console.log(friend)

// Escape sequence charcter ----. special character
//     suppose in a output you want to print (single quote ') or (double quote "")
//        you use (backslas \)to print the quote
//  \n goes to new line
//  \t new tab
let fruits = "straw\"berry"
console.log(fruits)

let fruit = "straw\'berry"
console.log(fruit)

let fruitx = "straw\nberry"
console.log(fruitx)

let fruitu = "straw\tberry"
console.log(fruitu)