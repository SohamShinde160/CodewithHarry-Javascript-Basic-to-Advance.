//* class inheritance
// --> class inheritance is a way for one class to extened other class. this is done using extend keyword

//* the extend keyword ---> is used to extend other class

// class Child extends Parent
//  --. we can create a class Monkey that inherits Animal
//*  class Monkey extends animal{
//*          hide(){
//*              alert(`${this.name}hide!`)
//*              }
//*          }


class Animal  {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    run() {
        console.log(this.name + " is running")
    }
    shout() {
        console.log(this.name + " is shouting")
    }
}
class Monkey extends Animal{
    eatBanana() {
        console.log(this.name + "is eating banana")
    }
}
let a = new Animal("sahil", "white")
let b = new Monkey("soham", "black")
a.run()
b.eatBanana()