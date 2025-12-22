
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Todos from './pages/Todos';
import ProtectedRoute from './components/ProtectedRoute';
import TodoDetails from './pages/TodoDetails';

function App() {
  

  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            

               <Route path='/todos' element={<ProtectedRoute>
                <Todos/>
                {/* Todos -- children */}
               </ProtectedRoute>} />
               <Route path='/todos/:todoId' element={<ProtectedRoute>
                <TodoDetails/>
                {/* Todos -- children */}
               </ProtectedRoute>} />
               
            
            
            
          </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
