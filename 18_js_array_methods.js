// some more array methods

//  delete ---> dlt is not an method ....it is an operator
let num = [1, 2, 3, 4, 54, 78, 6, 7]
// delete num[0]
// console.log(num)
// console.log(num.length) // ***************delete does not effect the length of array *************


// concate ---> here joins two array & returns a new array 
let con = [22, 44, 66, 77, 88]
let convey =[296,444, 5553, 765 , 233 ,23] // you can join more than three array together
// let newArray = num.concat(con,convey)
// console.log(newArray)

//  sort --> sort() method is used to sort array elements aiphabetically
//  if you want sorting in ascending order use compare function to sort in ascending
let compare = (a, b) => {
    return b-a    //a-b (descending_order)
}
convey.sort(compare) //         modifies the original array
// console.log(convey)
// ************it sorts the array according to string not number ....so look carefully output**********


// reverse :- reverse the original array




// ********************************************************************************************************************
// ***************************************** splice & slice ***********************************************************
// ********************************************************************************************************************

//  splice :- is used to add new items to the array
// splice 4 arguements :-
        // 1.position to add
        // 2.no. of elements to remove
        // 3. 4.elemenrts to be added
let conveyy =[296,444, 5553, 765 , 233 ,23] 
// conveyy.splice(2, 3, 1000, 1001, 10002)
let deletedValues = conveyy.splice(2, 3, 1000, 1001, 10002)
console.log(deletedValues)
console.log(typeof (deletedValues))
console.log(typeof (conveyy))   



//  slice  :- slice out a piece from the array . it creates the new array 
