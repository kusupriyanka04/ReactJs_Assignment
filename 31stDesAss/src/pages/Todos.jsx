import { useEffect, useState } from "react"
import { getTodos, createTodo, updateTodo, deleteTodo } from "../services/todo.service"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import UpdateTodoModal from "../components/UpdateTodoModal"
import Footer from "../components/Footer"

export default function Todos() {
  const [todos, setTodos] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    getTodos().then(setTodos)
  }, [])

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar todos={todos} setSelected={setSelected} />
        {selected && (
          <UpdateTodoModal
            todo={selected}
            onSave={(t)=>updateTodo(t.id,{title:t.title})}
            onDelete={(id)=>deleteTodo(id)}
          />
        )}
      </div>
      <Footer />
    </div>
  )
}
