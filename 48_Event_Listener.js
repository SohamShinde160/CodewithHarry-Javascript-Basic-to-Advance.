// handling Event Listener //

// addEventListener  --> is used to assign multiple handlers to an event
// removeEventListener

let s = function () {
    alert("hello in one")
}
idname.addEventListener("click", s)

let p = function () {
    alert("Hello in two")
}
idname.addEventListener("click", p)

let a = prompt("enter one and two ")
if (a == 2) {
    idname.removeEventListener('click', s)
}
// when you are using removeEventListener --> always define it in reference variablr & then use that variable in function


// event object
// when an event happens , the browser creates an event object , puts object details into it and passes it as
// an arguement to the handler
let sa = function (event) {
    console.log(event)
    console.log(event.target)
    console.log(event.type)   // event type
    console.log(event.currentTarget)    // element that handle the current event
    console.log(event.clientX, event.clientY)    // GIVES INFORMATION ABOUT WHERE DID YOU CLICK YOUR CURSOR IN X & Y DIRECTION
    alert("hello in one")
}
