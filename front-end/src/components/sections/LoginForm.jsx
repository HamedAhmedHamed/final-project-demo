import { useState } from "react"
import { Link } from "react-router-dom"
import { BeatLoader } from "react-spinners"
import useAuthContext from "../../context/AuthContext"

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const { errors, isLoading, login } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    login(user)
  }

  return (
    <section className="flex z-10 flex-col items-center px-5 w-full bg-stone-50 max-md:max-w-full">

      <h1 className="mt-20 capitalize font-playfair text-8xl text-rose-700 text-center leading-[96px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        login
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex z-10 flex-col gap-5 text-stone-800 px-12 py-12 mt-20 -mb-60 max-w-full text-base leading-6 bg-white rounded-2xl border border-white border-solid shadow-2xl w-[812px] max-md:px-5 max-md:mt-10 max-md:mb-2.5"
      >

        <div className="flex flex-col w-full max-md:w-full">
          <label htmlFor="email" className='capitalize font-bold ml-1'>email</label>
          <input
            id='email'
            type="email"
            required
            disabled={isLoading}
            value={user.email}
            onChange={(e) => setUser(() => ({ ...user, email: e.target.value}))}
            className='px-6 py-5 mt-2 text-start text-lg w-full border border-solid border-stone-300 rounded-[72px]'
          />

          {errors.email && errors.email.map((e, index) => (
            <p key={index} className="text-lg text-rose-700 py-1 ml-1">{e}</p>
          ))}
        </div>

        <div className="flex flex-col w-full max-md:w-full">
          <label htmlFor="password" className="capitalize font-bold ml-1">password</label>
          <input
            id="password"
            type="password"
            required
            disabled={isLoading}
            value={user.password}
            onChange={(e) => setUser(() => ({ ...user, password: e.target.value }))}
            className='px-6 py-5 mt-2 text-start text-lg w-full border border-solid border-stone-300 rounded-[72px]'
          />

          {errors.password && errors.password.map((e, index) => (
            <p key={index} className="text-lg text-rose-700 py-1 ml-1">{e}</p>
          ))}
        </div>

        <button
          type="submit"
          className="px-8 py-5 mt-6 font-bold text-center capitalize text-white bg-rose-700 rounded-[118px] max-md:px-5 max-md:max-w-full"
        >
          {isLoading
            ? <BeatLoader color="snow" />
            : "login"}
        </button>

        <div className="flex justify-between items-center w-full">
          <Link to="/register" className="px-3 py-2 bg-gray-50 rounded-full hover:bg-gray-100 hover:text-rose-700 duration-100">Don't have an accout? Register instead</Link>

          {/* <div className="px-3 py-2 flex justify-between items-center">
            <input
              id="checkAdmin"
              type="checkbox"
              checked={isAdmin}
              onChange={() => setIsAdmin(prev => !prev)}
              className="p-2 w-4 h-4"
            />
            <label htmlFor="checkAdmin" className="ml-1 p-2">Login as Admin</label>
          </div> */}
        </div>

      </form>

    </section>
  )
}

export default LoginForm