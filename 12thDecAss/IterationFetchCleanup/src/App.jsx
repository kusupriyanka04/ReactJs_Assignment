
import './App.css'
import { useState } from 'react';
import TodosList from './TodosList';

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <>
       <button onClick={() => setShowTodos(false)}>
        Unmount Todos
       </button>

       {showTodos && <TodosList/>}
    </>
  );
}

export default App;
