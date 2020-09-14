const BASE_URL = 'http://localhost:3000/api/todos'

const getAll = () =>{
    return fetch(BASE_URL)
}

const getTodo = (id) =>{
    return fetch(`${BASE_URL}/${id}`)
}

const createTodo = (endpoint, body ) =>{
    return fetch(`${BASE_URL}/${endpoint}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}

const updateTodo = (id, endpoint , body) => {
    return fetch (`${BASE_URL}/${endpoint}/${id}` , {
        method : "PUT" ,
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(body)
    })
}

const updatefav = (id, endpoint , body) => {
    return fetch (`${BASE_URL}/${endpoint}/${id}` , {
        method : "PUT" ,
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(body)
    })
}


const deleteTodo = (id, endpoint ) => {
    return fetch (`${BASE_URL}/${endpoint}/${id}` , {
        method : "DELETE"
    })
}

export default {
    getAll , getTodo , createTodo , updateTodo , deleteTodo ,updatefav
}