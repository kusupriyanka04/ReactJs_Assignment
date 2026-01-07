
import { Button } from "@/components/ui/button";

export default function TodoCard({
  todo,
  onToggle,
  onDelete,
  onEdit,
}) {
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <h3
        className={`text-lg font-medium ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.title}
      </h3>

      <p className="text-sm mt-1">
        Status:{" "}
        <span className={todo.completed ? "text-green-600" : "text-red-600"}>
          {todo.completed ? "Completed" : "Pending"}
        </span>
      </p>

      <div className="flex gap-2 mt-4">
        <Button onClick={() => onToggle(todo)}>
          Toggle
        </Button>
        <Button variant="outline" onClick={() => onEdit(todo)}>
          Edit
        </Button>
        <Button variant="destructive" onClick={() => onDelete(todo.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}
