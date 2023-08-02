// DOM Collection Properties
//     ---- Read Only (you cannot directly write on them)
//     ---- They are live. (elem.childNodes) variable will automatically update if childnodes of element are changed
//     ---- they are iterable using for .....of loop

//  $0 is used to refer to that element in console.
// (you cam that element -> go to console -> and type $0 -> it will redirect to the selected element)

//  parent & sibling
//  <head> & <body> are siblling to each other
//  <html> is the parent of <head> & <body>
//  <head> is called the "previous sibling" or "left sibling" of the <body>
//  <body> is called the "next sibling" or "right sibling" of the <head>

//  the next sibling is in nextSibling property 
console.log(document.body.nextSibling)
//  and the previous sibling is in previousSibling Property  (elem.previousSibling)
console.log(document.body.previousSibling)


// parent node
console.log(document.documentElement.parentNode)      // return---> Document
console.log(document.documentElement.parentElement)  // return ---> null





















