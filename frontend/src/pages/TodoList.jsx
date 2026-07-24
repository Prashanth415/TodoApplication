import { useEffect, useState } from "react";
import API from "../services/api";
import TodoForm from "../components/TodoForm";
import TodoCard from "../components/TodoCard";
import "./TodoForm.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Newest");

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const response = await API.get("/todos");
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async (todo) => {
    await API.post("/todos", todo);
    getTodos();
  };

  const updateTodo = async (id, todo) => {
    await API.put(`/todos/${id}`, todo);
    setEditingTodo(null);
    getTodos();
  };

  const deleteTodo = async (id) => {
    await API.delete(`/todos/${id}`);
    getTodos();
  };

  const toggleComplete = async (todo) => {
    await API.put(`/todos/${todo.id}`, {
      ...todo,
      completed: !todo.completed,
    });

    getTodos();
  };

  let filteredTodos = [...todos];

  filteredTodos = filteredTodos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  if (filter === "Completed")
    filteredTodos = filteredTodos.filter((todo) => todo.completed);

  if (filter === "Pending")
    filteredTodos = filteredTodos.filter((todo) => !todo.completed);

  if (sort === "Newest") filteredTodos.reverse();

  return (
    <div className="app">

      <div className="container">

        <header className="header">
          <h1>📝 Todo Dashboard</h1>
          <p>Stay organized and productive</p>
        </header>

        <div className="form-section">
          <TodoForm
            addTodo={addTodo}
            updateTodo={updateTodo}
            editingTodo={editingTodo}
          />
        </div>

        <div className="toolbar">

          <input
            type="text"
            placeholder="🔍 Search todos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option>Newest</option>
            <option>Oldest</option>
          </select>

        </div>

        <div className="todo-grid">
          {filteredTodos.length === 0 ? (
            <div className="empty">
              <h2>📋 No Todos Found</h2>
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <TodoCard
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                editTodo={setEditingTodo}
                toggleComplete={toggleComplete}
              />
            ))
          )}
        </div>

      </div>

    </div>
  );
}

export default TodoList;