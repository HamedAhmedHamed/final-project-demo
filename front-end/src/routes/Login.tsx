import LoginForm from "../components/sections/LoginForm"
import bg from "/sections/map.webp"

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