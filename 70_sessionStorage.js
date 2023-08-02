// ***************************** session storage *****************************************
// session storage is used less than localStorage
//  properties & method are same as localStorage
//  sessionStorage is storage for particular to that browser only .
//  if open new browser page then ---> new session storage
 
//  session storage
//   ---> data survives on page refresh but
//   ---> if you open in new tab ...then session is lost


// *********************** STORAGE EVENT *************************************************
// WHEN THE DATA GETS UPDATED IN LOCALSTORAGE OR SESSIONSTORAGE,
//  storage event triggers with the property
//   1. the key      ----> key
//   2. oldValue     ----> previous value
//   3. newValue     ----> new value
//   4. url          ----> page url
//   5. storageArea  ----> local or session storage

// we can listen the onstorage event of window which is triggered when updates are made to some storage from document
localStorage.setItem("soham", "shinde")
// now if you try to updated the key value from local storage ...it will gwt updated by onstorage function
localStorage.setItem("soham" , "shinde1" ) 
window.onstorage = () => {
    alert("value edited")
    console.log(e)
}

