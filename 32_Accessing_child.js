//  children of an element--->
//   direct as well as deeply nested elements of an element are called children

// child nodes ---->
//  elements that are direct-children
//     for eg :- <head> & <body> are children of <html>
//                <head> & <body> are sibling to each other

//  descendent node ---->
//    all nested elements, children , their children and so on

// firstchild  , lastchild , childnode
// how to access all these childenode in console?

// firstchild
console.log(document.body.firstChild)  //(text)
//  while accessing first child , if their is space after body tag ... then output is textnode
// bydefault space is text node
//  so remove that space you will get firstchild
 
// lastchild
console.log(document.body.lastChild) //script tag

// child nodes
console.log(document.body.childNodes) // all child nodes

// there is also a method 
Elem.hasChildNodes() //to check whether there is any child node
//  retuens true or false

//  to convert child node(childnode are node list) into a array
let arr = Array.from(document.body.childNodes) 
console.log(arr)
