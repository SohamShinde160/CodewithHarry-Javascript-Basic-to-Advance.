//  que 1. write a javascript program to prompt to take value from user to enter the age
//          and alert whether is can drive or not
let age = prompt(" enter your age:")
age = Number.parseInt(age)
if (age >= 18) {
    alert('you can drive !');
}
else {
    alert("you cannot drive");
}
// or
let ahe = prompt(" enter your age:")
ahe = Number.parseInt(ahe)
const canDriveo = (ahe) => {
    return ahe > 18 ? true : false;
}
if (canDriveo(ahe)) {
    alert('you can drive !');
}
else {
    alert("you cannot drive");
}

// ----------------------------------------------------------------------------------------------------------------------
//  que.2) in que 1 use confirm to ask the user if he wants to see the prompt again
let runAgain = true;
const canDrive = (age1) => {
    return age1 > 18 ? true : false;
}
while (runAgain) {
    let age1 = prompt(" enter your age:");
    age1 = Number.parseInt(age1)
if (age1 >= 18) {
    alert('you can drive !');
}
else {
    alert("you cannot drive");
    }
    runAgain = confirm(" do you want to enter again");
}

// ---------------------------------------------------------------------------------------------------------
//  que.3) in the previous que use console.error if age is negative
let runAgainp = true;
const canDrivepp = (age1p) => {
    return age1p > 18 ? true : false;
}
while (runAgainp) {
    let age1p = prompt(" enter your age:");
    age1p = Number.parseInt(age1p)
    if (age1p < 0) {
        console.error("pls enter positive age")
        break;
}
if (age1p >= 18) {
    alert('you can drive !');
}
else {
    alert("you cannot drive");
    }
    runAgainp = confirm(" do you want to enter again");
}   

// --------------------------------------------------------------------------------------------------------------
//  que.4) write a program to change the url to google.com if user enters a number greater than 4
let number = prompt("enter number:")
number = Number.parseInt(number)

if (number > 4) {
    location.href="https://google.com"
}

// -------------------------------------------------------------------------------------------------
// que.5) change the background to red , yellow, green, based on the user input using prompt
let color = prompt("enter the color:")
document.body.style.background = color
