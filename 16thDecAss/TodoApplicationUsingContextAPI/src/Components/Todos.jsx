import { useState } from "react";
import { TodoContext } from "../Context/TodoContext";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";



function Todos(){
    const [todos, setTodos] = useState([]);

    // Add a new todo
    const addTodo = (title) => {
        setTodos([...todos, {id: Date.now(), title, completed: false }

        ]);
    };

    // Toggle completed status
    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo)=>
              todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo)=> todo.id !== id));
    };

    return(
        <TodoContext.Provider value={{todos, addTodo, toggleTodo, deleteTodo}}>
            <h2>Todo App</h2>
            <AddTodo/>
            <TodoList/>
        </TodoContext.Provider>
    )
}

export default Todos;