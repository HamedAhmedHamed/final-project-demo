import RegisterForm from "../components/sections/RegisterForm"
import bg from "../assets/hero/bg.jpg"

const Register = () => {
  return (
    <main>
      <RegisterForm />
      <img
        src={bg}
        alt=""
      />
    </main>
  )
}

export default Register