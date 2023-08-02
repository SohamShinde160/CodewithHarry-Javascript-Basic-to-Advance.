// alert :- mini window used to invoke with a msg
alert("helo");

// prompt :- used to take user input from the string in a variable
input = prompt("enter you age" , "ok");   // here (ok) is the by default value displayed as an arguement
document.write(input) // it used to write the entered value on your web page

// confirm :- shows a msg & waits for the user to press ok or cancel
// return true for ok ..... & ..... false for cancel
let write = ("hi i am confirm ");
if (write) {
    document.write(write)
}
else {
    document.write("please get lost")
}

// avoid to use in front end
// becoz there are limitations... they are blocked in some browsers
// also they block the javascript execution when , until they finished taking input
// user cannot interact on screen until , this alert screen is present
//  you cannot modifiy these
//  also in some browsers--- size and location is changed
//  ************** used in admin panels *****************




