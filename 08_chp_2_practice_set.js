// practice set on conditional expression & operators

// que 1. use logical operator to find whether the age of a person lies between 10 & 20 
let age = prompt(" enter your age :");
age = Number.parseInt(age)
if (age > 10 && age <= 20) {
    alert(" your age is between 10 & 20");
}
else {
    alert (" your age dosen't lies between 10 & 20 ")
}

// que 2. demonstrate the use of switch case statement in javascript
let year = prompt("enter your current age:")
switch (year) {
    case "12":
        console.log(" u r 12 now ");
        break
    case "13":
        console.log(" u r 13 now ");
        break
    case "14":
        console.log(" u r 14 now ");
        break
    case "15":
        console.log(" u r 15 now ");
        break
    default:
        console.log("get lost");
}

//  que 3. write a javascript program to find number is divisible by 2 and 3
let number = prompt(" enter your number");
number = Number.parseInt(number)
if (number % 2 == 0 && number % 3 == 0) {
    alert(' number divisible by 2 and 3');
}
else {
    alert(" not divisible");
}


//  que 4. write a javascript program to find number is either divisible by 2 or 3
let num = prompt(" enter your number");
num = Number.parseInt(num)
if (num % 2 == 0) {
    alert(' number is by 2');
}
   else if (num % 3 == 0) {
        alert(" number id divisible by 3")
    }
else {
    alert(" not divisible");
}

// que 5. print " you can drive "or" you cannot drive" based on the age being greater than 18 using ternary operator
let drive = prompt("enter your age");
console.log(drive>=18?"you can drive" : " you cannot drive")