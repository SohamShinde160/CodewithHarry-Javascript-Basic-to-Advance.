//  Browser Event ---> it is a signal that something has happened
//     All DOM nodes generate such signals


//  DOM events

//  mouse events  --->  click ,contextmenu(right click) ,mouseover ,mouse out ,mouse up/ down ,mouse move
//  keyboard events ---> keydown & keyup
//  form Events   ---> submit , focus
//  document Event  ---> DOM Content Loader

// events can be handled in <html> attributes also
<div class="ok" onmouseenter="console.log('mouse ki entry');" onclick="alert('thanks'); console.log('click hua bhai');">click me</div>

// adding a handler over a javascript handler overwrites the existing handler
//  prefernce is given to the javascript event rather than HTML event attribute
let a = document.getElementsByClassName("Your_Class_Name")[0]
a.onclick = () => {
    let b = document.getElementsByClassName("Your_Class_Name")[0]
    b.innerHTML= " hello world"
}
