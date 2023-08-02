// Protypes and __proto__

// javascript objects have a special property called prototype i.e, either null or reference another object
//  when we try to read a property from an object and its missing .javascript automatically takes it from prototype .
//   -- this is called prototype inheritance


// setting prototype
// --- we can set prototype by setting  __proto__
//  now if we read a property from the object which is not in object and is present in prototype , javascript will take it from prototype

//  if we have a method in object , it will be called from the object . if its missing in object & present in prototype , its called from prototype


let a = {
    name: "soham",
    language :"javascript"
}
console.log(a)

let p = {
    run :() => {
        alert("i am running")
    }
}

p.__proto__ = {
    name1: "rohit"
}
a.__proto__ = p
a.run()
console.log(a.name)