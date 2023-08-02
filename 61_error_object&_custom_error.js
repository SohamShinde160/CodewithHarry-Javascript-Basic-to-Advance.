//  error object for all the build in errors the error object has two main propertries
//    err.name   ---> REFERENCE ERROR / SYNTAX ERROR etc
//    err.message  ---> name is not defined / functoin is not defined.
//    err.stack  ---> gives error which has name & meassage both
try {
    console.log(soham)  
} catch (error) {
    // console.log(error.name)      //  ---> reference error
    // console.log(error.message)   //  ---> soham is not defined
    // console.log(error.stack)     //  ---> throws the error in combination of both name & msg
}

//  you can give your custom error 
try {
    let age = prompt("enter your age:")
    age = Number.parseInt(age)
    if (age > 130) {
         throw new ReferenceError("you entered a invalid age")  // custom error 
    }
    else {
        alert("thank you")
    }
} catch (error) {
    console.log(error.stack)
}
