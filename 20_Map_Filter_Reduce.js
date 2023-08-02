//  Map - filter - reduce :- Higher Order Javascript Methods
// reduces time for witing code

// for each loop is used when we have perform some operations


// array map method
// map() is used when we have to create a new array
let num = [23, 24, 25, 21]
let n = num.map((value , index, array)=> {
    console.log(value, index, array)
    return value +1
})
// console.log(n)
// also can use index , array in function to display the array

// ARRAY FILTER METHODS :- USE TO SELECT SPECIFIC ITEM INSIDE THE ARRAY 
let arr2 = [45, 21, 44, 9, 48]
let a2 = arr2.filter((value) => {
    return value<10
})
console.log(a2)// ORIGINAL ARRAY WILL NOT CHANGE


// ARRAY REDUCE METHOD= REDUCE AN ARRAY 
let arr3 = [85, 281, 4, 90, 22]
let newarr3 = arr3.reduce((h1, h2) => {
    return h1+h2 
})
console.log(newarr3)// rums the funtions on bases of 2st & 2ndelement in array and so on


//  map     ---> returns an array
//  filters ---> returns array
//  reduce  ---> returns values from array


