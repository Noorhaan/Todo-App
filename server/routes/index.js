const {Router} = require("express");
const middleware = require("../api/");
const router = Router();


router.get('/api/todos', middleware.viewAll)
router.get('/api/todos/:id', middleware.viewTodo)
router.post('/api/todos/create', middleware.createTodo)
router.put('/api/todos/update/:id', middleware.updateTodo)
router.put('/api/todos/updatefav/:id', middleware.updatefav)
router.delete('/api/todos/delete/:id', middleware.deleteTodo)
router.use(middleware.notFound);
router.use(middleware.errorHandler)
module.exports = router;



