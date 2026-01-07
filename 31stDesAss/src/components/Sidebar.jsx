
export default function Sidebar({ todos, selectedTodo, setSelectedTodo }) {
  return (
    <aside className="w-64 border-r bg-gray-50 p-4 overflow-y-auto">
      <h2 className="font-semibold mb-4">Todo List</h2>

      {todos.map((todo) => (
        <div
          key={todo.id}
          onClick={() => setSelectedTodo(todo)}
          className={`p-2 mb-2 rounded cursor-pointer ${
            selectedTodo?.id === todo.id
              ? "bg-blue-100"
              : "hover:bg-gray-200"
          }`}
        >
          <p
            className={`text-sm ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.title}
          </p>
        </div>
      ))}
    </aside>
  );
}
