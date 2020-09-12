import FetchData from "./utils.js"


window.addEventListener('load', () =>{
    let todos = [];
    const todos_container = document.querySelector('.todos')
    
    FetchData.getAll()
    .then(response => response.json())
    .then(
        data =>{ 
            if(data.message) {
               console.log(data.message)
               $(".msg").append(`${data.message}`);
            }else{
            todos = data.map(el => ( `<div class="card mb-3">
            <div class="card-header ">${el.title}</div>
            <div class="card-body ">
                <p class="card-text">${el.description}</p>
            </div>
            <div class="card-footer">
                <label type="button" class="btn btn-outline-info star" data-id="${el.id}"><i class="glyphicon glyphicon-star-empty" id="bookmarkme"></i></label>       
                <button type="button" class="btn btn-outline-primary update" data-id="${el.id}" >Update</button>
                <button type="button" class="btn btn-outline-primary delete" id="${el.id}">Delete</button>
                <label class="read-more-trigger btn btn-outline-info info" ><i class="glyphicon glyphicon-info-sign"></i></label>
                </div>
        </div>`
        )  )}
        todos_container.innerHTML = todos.join("");
    }).catch(error => console.error(error))
})


$('body').on('click','.update',function(){
var id = $(this).attr('data-id');
$('#update-to-do').attr('data-id', id) ;
FetchData.getTodo(id)
.then(response=>response.json())
.then(data=>{
    data.map( function(el){
        $('#title_update').val(el.title);
        $('#description_update').val(el.description);
            })});
    $("#update-modale").modal("show");

    });

$('#update-to-do').click(function(){
    const data = {
        title :  $('#title_update').val() ,
        description : $('#description_update').val()
    }
    var id =$(this).attr('data-id')
    FetchData.updateTodo(id,'update',data);
    location.reload();
})



$('body').on('click', '.update', function () {
    var  id = $(this).attr('data-id');   
    $('#update-to-do').attr('data-id',id);  
    FetchData.getTodo(id)
    .then(response => response.json())
    .then(data =>{
        data.map( function(el){
            $('#title_update').val(el.title);
            $('#description_update').val(el.description);
                })})    
    $('#update-modale').modal('show');
})

$('body').on('click', '#update-to-do', function () {    
    const data ={
        description :$('#description_update').val() ,
        title : $('#title_update').val()
    }
    var id= $(this).attr('data-id');
    FetchData.updateTodo(id , 'update' , data);
    location.reload();
});

/* create Todo */
$('#save-to-do').click(function(){    
const data ={
    description :$('#description').val() ,
    title : $('#title').val()
}
    console.log(description+' '+ title);
    FetchData.createTodo('create' , data);
    location.reload();
})


$('body').on('click', '.delete', function () { 
    var id = $(this).attr('id');
    FetchData.deleteTodo(id,`delete`);
    $(this).parent().parent().remove();
    location.reload();
});
