import LoginForm from "../components/sections/LoginForm"
import bg from "../assets/booking/Map.png"

const Login = () => {
  return (
    <main>
      <LoginForm />
      <img
        src={bg}
        alt=""
      />
    </main>
  )
}

export default Login