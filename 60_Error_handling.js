//************************** error handling in js using .try() & .catch() ***********************************

// sometimes a script can have error . usually a program haults when an error occurs.
//  the try & catch synatx is used to handle a error . so script instead of dying can do something more reasonable

setTimeout(() => {
    console.log("hacking wifi ....")
}, 1000);
try {
    console.log(sahil)
} catch (error) {
    console.log(error)
    // console.log("sahil has been hacked")
}
setTimeout(() => {
    console.log("retriveing userid and password ....")
}, 2000);

setTimeout(() => {
    console.log("extracting personal data ....")
}, 3000);

setTimeout(() => {
    console.log("user has been hacked ....")
}, 4000);

//  it works like this
//  1.  first the code in try is executed
//  2.  if there is no error , catch is ignored
//      ------ else catch is executed

//  try catch works synchronously
//  IF YOU WROTE ASYNCHRONOUS CODE IN TRY CATCH -----    it will through error
//  there only one soln for this ...write try catch inside the asynchronous code. (shown below)
try {
    setTimeout(() => {
        try {
            console.log(sahil)
        } catch (error) {
            
        }
    }, 1000);
} catch (error) {
    console.log("hello")
}