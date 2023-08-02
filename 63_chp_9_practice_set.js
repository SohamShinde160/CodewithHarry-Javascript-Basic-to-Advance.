//  que 1. write a program to load a javascript file in a browser using promises.
//          use .then() to display and alert when the script is loaded
const Scriptload = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(src)
        }
        document.head.appendChild(script)
    })
}
let a = Scriptload("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js")
a.then((value) => {
    console.log(value)
})

// ***********************************************************************************************************************************************************************
//  que 2. write the same program from previous question and use ASYNC_AWAIT
const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(src)
        }
        document.head.appendChild(script)
    })
}
const men = async () => {
console.log(new Date().getMilliseconds())
let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js")
console.log(a)
console.log(new Date().getMilliseconds())
}
men();


// ****************************************************************************************************************************************************************************
//  que 3. create a promise which rejects after 3 seconds. use async/await to get its value.
//         use a try & catch to handle this error
 let p = () => {
         return new Promise((resolve, reject) => {
                 setTimeout(() => {
                         reject(new Error("Please this is not acceptable"))
                 }, 3000)
         })
 }
 let aa = async () => {
         try {
                 let c = await p()
                 console.log(c)
         }
         catch (err) {
                 console.log("This error has been handled")
         }
 }
aa()
 

// ***********************************************************************************************************************************************************
//  que 4. write a program using Promise.all() inside an async/await to await 3 promises.
//         compare its result with the case where we await this promise one by one.
let p1 = async () => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve(10)
                }, 2000)
        })
}
let p2 = async () => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve(20)
                }, 1000)
        })
}
let p3 = async () => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve(30)
                }, 3000)
        })
}
const run = async () => {
        console.time("run")
        // let a1 = await p1() // Fetch first 10 products from the database
        // let a2 = await p2() // Fetch another 10 products from the database
        // let a3 = await p3() // Fetch yet another 10 products from the database


        let a1 = p1() // Fetch first 10 products from the database
        let a2 = p2() // Fetch another 10 products from the database
        let a3 = p3() // Fetch yet another 10 products from the database
        let a1a2a3 = await Promise.all([a1, a2, a3])
        console.log(a1a2a3)
        // console.log(a1, a2, a3)
        console.timeEnd("run")
}
run()

