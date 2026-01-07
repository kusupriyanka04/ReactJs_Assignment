import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./routes/ProtectedRoute"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Todos from "./pages/Todos"

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todos" element={
            <ProtectedRoute>
              <Todos />
            </ProtectedRoute>
          } />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
