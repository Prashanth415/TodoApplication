const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const filePath = path.join(__dirname, "../database/todos.json");

// Read todos from JSON file
const readTodos = () => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Write todos to JSON file
const writeTodos = (todos) => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};

// ===============================
// GET ALL TODOS
// ===============================
const getTodos = (req, res) => {
  const todos = readTodos();
  res.status(200).json(todos);
};

// ===============================
// GET TODO BY ID
// ===============================
const getTodo = (req, res) => {
  const todos = readTodos();

  const todo = todos.find((t) => t.id === req.params.id);

  if (!todo) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  res.status(200).json(todo);
};

// ===============================
// CREATE TODO
// ===============================
const createTodo = (req, res) => {
  const todos = readTodos();

  const { title, description, priority } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  const newTodo = {
    id: uuidv4(),
    title,
    description,
    priority,
    completed: false,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };

  todos.push(newTodo);

  writeTodos(todos);

  res.status(201).json({
    message: "Todo Created Successfully",
    todo: newTodo,
  });
};

// ===============================
// UPDATE TODO
// ===============================
const updateTodo = (req, res) => {
  const todos = readTodos();

  const index = todos.findIndex((t) => t.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  todos[index] = {
    ...todos[index],
    ...req.body,
    updatedAt: new Date().toLocaleString(),
  };

  writeTodos(todos);

  res.status(200).json({
    message: "Todo Updated Successfully",
    todo: todos[index],
  });
};

// ===============================
// DELETE TODO
// ===============================
const deleteTodo = (req, res) => {
  const todos = readTodos();

  const index = todos.findIndex((t) => t.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  const deletedTodo = todos[index];

  todos.splice(index, 1);

  writeTodos(todos);

  res.status(200).json({
    message: "Todo Deleted Successfully",
    todo: deletedTodo,
  });
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};