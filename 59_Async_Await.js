// there is a special syntax to work with promises in javascript
//  async awaits ---> is used to wait the execution & execute later as per our need.
//   a function can be made Async ---> by using the keyword Async .
// *                     syntax:-
// *                     Async function soham (){
// *                     return 7
// *                    }
//  an async function always reurns a promise .other values are wrapped inside in a  promise  automatically
// *                   soham().then(alert)
//  so async ensures that the function returns a promise.

async function soham() {
    let mumbaiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("37 deg");
        }, 3000);
    })
    let dubaiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("20 deg");
        }, 6000);
    })
    console.log("fetching mumbai wether please wait .....")
    let mumW = await mumbaiWeather
    console.log("fetched mumbai weather : " + mumW);
    console.log("fetching mumbai wether please wait .....")
    let dubW = await dubaiWeather
    console.log("fetched dubai weather : " + dubW);
    return[mumW,dubW]
}
const cherry = async ()=> {
    console.log(" i am cherry i am waiting");
}
const men = async() =>{
    console.log("welcome to control room");
    let a = await soham()
    let b = await cherry() 
}
men()

//  there ia another keyword called await that works only inside async function
// *   let value = await promise
//  the await keyword makes javascript wait until the promises is settled and returns its value
