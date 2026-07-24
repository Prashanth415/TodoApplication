import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import API from "../services/api";
import "./TodoDetails.css"

function TodoDetails() {
  const [searchParams] = useSearchParams();
  const [todo, setTodo] = useState(null);

  const id = searchParams.get("id");

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    try {
      const response = await API.get(`/todos/${id}`);
      setTodo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!todo) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <h2>Loading Todo...</h2>
      </div>
    );
  }

  return (
    <div className="details-page">

      <div className="details-card">

        <div className="details-header">
          <h1>{todo.title}</h1>

          <span
            className={
              todo.completed
                ? "status completed-status"
                : "status pending-status"
            }
          >
            {todo.completed ? "Completed" : "Pending"}
          </span>
        </div>

        <div className="detail-row">
          <span className="label">Description</span>
          <p>{todo.description}</p>
        </div>

        <div className="detail-row">
          <span className="label">Priority</span>

          <span
            className={`priority ${todo.priority.toLowerCase()}`}
          >
            {todo.priority}
          </span>
        </div>

        <div className="detail-row">
          <span className="label">Created At</span>
          <p>{todo.createdAt}</p>
        </div>

        <div className="detail-row">
          <span className="label">Updated At</span>
          <p>{todo.updatedAt}</p>
        </div>

        <Link to="/">
          <button className="back-btn">
            ← Back To Home
          </button>
        </Link>

      </div>

    </div>
  );
}

export default TodoDetails;