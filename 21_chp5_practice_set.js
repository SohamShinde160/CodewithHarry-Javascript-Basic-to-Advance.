// que.1 create an array of numbers and take input from the users to add numbers to the array
let arr = [12, 34, 56, 78, 90]
let a = prompt("enter ur number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)

// que.2 keep adding numbers to the array in que.1 until 0 is added
let arr1 = [12, 34, 56, 78, 90]
let aa;
do {
    aa = prompt("enter ur number")
    aa = Number.parseInt(aa)
    arr1.push(aa)
} while (aa != 0);
console.log(arr1)

//  que.3 filter for a number divisible by 10 from a given array 
let arr2 = [120, 4, 60, 78, 990]
let neu = arr2.filter((value) => {
    return (value%10==0)
})
console.log(neu)

// que.4 create an array of square of given number
let arr3 = [120, 4, 60, 78, 990]
let nev = arr3.map((value) => {
    return (value*value)
})
console.log(nev)

// que.5 use reduce to calculate the factorial of a given number from an array of first n natural no.
//       (n being the number whose factorial needs to be calculated)
let arr4 = [1,2,3,4,5,6]
let nex = arr4.reduce((x1,x2) => {
    return (x1*x2)
})
console.log(nex)

