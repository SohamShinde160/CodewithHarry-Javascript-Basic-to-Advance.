// ***************************** local storage ****************************************
// local storage is a web storage object which are not sent to server with each request
//  the data survives (your data will go nowhere if stored in local storage) a full page refresh and even a full browser restart

//  there are methods provided by local storage

  // 1. setItem(key,value)  ---> store key value pair (also you can update a value or key by entering same key or value)
  // 2. getItem(key)  ----> get the value by key
  // 3. removeItem(key) ---> remove the key with its value
  // 4. clear()   --->  delete everything
  // 5. key(index)  ---> get the key on given position 
  // 6. length  ---> the number of stored items 
  
let key = prompt("enter the key")
let value = prompt("enter thr value")
localStorage.setItem(key, value)
console.log(`the value at ${key} is ${localStorage.getItem(key)}`)
localStorage.removeItem("soham")
// localStorage.clear()
// localStorage.key(0) --> index


// key and value both should be string.