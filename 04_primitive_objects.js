//  in javascript ther are 2 major parts of datatypes
//  1. primitive datatypes (fundamental datatypes)
//  2. Non - primitive datatypes (objects)
//  Primitive datatypes are of 7 types ---->nn bb ss u
//  ----- Null
//  ----- Number
//  ----- bigint
//  ----- boolean
//  ----- symbol
//  ----- string
//  ----- Undefined
//  object are key value pairs
//  which a key(variable) & value( datatype)
// primitive datatypes in js
let a = null;  //explicitly store null value 
let b = 445;
let c = 'soham'
let d = Symbol("ok")
let e = BigInt('68789')
let f = true;   // can be false also
let g = undefined  // tou can also write let g for undefined case
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
// how to check the datatype of variable
console.log(typeof (b))


// objects in js
//  how to create objects in javascript
// its a type of dictionary
    //  in python we call it --- dictionary 
    //  in javascript we call it --- object
// basically object is used to multiple key & value in single variable
const item = {
    'soham': null,     // "key": value
    'rohit': 45,
    'sharma': true,
    "india": "kholi",
}
console.log(item['india'])