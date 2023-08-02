// Attribute Methods

//  elem.getAttribute(name)
//    --> method used to get value of an attribute
let a = first.getAttribute("class")   // (first) is the id of div 1
console.log(a)

// elem.hasAttribute("name")
// returns output in true or false
// check for existance of an attribute present or not  
console.log(first.hasAttribute("class"))   // true
console.log(first.hasAttribute("style"))   // false

// elem.setAttribute(name, value)
first.setAttribute("class", " soham true")

//  elem.removeAttribute(name)
//   --> simply removes the attribute from the element
first.removeAttribute("class")

// elem.Attributes
// --> method to get the collection of all attributes in an particular element
console.log(first.Attributes)

//  data-*(write any name you want) attribute
//  --> you can make your custom attributes but the ones starting from "data-" are reserved for programmers . they are available in  a property dataset
console.log(first.dataset)
//  ---> it will give you all custom attribute of that element
