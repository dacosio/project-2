const User = require("../models/User");
const Todo = require("../models/Todo");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find().lean();
    console.log(req.user, req.roles, req.id);
    if (!todos?.length) {
      return res.status(400).json({ message: "No todos found." });
    }
    // const todosWithUser = await Promise.all(
    //   todos.map(async (todo) => {
    //     const user = await User.findById(todo.user).lean().exec();
    //     return { ...todo, email: user.email };
    //   })
    // );

    // This is another way to get the todos with mongoose syntax
    const todoSample = await Todo.find({ user: req.id })
      .populate({ path: "user", select: "-password -roles -isActive" })
      .lean()
      .exec();

    res.status(200).json(todoSample);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTodo = async (req, res) => {
  try {
    console.log("test");
    // user is an objectId
    // or you can use the logged in user id thru req.locals.id
    // check verifyJWT from middleware as it is embedded in the token
    let { user, title, text } = req.body;
    user = req.id;
    console.log(req.user, req.roles, req.id);

    // Confirm data
    if (!user || !title || !text) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check for duplicate title
    const duplicate = await Todo.findOne({ title }).lean().exec();

    if (duplicate) {
      return res.status(409).json({ message: "Duplicate todo title" });
    }

    // Create and store the new user
    const note = await Todo.create({ user, title, text });

    if (note) {
      // Created
      return res.status(201).json({ message: "New note created", data: note });
    } else {
      return res.status(400).json({ message: "Invalid note data received" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id, user, title, text, completed } = req.body;

    // Confirm data
    if (!id || !user || !title || !text || typeof completed !== "boolean") {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Confirm note exists to update
    const todo = await Todo.findById(id).exec();

    if (!todo) {
      return res.status(400).json({ message: "Todo not found" });
    }

    // Check for duplicate title
    const duplicate = await Todo.findOne({ title }).lean().exec();

    // Allow renaming of the original todo
    if (duplicate && duplicate?._id.toString() !== id) {
      return res.status(409).json({ message: "Duplicate todo title" });
    }

    todo.user = user;
    todo.title = title;
    todo.text = text;
    todo.completed = completed;

    const updatedNote = await todo.save();

    res.json(`'${updatedNote.title}' updated`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.body;

    // Confirm data
    if (!id) {
      return res.status(400).json({ message: "Note ID required" });
    }

    // Confirm todo exists to delete
    const todo = await Todo.findById(id).exec();

    if (!todo) {
      return res.status(400).json({ message: "Note not found" });
    }

    const result = await todo.deleteOne();

    const response = `Todo '${result.title}' with ID ${result._id} deleted`;

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
