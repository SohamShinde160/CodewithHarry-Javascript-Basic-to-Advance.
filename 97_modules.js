// const hello = require("./module1")
// hello.hello()
// hello.ahello(" soham")
// hello.ahello(" bahubali")
// hello.ahello(" katappa")
// hello.ahello(" devsena")
//  we are repratedly writing hello.ahello ("") // its a very tds process

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const {hello, ahello} = require("./module1")       // these are called coomom js modules
// hello()
// ahello(" soham")
// ahello(" bahubali")
// ahello(" katappa")
// ahello(" devsena")


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// * now we are using ES6 modules

import soham,{hello, ahello} from "./module2.js"
hello()
ahello(" soham")
ahello(" bahubali")
ahello(" katappa")
ahello(" devsena")
soham()