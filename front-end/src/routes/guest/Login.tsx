import { lazy, Suspense } from "react"
import bg from "/images/sections/map.webp"
import SuspensedLoginForm from "../../components/forms/login/SuspensedLoginForm"
const LoginForm = lazy(() => import("../../components/forms/login/LoginForm"))

const Login = () => {
  return (
    <main>
      <Suspense fallback={<SuspensedLoginForm />}>
        <LoginForm />
      </Suspense>

      <img
        src={bg}
        loading="eager"
        className="w-full"
        alt="map background"
      />
    </main>
  )
}

export default Login