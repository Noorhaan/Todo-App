import FetchData from "./utils.js"

window.addEventListener('load', () =>{
    let todos = [];
    const todos_container = document.querySelector('.todos')
    FetchData.getAll()
    .then(response => response.json())
    .then(data =>{
        todos = data.map(el => (
            `<div class="card mb-3">
            <div class="card-header ">${el.title}</div>
            <div class="card-body ">
                <p class="card-text">${el.description}</p>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-outline-info"><i class="glyphicon glyphicon-star-empty" id="bookmarkme"></i></button>       
                <button type="button" class="btn btn-outline-primary">Update</button>
                <button type="button" class="btn btn-outline-primary">Delete</button>
                <button type="button" class="btn btn-outline-info"><i class="glyphicon glyphicon-info-sign"></i></button>
                </div>
        </div>`
        )
        )
        todos_container.innerHTML = todos.join("");
    }
    )
    .catch(error => console.error(error))
})


