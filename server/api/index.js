const todos = require("./todos");
const { reduce } = require("./todos");
const uuid = require("uuid").v4();


const viewAll = (req,res) =>{
    todos.length > 0?
    res.send(todos): res.send({message: "Sorry, there's no todos for now \u{1F60F}"})
}

const viewTodo = (req,res) =>{
    const todo = todos.filter((el) => el.id === parseInt(req.params.id))
    todo[0] === undefined?
    res.send({message: "Sorry, this todo doesn't existed!!! \u{1F927}"}):
    res.send(todo)
}

const createTodo = (req,res) =>{
    todos.push({
        id: Math.floor((Math.random() * 100) + 1),
        title:req.body.title ,
        description:req.body.description 
        });
res.send({message:"Todo Created successfully"})
}

const updateTodo = (req,res) =>{
    const todo = todos.filter((el) => el.id === parseInt(req.params.id))
    if(todo[0]){
    todo[0].title = req.body.title;
    todo[0].description = req.body.description;
    res.send({message: "todo update succesfully"})
    }
    else{
        res.status(404)
        res.send({message: "this todo doesn't existed!!! \u{1F641}"})
    }
}

const deleteTodo = (req,res) =>{ 
    const todo = todos.filter((el) => el.id === parseInt(req.params.id))
    if(todo[0]){
    let index = todos.indexOf(todo[0])
    console.log(index)
    if(index > -1 ){
        todos.splice(index, 1)
    }
   
   res.send({message: "todo deletd successfully"})}
   else{
    res.status(404)
    res.send({message: "this todo doesn't existed!!! \u{1F641}"})
   }
   }

   const notFound = (req, res, next) =>{
        const error = new Error(`Not Found -${req.originalUrl}`);
        res.status(404);
        next(error)
   }

   const errorHandler = (error, req, res, next) =>{
    const statusCode = res.statusCode === 200? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        messagae: error.message,
        stack: process.env.NODE_ENV === 'production'?
            'you are fool \u{1F608}': error.stack
    })
   }

   module.exports = {
       viewAll, viewTodo, createTodo , updateTodo ,deleteTodo,  notFound ,errorHandler
   }