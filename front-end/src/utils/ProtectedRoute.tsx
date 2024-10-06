import { type PropsWithChildren } from "react"
import type { User } from "../types/auth.interface"
import useAuthContext from "../contexts/AuthContext"
import { Navigate } from "react-router-dom"

type ProtectedRouteProps = PropsWithChildren<{ readonly allowedModels: User["role"][] }>

const ProtectedRoute = ({ allowedModels, children }: ProtectedRouteProps): JSX.Element => {
  const { user, isLoading } = useAuthContext()

  if (!isLoading && !allowedModels.includes(user.role)) {
    return <Navigate to="/home" />
  }
  return children as JSX.Element
}

export default ProtectedRoute