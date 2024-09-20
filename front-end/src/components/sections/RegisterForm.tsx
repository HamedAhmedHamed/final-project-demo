import { useState } from "react"
import useAuthContext from "../../context/AuthContext"
import { BeatLoader } from "react-spinners"
import { Link } from "react-router-dom"

const RegisterForm = () => {
  const [user, setUser] = useState({
    name: "",
    role: "user",
    email: "",
    password: "",
    password_confirmation: ""
  })

  const {register, isAdmin, setIsAdmin, isLoading} = useAuthContext()

  const handleRegister = (e) => {
    e.preventDefault()
    register(user)
  }

  return (
    <section className="flex z-10 flex-col items-center px-5 w-full bg-stone-50 max-md:max-w-full">

      <h1 className="mt-20 capitalize font-playfair text-7xl text-center leading-[96px] text-stone-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        register as, <span className="text-8xl text-rose-700">{ isAdmin ? "admin" : "user"}</span>
      </h1>

      <form onSubmit={handleRegister} className="flex z-10 flex-col gap-5 text-stone-800 px-12 py-12 mt-20 -mb-60 max-w-full text-base leading-6 bg-white rounded-2xl border border-white border-solid shadow-2xl w-[812px] max-md:px-5 max-md:mt-10 max-md:mb-2.5">

        <div className="flex flex-col w-full max-md:w-full">
          <label htmlFor="name" className='capitalize font-bold'>name</label>
          <input
            id='name'
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value})}
            placeholder="Enter Your Name"
            pattern="[A-Za-z\s]+"
            title="Name should only contain letters and spaces."
            required
            className='px-6 py-5 mt-2 text-start text-lg w-full border border-solid border-stone-300 rounded-[72px]'
          />
        </div>
        
        <div className="flex flex-col w-full max-md:w-full">
          <label htmlFor="email" className='capitalize font-bold'>email</label>
          <input
            id='email'
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value})}
            placeholder="Enter You Email"  
            required
            className='px-6 py-5 mt-2 text-start text-lg w-full border border-solid border-stone-300 rounded-[72px]'
          />
        </div>

        <div className="flex flex-col w-full max-md:w-full">
          <label htmlFor="password" className="capitalize font-bold">password</label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value})}
            placeholder="Enter Your Password"
            required
            className='px-6 py-5 mt-2 text-start text-lg w-full border border-solid border-stone-300 rounded-[72px]'
          />
        </div>

        <div className="flex flex-col w-full max-md:w-full">
          <label htmlFor="repeat-password" className="capitalize font-bold">repeat password</label>
          <input
            id="repeat-password"
            type="password"
            value={user.password_confirmation}
            onChange={(e) => setUser({ ...user, password_confirmation: e.target.value})}
            placeholder="Please Repeat Your Password"
            required
            className='px-6 py-5 mt-2 text-start text-lg w-full border border-solid border-stone-300 rounded-[72px]'
          />
        </div>

        <button
          type="submit"
          className="px-8 py-5 mt-6 font-bold text-center capitalize text-white bg-rose-700 rounded-[118px] max-md:px-5 max-md:max-w-full"
        >
          {isLoading
            ? <BeatLoader color="snow" />
            : "register"}
        </button>

        <div className="flex justify-between items-center w-full">
          <Link to="/login" className="px-3 py-2 bg-gray-50 rounded-full hover:bg-gray-100 hover:text-rose-700 duration-100">Already have an accout? Login instead</Link>

          <div className="px-3 py-2 flex justify-between items-center">
            <input
              id="checkAdmin"
              type="checkbox"
              checked={isAdmin}
              onChange={() => {
                setIsAdmin(prev => !prev)
                if (!isAdmin) {
                  setUser(() => ({ ...user, role: "admin"}))
                } else {
                  setUser(() => ({ ...user, role: "user"}))
                }
              }}
              className="p-2 w-4 h-4"
            />
            <label htmlFor="checkAdmin" className="ml-1 p-2 capitalize">register as admin</label>
          </div>
        </div>

      </form>

    </section>
  )
}

export default RegisterForm