// Network Request & Fetch API
//  javascript can be used to send & retrive information from the network when needed (AJAX)

//  Fetch API
//  --- Fetch API is used to get data over the network
//  API are by default promises..... so no need to return a new promises

//*   syntax:--- let promise = fetch(url,{options})
//*    option is object.
//  there are many request such as :- get , post , put , delete etc
//  by default request in fecth is put request
//   post request is like update(insert) some new data in API
//   get request is used to get data from API
let p1 = fetch("https://jsonplaceholder.typicode.com/users")
p1.then((response) => {
        console.log(response.status)
        console.log(response.ok)
        console.log(response.headers)
        return response.json()
}).then((value2) => {
        console.log(value2)
})

//  GETTING A RESPONSE IS A TWO STAGE PROCESS
//   1. An object of response class containing "status" & "OK" properties
//      ---- STATUS :- the https status code .(eg :-200)
//      ---- OK :- boolean true if https status code is between (200 - 299)

//   2. After that we need to call another method to access the body in different format
//      ---- Response.text():- Read & return the text
//      ---- Response.json():- parse the response as json



// response headers :-
//  response header are availabe in response.header
//   -- you print response header

// request headers:-
//  to set a request header in fetch , we can use the header option
//    -- you set request header
//* syntax :- let res = fetch (url, { header: {authentication:'secret'}});
let p = fetch("https://jsonplaceholder.typicode.com/users")
p.then((response) => {
        return response.json()
}).then((response) => {
        console.log(response)
})