// syntax :- while(condition){code}
// if the condition never becomes false, the loop will never end & this might crash the runtime

// syntax :- while loop
//        (initialization condition)
//        while (loop conditon)
//        (increment/decrement condition)

let hi = prompt("enter the number :")
hi = Number.parseInt(hi)
let i = 0;
while (i < hi) {             // first checks the condition
    console.log(i)          // and then runs the code
    i++;
}

// do while loop
// do while loop is an variant of while loop
// in do while loop .... loop atleast executes onces
// syntax :- do while loop
//         (initialization condition)
//         do {
//             iterative condition
//         }while(loop condition)

let h = prompt("enter the number :")
h = Number.parseInt(h)
let n = 0;
do{
    console.log(n)     // first executes/runs the code
    i++;
}while (i < h)        //  then checks the condition