// que1.write a progarm to print a marks of student in an object using loops
let obj = {
    soham: " 45",
    rohit: "67",
    friend: "56",
    goy:"77",
}

// for in loop
for (let i in obj) {
    console.log("marks of " + i + " is " + obj[i])
}

// for loop
for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log("marks of " + Object.keys(obj)[i] + " are " + obj[Object.keys(obj)[i]])
}

// que 2. write a program to print"try again" until the user prints a correct number
let cn = 77;
let i;
while (i!= cn) {
    console.log("try again");
    i = prompt(" enter a correct number");
}
console.log(" you have entered a correct number");

// que3. write a program to find mean of 5 numbers
const mean = (a , b , c ,d) => {
    return (a+b+c+d)/4
}
console.log(mean(4 , 5 , 6 , 7 ))