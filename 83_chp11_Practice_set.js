// que 1. create a javascript class to create a complex number . create a constructor to set real & complex part
class complex{
    constructor(real , imaginary){
        this.real = real 
        this.imaginary = imaginary
    }
    // que 2. write a method to add two complex number in thew above class
    add(num) {
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary    
    }    
    //  que 5. use getter & setter to set and get the real and imaginary parts of the complex numbers
    get real() {
        return this._real
    }
    get imaginary() {
        return this._imaginary
    }
    set imaginary(newimaginary) {
        this._imaginary= newimaginary
    }
    set real(newreal) {
        this._real = newreal
    }
}
let a = new complex(2, 4)
console.log(a.real , a.imaginary)
a.real = 9
a.imaginary = 4 
let b = new complex(4,5)
a.add(b)
console.log(`${a.real}+${b.imaginary}i`)


// *******************************************************************************************************************************************
// que 3. create a class student from a class human . override a method and see it
class human {
    constructor(name, favfood) {
        this.name = name
        this.favfood = favfood
    }
    walk() {
        console.log(this.name + " human is walking")
    }
}
class student extends human{
    walk() {
        console.log(this.name + " student is walking")
    }
}
let o = new student("soham", "vada pav")
o.walk()


// *****************************************************************************************************************
//  que 4. see if a student is an instance of human using instance of keyword
console.log(o instanceof human);

