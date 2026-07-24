import { useState, useEffect } from "react";

function TodoForm({ addTodo, updateTodo, editingTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description);
      setPriority(editingTodo.priority);
    } else {
      setTitle("");
      setDescription("");
      setPriority("Medium");
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    const todo = {
      title,
      description,
      priority,
    };

    if (editingTodo) {
      updateTodo(editingTodo.id, todo);
    } else {
      addTodo(todo);
    }

    setTitle("");
    setDescription("");
    setPriority("Medium");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Todo Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        rows="4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button className="btn">
        {editingTodo ? "Update Todo" : "Add Todo"}
      </button>

    </form>
  );
}

export default TodoForm;