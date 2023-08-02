//************************* Destructuring assignment and Spread Operator **************************************************************************
// Destructuring assignment is used to unpack values from an array , or properties from objects, into distinct variables

let arr = [4, 5, 7, 8, 99,19]
let [b, c, d, e, f] = arr              // if you want to assign b=4 & c=5
console.log(b, c, d, e, f, rest)       // remaining values will be printed as rest in the form of an array

let { p, q } = { p: 1, q: 5 }    // MOSTLY USED 
console.log(p, q)  

// ************************* Spread syntax ***********************************************************************************************
//  spread syntax allows an iterable such as an array or string to be expanded in places where zero or more arguements are expected
//  in an object literal , the spread syntax innumerates the properties of an object and adds the key-value pairs to the object being created
//   basically it is used to convert an array to object (in key:value) pairs

let arr1 = [45, 7, 10]
let obj1 = { ...arr1 }  // {0:45 , 1:7 , 2:10}
console.log(obj1)
function sum(v1, v2, v3) {
    return v1 +v2 + v3 
}
console.log(sum(...arr1))

let obj2 = {           // mostly used in react & next 
    name: "soham",
    year: "3rd",
    branch: "computer engg",
    location:"nerul",
}
console.log({ ...obj2, name: "rohit " });
