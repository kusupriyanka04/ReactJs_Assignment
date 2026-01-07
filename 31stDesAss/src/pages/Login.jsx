import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate, Link } from "react-router-dom"

export default function Login() {
  const { login } = useAuth()
  const nav = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = async e => {
    e.preventDefault()
    await login(email, password)
    nav("/todos")
  }

  return (
    <form onSubmit={submit} className="h-screen flex items-center justify-center">
      <div className="w-80 space-y-4">
        <input className="border p-2 w-full" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} />
        <button className="bg-black text-white w-full p-2">Login</button>
        <Link to="/signup" className="text-sm underline">Signup</Link>
      </div>
    </form>
  )
}
