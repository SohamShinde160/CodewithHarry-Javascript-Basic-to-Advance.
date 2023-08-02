//* getter and setter
//  class may include getter and setter to get and set the computed properties

// ! first the name property is changed to _name to avoid name collision with getter & setter
//!  then getter use get keyword as shown below

class Animal {
  constructor(name) {
    this._name = name
  }
  fly() {
    console.log("Mai ud rha hu")
  }
  get name() {
    return this._name
  }

  set name(newName) {
    this._name = newName
  }

}

class Rabbit extends Animal {
  eatCarrot() {
    console.log("Eating carrot")
  }
}

let a = new Rabbit("Bruno")
a.fly()
console.log(a.name)
a.name = "Jack"
console.log(a.name)
let c = 56


// * INSTANCE OF AN OPERATOR
//  the instance of operator allows us to check whether an object belongs to a certain class or not
// ! it returns true if object belongs to the class or any other class inheriting from it
console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log(c instanceof Animal)