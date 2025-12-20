import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import TodoItem from "./TodoItem";


function TodoList(){
    const {todos} = useContext(TodoContext);

    return(
        <>
        <h3>Todo List</h3>
        {todos.map((todo)=>(
           <TodoItem key={todo.id} todo={todo} />
        ))}
        </>
    );
}

export default TodoList;