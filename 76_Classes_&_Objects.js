// Classes and Objects
//  in oops , a class ia an extensible program-code template for creating objects
//   --- providing initial value for the state(member variable) and implementation of behaviour(member function)

// class --> template    (blank railway reservation form made available for all to fill)
// object -->  entity made from class  (person filled railway reservation form with perosonal information)

//*     Syntax for class :-
//*   class MyClass{
//*      class methods
//*      constructor()
//*       method 1()
//*       method 2()
//*      }

class railwayReservation{
    submit() {
        alert(this.name + " : Your form submitted for train no. : " + this.trainno)
    }
    cancel() {
        alert(this.name + " : Your form cancelled for train no. : " + this.trainno)
    }
    fill(givename, trainno) {
        this.name = givename
        this.trainno = trainno
    }
}
// we can then use new Myclass() to create a new object with all the listed methods
let soham = new railwayReservation()  // suppose two person want to travel
soham.fill("soham", 121204)
let binod = new railwayReservation()
binod.fill("binod", 0o32343)
soham.submit()
binod.submit()
binod.cancel()


