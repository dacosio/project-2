const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todosController");
const verifyJWT = require("../middleware/verifyJWT");

// this is a middleware for secure routes
router.use(verifyJWT);

router
  .route("/todos")
  .get(todosController.getAllTodos)
  .post(todosController.createTodo)
  .put(todosController.updateTodo)
  .delete(todosController.deleteTodo);

module.exports = router;
