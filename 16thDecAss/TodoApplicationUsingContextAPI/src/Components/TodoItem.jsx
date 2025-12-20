import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

function TodoItem({todo}) {
  const { deleteTodo, toggleTodo } = useContext(TodoContext);

  return (
    <>
      <div style={{ marginBottom: "8px" }}>
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            marginRight: "10px",
          }}
        >
          {todo.title}
        </span>
        <button onClick={() => toggleTodo(todo.id)}>
          {todo.completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>❌</button>
      </div>
    </>
  );
}

export default TodoItem;
