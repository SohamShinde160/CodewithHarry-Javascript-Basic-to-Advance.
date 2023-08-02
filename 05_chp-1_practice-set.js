// que 1 -> create a variable of type string & try to add a number to it
let a = "soham"
let b = 7
console.log(a + b) // here concatenation of string occurs


// que 2 -> use typeof operator to find the datatype of string in last que
console.log(typeof (a + b))


// que 3 -> create a const object in javascript can you change it to hold a number later ?
const c = {
    name: "soham",
    section: 1,
    isPrinciple: true, 
}
//c = 56     no you cannot change it to hold number later
 

// que 4 -> Try to add a new key to the Const object in problem 3. were you able to do it ?
c['friend'] = "king"
c['name'] = "rohit"
console.log(c)
// you can add a new kwy inside a const object
// you cannot change object ... but you can do changes inside the object such insert key , dlt key , update key value etc
// you cannot add a new object inside a object


// que 5 -> write a js program to write a word-meaning dictionary of 5 words 
const dict = {
    yakka: "work, especially hard work",
    appreciate: " recognize the full worth of it.",
    ataraxia: " a state of freedom or emotional state"
}
console.log(dict["yakka"])