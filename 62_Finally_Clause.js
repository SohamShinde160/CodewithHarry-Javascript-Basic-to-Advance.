// the try ... catch contruct may have one more code clause :---> finally
// if it exist it runs in all cases
//  after try if there were no errors
//  after catch if there were errors

//  it there is a return in try , finally is executed.
//   just before the control returns to the outer code

try {
    let a = 0
    console.log(program)
    console.log("program run sucessfully");
    return
} catch (error) {
    console.log("this is error")
}
finally {
    console.log("i am a finally")
    // where to used :- 
    //   --close the file
    //   --exit the loop
    //   --write to the log file
}

//  if there exist a separate error in catch , then (finally) is used


//  if there is (return) something in a try..... then also finally will work
