//*  static methods
//  static methods are used to implement functions that belong to a class as a whole and not ot any particular object

class Animal {
  constructor(name) {
    this.name = Animal.capitalize(name)
  }
  walk() {
    alert("Animal " + this.name + " is walking")
  }
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length)
  }
}

j = new Animal("jack")
j.walk()
// console.log(j.capitalize("thisa")) // --- > this doesnt work