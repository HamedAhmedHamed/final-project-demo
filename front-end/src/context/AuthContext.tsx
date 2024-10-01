import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import { type AuthContext, User, Roles, type ValidationError } from "../types/auth.interface";

const AuthContext = createContext<AuthContext | null>(null)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>({
    id: NaN,
    name: "",
    email: "",
    email_verified_at: "",
    created_at: "",
    updated_at: "",
    role: Roles.guest
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<ValidationError["response"]["data"]["errors"] | null>(null)
  const navigate = useNavigate()

  const csrf = async () => api.get("/sanctum/csrf-cookie")

  const getAccessToken = () => {
    return sessionStorage.getItem("access-token")!
  }

  const getUser = async () => {
    setIsLoading(true)
    await csrf()
    try {
      const { data } = await api.get("/api/user", {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      })
      // DEBUG
      console.log(data)
      setUser(data)
    } catch (error) {
      console.log(error) 
    } finally {
      setIsLoading(false)
    }  
  }

  const login = async ({ ...credentials }) => {
    setIsLoading(true)
    await csrf()
    try {
      const { data } = await api.post("/login", credentials)
      sessionStorage.setItem("access-token", data.token)
      setErrors(null)
      await getUser()
      navigate("/home")
    } catch (err: unknown) {
      const error = err as ValidationError
      if (error.status === 422)
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
      sessionStorage.setItem("access-token", data.token)
      setErrors(null)
      await getUser()
      navigate("/home")
    } catch (err: unknown) {
      const error = err as ValidationError
      if (error.status === 422)
        setErrors(error.response.data.errors)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)
    await csrf()
    try {
      await api.post("/logout", {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      })
      setUser(() => ({
        id: NaN,
        name: "",
        email: "",
        email_verified_at: "",
        created_at: "",
        updated_at: "",
        role: Roles.guest,
      }))
      sessionStorage.removeItem("access-token")
      navigate("/login")
    } catch (error) {
      // DEBUG
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const regainState = async () => {
      if (Number.isNaN(user.id))
        await getUser()
    }
    regainState()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        csrf,
        getAccessToken,
        user,
        errors,
        isLoading,
        getUser,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuthContext() {
  const ctx = useContext(AuthContext) as AuthContext
  if (ctx === null)
    throw new Error("useAuthContext must be used within an AuthProvider")
  return ctx
}