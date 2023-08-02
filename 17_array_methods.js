//  array methods
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// method 1 : - toString
//  converting an array elements into string
// let b = num.toString() // b is now string 


//  method 2 :- joins all array elements using separator
let c = num.join('-')  // you can use anything you want inside the ""
// console.log(c, typeof (c))

// method 3 :- pop() removes last element from array & updates original array
// let r = num.pop()
// console.log(r, num)

// method 4 :- push() adds new element inside the array at the end
//  modifies the original array & returns new array length
// let r = num.push(44)
// console.log(r, num)

//  method 5 :- shift() removes first element and returns it & modifies original array
// let r = num.shift()
// console.log(r, num)

// method 6:- unshift() adds one element in the first index (STARTING) & returns new array length
let r = num.unshift(89)
console.log(r, num)

