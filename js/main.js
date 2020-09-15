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
            }else{var i ;
                for(i=0;i< data.length;i++)

           { todos +=`<div class="card mb-3 wow animate__animated animate__fadeInLeft animate__slow">
            <div class="card-header ">${data[i].title}</div>
            <div class="card-body ">
                <p class="card-text">${data[i].description}</p>
            </div>`;
            todos+= `<div class="card-footer">`
            if(data[i].fav == "true"){
                  todos +=   `<label type="button" class="btn btn-outline-info test star" fav="${data[i].fav}" data-id="${data[i].id}">
             <i class="glyphicon glyphicon-star-empty" id="bookmarkme"></i></label>`      
                              }
            else{ todos +=   `<label type="button" class="btn btn-outline-info star" fav="${data[i].fav}" data-id="${data[i].id}">
            <i class="glyphicon glyphicon-star-empty" id="bookmarkme"></i></label>`      
        }                  
          todos += `<button type="button" class="btn btn-outline-primary update" data-id="${data[i].id}" >Update</button>
                <button type="button" class="btn btn-outline-primary delete" id="${data[i].id}">Delete</button>
                <label class="read-more-trigger btn btn-outline-info info" ><i class="glyphicon glyphicon-info-sign"></i></label>
                </div>
        </div>` 
        
          }
        todos_container.innerHTML = todos;
    }   
    })
    
    .catch(error => console.error(error))
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


$('body').on('click','.star',function()
{ var id = $(this).attr('data-id')
  const fav =$(this).attr('fav');

  if(fav == "false"){
    $('.star').attr('fav',"true");
    $(this).addClass('test');
    const tru = {
        fav : "true"
    }
    FetchData.updatefav(id,`updatefav`,tru);
   
  } else{
    $('.star').attr('fav',"false");
    $(this).removeClass('test');
    const fls = {
        fav : "false" 
    }
    FetchData.updatefav(id,`updatefav`,fls);
  }
})

