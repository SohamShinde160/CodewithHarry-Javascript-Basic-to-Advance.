// arrays :- collection of items
//  arrays are variable which hold more one than value
//  use square bracket to insert values
//   arrays are mutable ...can be changed
//   type of array is object
//   strings  are immutable .... cannot be changed
let marks = [1, 2, 4, 44, null , false , "hi"] // syntax 
console.log(marks) 
// you can insert multiple types of datypes in one array

// how to access the array 
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[7])  // not present in array at 7th index so, undefined

// check the length of array 
console.log("the length of array :", marks.length)

// change the values inside the array 
marks[7] = 99
console.log(marks)

// changing the value of existing values inside the array 
marks[0] = 0
console.log(marks)

// print the array using for loop
let lang = ["c", "c++", "python", "javascript", "java", "html", "css"]
for (i = 0; i < lang.length; i++){
    console.log(lang[i])
}
