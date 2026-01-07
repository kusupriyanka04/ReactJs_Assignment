import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/firebase/firebaseConfig"
import * as authService from "../services/auth.service"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => {
      setUser(u)
      setLoading(false)
    })
    return unsub
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        login: authService.login,
        signup: authService.signup,
        logout: authService.logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  )
}
