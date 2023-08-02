// ! this is not a WEB hoisting

//* HOISTING IN JAVASCRIPT
//  hoisting refers to the process whereby the interpreter appears to move the declaration to the top of the code before the execution
//  variables thus can be referred before they are declared in javascript


// eg:-
greet()    // here you are calling the function first
function greet() {                  // then declaring it 
    console.log("good morning");
}
//  functon declaration are at the top / variable declaration are also at the top


// ! important note :- javascript only hoists declaration & not the initialization. the variable wiil be undefined until the line where its initialized is reached 
// ! function expression are not hoisted