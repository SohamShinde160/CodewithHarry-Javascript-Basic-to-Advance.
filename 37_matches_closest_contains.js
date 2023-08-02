// Matches / closest / contains
//  there are three very important method to search a dom

// 1. elem.matches(css) -> to check if the element matches the given css selector
let id1 = document.getElementById("id1")
console.log(id1.matches(".clay")) // false -> there is no class="clay" in id="id1"
console.log(id1.matches(".box"))  // true  -> becoz there exist a class="box" for id="id1"

// 2. elem.closest(css) -> to look for the nearest ancestor that matches the given css Selector

// 3. elem.contains(css) -> returns true if elemB id inside elemA or elemA == elemB
