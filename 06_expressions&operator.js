//  a fragment of code that produces a value is called an expressoins
//  every value written literally is an expession for eg:- 7; or "harry"

// operator in javascript
                                         /* eg:- 7 + 2 = 9    
                                             here 7 and 2 are operands, 
                                             + is operator,    
                                             = is assignment operator, 
                                             9 is result */
//     1. Arithmetic operator                                                     2. Assignment operator
//       + additiion                                                                   =    x = y
//       - subtraction                                                                +=    x = x + y
//       * multiplication                                                             -=    x = x - y
//       * * exponentation                                                            *=    x = x * y
//       / division                                                                   /=    x = x / y
//       % modulo                                                                     %=    x = x % y
//       ++ increment                                                                **=    x = x * * y
//       -- decrement                             

//     3. comparison operator
//           --> used to compare a two variable & return a output in T or F
//       ==  equal to
//       !=  not equal to
//      ===  equal value and equal data type
//      !==  not equal value or not equal data type
//      >    greater than
//      <    less than
//      >=   greater than or equal to
//      <=   less than or equal to
//      ?    ternary operator

//    4. logical operator
//       && logical and
//       || logical or
//        ! logical not

// -------------------------------------------------------------------------------------------------------------------------------------------
// 1. Arithmetic operator
let a = 5;
let b = 2;
console.log("a+b=", a + b)
console.log("a-b=", a - b)
console.log("a*b=", a * b)
console.log("a/b=", a / b)
console.log("a**b=", a ** b)  // i.e, a^b
console.log("a%b=", a % b)  // show remainder
console.log("a++=", a++)    // here a value is 5 so first in output it will print 5 & then increment
// a++ is first print and then increment   (post increment)
// ++a is first increment and then print   (pre increment )
console.log("a--=", a--)      // post decrement
console.log("--a= ", --a)       // pre decrement

// ============================================================================================================================================
// 2.assignment operator
let y = 8;
y += 2    // y= y + 2
console.log(y)
y -= 2    // y= y - 2
console.log(y)
y *= 2    // y= y * 2
console.log(y)
y /= 2    // y= y / 2
console.log(y)

// =================================================================================================================================================
//  3. COMPARISON OPERATOR
let g = 4;
let h = 4;
let i = 7;
let v = "soham";
console.log(" g == h is :", g == h)
console.log(" g != h is :", g != h)
console.log(" g === v is :", g === v)   // also checks for the data type for comaprison of two items
console.log(" g !== v is :", g !== v)
console.log(" g > i is :", g > i)
console.log(" g < i is :", g < i)

// ==============================================================================================================================================
//    4. logical operator
let t = 45;
let p = 55;
console.log(t < p && t == 45)  // in case of and operator ... both the condition must be satisfied then output is true 
console.log(t > p || p == 55)    // in case of or operator ... if anyone of he condition is satisfied then output is true 
console.log(!false)