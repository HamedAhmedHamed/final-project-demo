import { lazy, Suspense } from "react"
import bg from "/images/hero/main-hero.webp"
import SuspensedRegisterForm from "../../components/forms/register/SuspensedRegisterForm"
const RegisterForm = lazy(() => import("../../components/forms/register/RegisterForm"))

const Register = () => {
  return (
    <main>
      <Suspense fallback={<SuspensedRegisterForm />}>
        <RegisterForm />
      </Suspense>

      <img
        src={bg}
        loading="eager"
        className="w-full"
        alt="background"
      />
    </main>
  )
}

export default Register