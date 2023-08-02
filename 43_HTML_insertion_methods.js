//  insertion of node inside a DOM using JS
//  CREATE ELEMENT INSIDE THE DOM


//  classical way for insertion
/* <div class="container">
    <div id =" first"> this is first div</div>
   </div> */
let a = document.getElementsByTagName('div')[0]
a.innerHTML = a.innerHTML + '<h1>hello world</h1>';

let b = document.createElement('div');
b.innerHTML = '<h1>hello world</h1>';
b.appendChild(div);

//  some insertion methods
//  node.append()  --> append at the end of node
//  node.prepend() --> insert at the begineening
//  node.before()  --> insert before node
//  node.after()   --> insert after node
//  node.relacewith()  ---> you can replace a node with other node
