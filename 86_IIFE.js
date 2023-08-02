// ************************************* Advance Javascript Concept ************************************************

//* IIFE :- Immediately Invoked Function Expressions
//  IIFE is a javascript function that runs as soon as defined
//  it is used to avoid polluting global namespace  , exceeds an async - await function.

let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456)
        }, 4000);
    })
}
(async () => {                //IIFE fUNCTION IN JS 
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})()
