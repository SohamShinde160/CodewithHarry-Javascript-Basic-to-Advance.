// for loop in array

//  classical for loop
let num = [121, 23, 114, 5, 16]
// for (i = 0; i < num.length; i++){
//     console.log(num[i])
// }

// for each loop in array 
num.forEach((element)=> {
    console.log(element*element)
})
// num.forEach((element)=>{console.log(element*element)})


// array.from :- is used to create an array from any other object
// array.from is used to create an array from the given string or given HTML collection
// eg:-
let pan = "soham"
let arr = Array.from(pan) 
console.log(arr)

// for of loop  : - shortcut to use the classical for loop 
// mostly prefer this (for of loop) 
for (let i of num) {  //***********************************most imp for of loop *******************************/
    console.log(i)
}

// for in loop
// rarely used
for (let i in num) {
    console.log(i)               // by default returns key of value i.e, 0 1 2 3 4 etc
//  console.log(num[i])          now it will return the array items
}

