import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useState } from "react"

export default function UpdateTodoModal({ todo, onSave }) {
  const [title, setTitle] = useState(todo.title)

  return (
    <Dialog open>
      <DialogContent>
        <input className="border p-2 w-full" value={title} onChange={e=>setTitle(e.target.value)} />
        <button onClick={()=>onSave({...todo,title})}>Save</button>
      </DialogContent>
    </Dialog>
  )
}
