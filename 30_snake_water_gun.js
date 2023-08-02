// create snake , water , gun game using javascript
//  the game should ask you to enter S,W or G . the computer should be randomly able to generate
//    S , W or G and declare win or lose using alert
//  use alert , prompt and confirm where ever required

let user = prompt("Enter S W or G")
let com = Math.floor(Math.random() * 3);
let arr = ["S", "G", "W"][com]

const match = () => {
    if (com === arr) {
        return "tie";
    }
    else if (com === "S" && user === "W") {
        return "com --> wins"
    }
    else if (com === "W" && user === "S") {
        return "user --> wins"
    }
    else if (com === "W" && user === "G") {
       return "com --> wins"
    }
    else if (com === "G" && user === "W") {
       return "user --> wins"
    }
    else if (com === "G" && user === "S") {
        return "com --> wins"
    }
    else if (com === "S" && user === "G") {
        return "user --> wins"
    }
}
let result = match(user, com)
console.log(`CPU:${cpu} <br/> USER:${user} <br/> The winner is: ${result.toUpperCase}`)


// avoid he use of document.write() --codewithharry video#39 ---> 7:30
// document.write is an html tag not used in javascript
//     so ... no \n tag will work in document.write
//       becoz \n is used in javascript (console.log())
//       and <br/> is used in html (document.write())

    