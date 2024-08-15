import { createContext, useContext, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser]           = useState(null)
  // const [isAdmin, setIsAdmin]     = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors]       = useState({})
  const navigate                  = useNavigate()

  const csrf = () => api.get("/sanctum/csrf-cookie")
  
  // const validateRole = ({ data }) => {
  //   switch (data?.role) {
  //     case "admin":
  //       setIsAdmin(() => true) 
  //       break;
  //     case "user":
  //       setIsAdmin(() => false)
  //       break;
  //     default:
  //       break;
  //   }
  // }
  
  const getUser = async () => {
    const token = localStorage.getItem("access-token")

    try {
      const { data } = await api.get("/api/user", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      // validateRole(data) 
      setUser(() => data)
    } catch (error) {
      console.log(error) 
    }
  }


  const login = async ({ ...credentials }) => {
    setIsLoading(true)
    await csrf()
    try {
      const { data } = await api.post("/login", credentials)
      localStorage.setItem("access-token", data.token)
      // validateRole(data) 
      setErrors({})
      await getUser()
      if (data.role === "user")
        navigate("/profile")
      else
        navigate("/admin-panel")
    } catch (error) {
      if (error.response.status === 422)
        setErrors(error.response.data.errors)
    } finally {
      setIsLoading(false)
    }
  }

  const register = async ({ ...credentials }) => {
    setIsLoading(true)
    await csrf()
    try {
      const { data } = await api.post("/register", credentials)
      localStorage.setItem("access-token", data.token)
      // validateRole(data)
      setErrors({})
      await getUser()
      if (data.role === "user")
        navigate("/profile")
      else
        navigate("/admin-panel")
    } catch (error) {
      if (error.response.status === 422)
        setErrors(error.response.data.errors)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)
    const token = localStorage.getItem("access-token")
    await csrf()
    try {
      await api.post("/logout", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUser(null)
      // setIsAdmin(false)
      navigate("/login")
    } catch (error) {
      // DEBUG
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user, errors, isLoading, getUser, login, register, logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuthContext() {
  return useContext(AuthContext)
}