import { type PropsWithChildren } from "react"
import type { User } from "../context/AuthContext"
import useAuthContext from "../context/AuthContext"
import { Navigate } from "react-router-dom"

type ProtectedRouteProps = PropsWithChildren<{ readonly allowedModels: User["role"][] }>

const ProtectedRoute = ({ allowedModels, children }: ProtectedRouteProps): JSX.Element => {
  const { user, isLoading } = useAuthContext()

  // if (user === null || !allowedModels.includes(user.role))
  //   doesn't work as expected
  //   return (user.role === "user")
  //     ? <Navigate to="/profile" />
  //     : user.role === "admin"
  //       ? <Navigate to="/admin-panel" />
  //       : <Navigate to="/login" />
  if (!isLoading && !allowedModels.includes(user.role)) {
    switch(user.role) {
      case "guest":
        return <Navigate to="/home" />
      case "admin":
        return <Navigate to="/admin-panel" />
      case "user":
        return <Navigate to="/profile" />
    }
  }
  // if (!allowedModels.includes(user.role) && !isLoading && user.role === "guest")
  //   return <Navigate to="/home" />
  // if (!allowedModels.includes(user.role) && !isLoading && user.role === "user")
  //   return <Navigate to="/profile" />
  // if (!allowedModels.includes(user.role) && !isLoading && user.role === "admin")
  //   return <Navigate to="/admin-panel" />

  return children as JSX.Element
}

export default ProtectedRoute