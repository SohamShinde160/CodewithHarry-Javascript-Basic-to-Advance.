//******************************** ARROW FUNCTIONS *************************************************
//  arrow functions are used when a function is single-liner --> you can skip the curly brackets {}
const hello = () => console.log("hello");
hello();

//   IF MORE THAN ONE VARIABLE IS PASSED ...YOYU CANNOT REMOVE THE ARGUEMENT BRACKET
//    ---- you have to use the brackets if two or more arguement
//    if only one arguement you can skip the brackets
const hello1 = (name, greeting) => console.log(greeting + " " + name)
hello1();


// ***************************************************************************************************************************
const sayHello = name => {
  console.log("greeting" + " " + name)
  console.log("hi")
}

const x = {
  name: "Harry",
  role: "Js Developer",
  exp: 30,
  show: function() {
    // let that = this
    // console.log(this)
    setTimeout(() => {
      console.log(`The name is ${this.name}\nThe role is ${this.role}`)
    }, 2000)
  }
}
sayHello("Harry", "Good Afternoon")
// console.log(x.name, x.exp)
// x.show()