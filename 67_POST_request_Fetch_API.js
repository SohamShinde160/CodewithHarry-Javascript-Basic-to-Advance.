//  POST request in fetch API's
//  to make a fetch request we need to use fetch options

//  JSON.stringify :- converts a javscript object into json string
//  JSON.parse     :- converts a valid Json string to javascript object .

let options1 = {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({
        title: 'soham',
        body: 'bhai',
        userId:'1001'
    }),
}
// fetch('https://jsonplaceholder.typicode.com/users', options1).then((response) => response.json()).then((json) => console.log(json));


// * using promises in fetch API

const createTodo = async (todo) => {
        let options = {
                method: "POST",
                headers: {
                        "Content-type": "application/json"
                },
                body: JSON.stringify(todo),
        }
        let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
        let response = await p.json()
        return response
}

const getTodo = async (id) => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        let r = await response.json()
        return r
}

const mainFunc = async () => {
        let todo = {
                title: 'Harry2',
                body: 'bhai2',
                userId: 1100,
        }
        let todor = await createTodo(todo)
        console.log(todor)
        console.log(await getTodo(101))
}

mainFunc()      