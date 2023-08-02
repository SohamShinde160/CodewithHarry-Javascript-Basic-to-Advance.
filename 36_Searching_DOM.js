//  how to access an element by class name or id  --> getElementbyclassName

// searching the DOM
// DOM navigation propereties are helpful when the element are very close to each other
// DOM Searching --> if they are not close to each other , we have some more methods to search the DOM

// 1. document.getElementbyID
// ----> this is used to get the element with a given "id" attribute
let cardt = document.getElementById("soham")   // return only one element
cardt.style.color = "red"

// 2. document.querySelectorAll
// ----> returns all element inside an element matching the given CSS selector
let cardtu = document.querySelectorAll(".card-title")   // return all element 
cardtu[0].style.color = "red"
cardtu[1].style.color = "blue"
cardtu[2].style.color = "green"
console.log(cardtu)

// 3. document.querySelector
// ----> returns the first element given for the CSS selector
// ----> a efficient version of document.querySelectorAll(css)[0]
let fou = document.querySelector(".focus")    //return one element
fou.style.background = "red"

// 4. document.getElementsByTagName
//  ----> returns element by given tag name 
console.log(document.getElementsByTagName("a"))  // (a = anchor tag) returns all element
console.log(document.querySelector(".card").getElementsByTagName("a"))
  
// 5. document.getElementsByClassName
//  ---> returns element that have given CSS class

// 6. document.getElementsByName
//  --> search element with name attribute
