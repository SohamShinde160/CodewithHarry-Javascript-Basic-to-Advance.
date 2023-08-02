//*  JAVASCRIPT COOKIES
//  -- cookies are small string of data stored directly in the browser
//  in javascript, document.cookies provide access to cookies

//  cookies are set by a webserver using the Set-cookie HTTP-header.
//  Next-time when the request is sent to same domain ,
//  the browser sends the cookies using the cookie HTTP-loader .
//  that's why server know who sent the request

//  we also access cookies using :- alert(document.cookie) property
//     ----- contains key:value pair

//  writing to a cookie
//  an assignment to document.cookie is treated specially in a way that a write operation doesn't touch other cookie
console.log(document.cookie)
document.cookie = "name = soham"
document.cookie = "name1 = soham1"
document.cookie = "name12 = soham12"


// ******************************************************************************************************************************************************************
// * encode URI component
//   this function helps to keep the valid formatting .eg below
//   encode URI component :- is used to print special character such as $%@1& etc in cookie
let a = prompt('enter the key')
let b = prompt('enter the value')
document.cookie = `${encodeURIComponent(a)} = ${encodeURIComponent(b)}`
console.log(document.cookie)
// to decode this functions we use decode function in console
//*  for eg :- decodeURIcomponent("mumbai!ndian%24%") -->mumbai!ndian$


//****************************************************************************************************************************************************************************
//* cookie components
//  cookie has several options which can be provided after key = value to set call
//  you can add only one cookie at a time. if you try to add multiple cookie in one string only the first cookie will be considered
//   ---- and rest all remaining cookie will be discarded
document.cookie = "1=2 ; 3=4 ; 4=5 ; 5=6"
//  here only 1=2 is added in cookie & rest are treated as options
//  the size of one cookie should not exceed 4KB
//  Minimum you have to set upto 20 cookies & browser dependency
