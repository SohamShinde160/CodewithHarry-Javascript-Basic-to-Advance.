//*    the constructor method()
//  the constructor() method is called automatically by a new , so we can initialize the object there
//  constructor() is always called whenever you create a class into object 
//  it is always called when an object is created
class railwayReservation{
    constructor(givename, trainno) {
        console.log("constructor called !!!" + givename + " " + trainno)
        this.name = givename
        this.trainno = trainno
    }
    submit() {
        alert(this.name + " : Your form submitted for train no. : " + this.trainno)
    }
    cancel() {
        alert(this.name + " : Your form cancelled for train no. : " + this.trainno)
    }
}
let soham = new railwayReservation("soham", 121204)
// soham.fill()
let binod = new railwayReservation("binod", 0o32343 )
// binod.fill()
soham.submit()
binod.submit()
binod.cancel()



// ***********************************************************!********************************************************************************************

class RailwayForm {
  constructor(givenname, trainno, address) {
    console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
    this.name = givenname
    this.trainno = trainno
    this.address = address
  }

  preview() {
    alert(this.name + ": Your form is for Train number: " + this.trainno + " and your address is " + this.address)
  }

  submit() {
    alert(this.name + ": Your form is submitted for train number: " + this.trainno)
  }

  cancel() {
    alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    this.trainno = 0
  }
}

let sohamForm = new RailwayForm("soham", 13488, "420, Pacific Ocean, Ocean, Bihar - 0000555")
sohamForm.preview()
sohamForm.submit()
sohamForm.cancel()


