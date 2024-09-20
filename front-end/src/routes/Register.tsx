import RegisterForm from "../components/sections/RegisterForm.tsx"
import bg from "/hero/main-hero.webp"

const Register = () => {
  return (
    <main>
      <RegisterForm />
      <img
        src={bg}
        loading="eager"
        alt="background"
      />
    </main>
  )
}

export default Register