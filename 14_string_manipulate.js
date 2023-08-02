// string manipulation methods

let hh = "soHam"
console.log(hh.length)   // length is property
console.log(hh.toUpperCase())  // uppercase is also function
console.log(hh.toLowerCase())  // lowercase is also function
console.log(hh.slice(2, 4))  // slice ---> indexing  start from 0 .... 
//  here in above example start from 2 & end at 3 (4 not included) 
console.log(hh.slice(2)) //  here start from and end at last character of string
console.log(hh.replace("soHa", "ji"))  // used to replace string & string characters
 
let friend = "ojha"   // concationation of string ... joins to string
console.log(hh.concat(" friend of ", friend))

let friend1 = " kholi      "
console.log(friend1.trim())  // starting & ending removes space from string

// use for loop to print the string
let gg = "soham"
for (i = 0; i < gg.length; i++){
    console.log(gg[i])
}


//    ******** most important **********
//      strings are immutable
//       you cannot change string
//       you manipulate string any way ----> ur can wiil not change
//      it returns new string but original string remains the