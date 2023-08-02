//  que 1.  write a javascript program to print the following after 2 seconds delay
//       hello
//       world
const a = (text) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(text)
            }, 2000);
        })
}
(
async() =>{
    let b = await a("hello")
    console.log(b)
    b = await a("world")
    console.log(b)
}   
)()
//  que 2. write a javscript program to find the average of numbers in an array using spread syntax
function sum(a, b, c) {
    return a + b + c
}
let x = [1, 2, 3]
console.log(sum(...x));


//  que 3. write  a javscript function which resolves a promises after n seconds . the function takes n as the parameter .
//    use an IIFE to execute the functions with different values of n
const a1 = (text, n =2) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(text)
            }, 2000*n);
        })
}
(
async() =>{
    let b = await a1("resolving after 4 sec",4)
    console.log(b)
    b = await a1("resolving after 8 sec",8)
    console.log(b)
}   
)()


//  que 4. write a simple interest calculator using javscript
function simpleinterest(p, r, t) {
    return (p * r * t) / 100;
}
console.log(simpleinterest(1000, 5, 1))