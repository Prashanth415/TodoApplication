import "./TodoCard.css";
import { Link } from "react-router-dom";

function TodoCard({ todo, deleteTodo, editTodo, toggleComplete }) {
  return (
    <div className={`todo-card ${todo.completed ? "completed" : "pending"}`}>

      <div className="todo-header">
        <h3>{todo.title}</h3>

        <span className={`status ${todo.completed ? "done" : "wait"}`}>
          {todo.completed ? "Completed" : "Pending"}
        </span>
      </div>

    

      <p>{todo.description}</p>

      <div className="todo-actions">
        <button
          className="complete-btn"
          onClick={() => toggleComplete(todo)}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>

        <button
          className="edit-btn"
          onClick={() => editTodo(todo)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>

        <Link to={`/todo?id=${todo.id}`} className="details-link">
    <button className="details-btn">
      View Details
    </button>
  </Link>
      </div>

    </div>
  );
}

export default TodoCard;

// import { Link } from "react-router-dom";
// import {
//   FaEdit,
//   FaTrash,
//   FaCheckCircle,
// } from "react-icons/fa";

// function TodoCard({
//   todo,
//   deleteTodo,
//   editTodo,
//   toggleComplete,
// }) {

//   return (
//     <div className="todo-card">

//       <h2 className={todo.completed ? "completed" : ""}>
//         {todo.title}
//       </h2>

//       <p>{todo.description}</p>

//       <p>
//         <strong>Priority :</strong> {todo.priority}
//       </p>

//       <p>
//         <strong>Status :</strong>{" "}
//         {todo.completed ? "Completed" : "Pending"}
//       </p>

//       <div className="card-buttons">

//         <button
//           className="complete-btn"
//           onClick={() => toggleComplete(todo)}
//         >
//           <FaCheckCircle />
//         </button>

//         <button
//           className="edit-btn"
//           onClick={() => editTodo(todo)}
//         >
//           <FaEdit />
//         </button>

//         <button
//           className="delete-btn"
//           onClick={() => deleteTodo(todo.id)}
//         >
//           <FaTrash />
//         </button>

//         <Link to={`/todo?id=${todo.id}`}>
//           <button className="details-btn">
//             View Details
//           </button>
//         </Link>

//       </div>

//     </div>
//   );
// }

// export default TodoCard;