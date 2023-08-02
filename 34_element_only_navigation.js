let b = document.body

console.log("first child of b is :", b.firstChild)
// firstchild will give you child immediately next to body tag(whether it is comment,text, or any html tag) . 
// so here it will give you text
// becoz after body tag here it is direct space, so it will give you text

console.log("first element child of b is :", b.firstElementChild)
//  but by using firstElmentChild ... it will directly give you the next element after the body element
//  rather than give text(becoz of blank space)

// element only navigation
// sometimes we dont want text or comment node . some links only take element node into account
//    for eg:- 
document.previousElementSibling
document.nextElementSibling
document.firstElementChild
document.lastElementChild

//---------------------------------------------=========-------------=-----------------------------------------
const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red "
}
// ======================----------------------------=============================-------------=-=-=-=-=-=-=-=-=-=
// in javascript to access (childElement ----> use children)
