import { createContext, useContext, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  const csrf = () => api.get("/sanctum/csrf-cookie")

  const getUser = async () => {
    const token = localStorage.getItem("access-token")

    const { data } = await api.get("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    setUser(data)
  }

  const login = async ({ ...credentials }) => {
    await csrf()
    setIsLoading(true)
    try {
      const { data } = await api.post("/login", credentials)
      localStorage.setItem("access-token", data.token)
      getUser()
      navigate("/profile")
    } catch (error) {
      if (error.response.status === 422)
        setErrors(error.response.data.errors)
    } finally {
      setIsLoading(false)
    }
  }

  const register = async ({ ...credentials }) => {
    await csrf()
    setIsLoading(true)
    try {
      await api.post("/register", credentials)
      getUser()
      navigate("/profile")
    } catch (error) {
      if (error.response.status === 422)
        setErrors(error.response.data.errors)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    const token = localStorage.getItem("access-token")
    await csrf()
    setIsLoading(true)
    try {
      await api.post("/logout", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      navigate("/login")
      setUser(null)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user, errors, isLoading, getUser, isAdmin, setIsAdmin, login, register, logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuthContext() {
  return useContext(AuthContext)
}