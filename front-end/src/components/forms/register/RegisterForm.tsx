import { FormEvent, useState } from "react"
import useAuthContext from "../../../contexts/AuthContext"
import { Roles, RegisteredUser } from "../../../types/auth.interface"
import { Link } from "react-router-dom"

const RegisterForm = () => {
<<<<<<< HEAD:front-end/src/components/forms/register/RegisterForm.tsx
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [user, setUser] = useState<RegisteredUser>({
=======
  const [isAdmin, setIsAdmin] = useState(false)

  const [user, setUser] = useState({
>>>>>>> bdc8ba608b140c27cb1e1ed73e06234b43c31014:front-end/src/components/sections/RegisterForm.jsx
    name: "",
    role: Roles.user,
    email: "",
    password: "",
    password_confirmation: ""
  })

<<<<<<< HEAD:front-end/src/components/forms/register/RegisterForm.tsx
  const { register } = useAuthContext()
=======
  const {
    register,
    isLoading,
    errors
  } = useAuthContext()
>>>>>>> bdc8ba608b140c27cb1e1ed73e06234b43c31014:front-end/src/components/sections/RegisterForm.jsx

  const handleRoleChange = () => {
    setIsAdmin(prev => !prev)
    if (!isAdmin) {
      setUser(() => ({ ...user, role: Roles.admin }))
    } else {
      setUser(() => ({ ...user, role: Roles.user }))
    }
  }

  const handleRegister = (e: FormEvent) => {
    e.preventDefault()
    register(user)
  }

  return (
    <section className="flex z-10 flex-col items-center px-5 w-full bg-stone-50 max-md:max-w-full">

      <h1 className="mt-20 capitalize font-playfair text-7xl text-center leading-[96px] text-stone-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        register as, <span className="text-8xl text-rose-700">{isAdmin ? "admin" : "user"}</span>
      </h1>

<<<<<<< HEAD:front-end/src/components/forms/register/RegisterForm.tsx
      <form onSubmit={handleRegister} className="flex z-10 flex-col gap-5 text-stone-800 px-12 py-12 mt-20 -mb-96 max-w-full text-base leading-6 bg-white rounded-2xl border border-white border-solid shadow-2xl w-[812px] max-md:px-5 max-md:mt-10 max-md:mb-2.5">
=======
      <form onSubmit={handleRegister} className="flex z-10 flex-col gap-5 text-stone-800 px-12 py-12 mt-20 -mb-80 max-w-full text-base leading-6 bg-white rounded-2xl border border-white border-solid shadow-2xl w-[812px] max-md:px-5 max-md:mt-10 max-md:mb-2.5">
>>>>>>> bdc8ba608b140c27cb1e1ed73e06234b43c31014:front-end/src/components/sections/RegisterForm.jsx

        <div className="flex flex-col w-full max-md:w-full">
          <label htmlFor="name" className='capitalize font-bold ml-1'>name</label>
          <input
            id='name'
            type="text"
            disabled={isLoading}
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Enter Your Name"
            pattern="[A-Za-z\s]+"
            title="Name should only contain letters and spaces."
            required
            className='px-6 py-5 mt-2 text-start text-lg w-full border border-solid border-stone-300 rounded-[72px]'
          />
          
          {errors.name && errors.name.map((e, index) => (
            <p key={index} className="text-lg text-rose-700 py-1 ml-1">{e}</p>
          ))}
        </div>

        <div className="flex flex-col w-full max-md:w-full">
          <label htmlFor="email" className='capitalize font-bold ml-1'>email</label>
          <input
            id='email'
            type="email"
            disabled={isLoading}
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter You Email"
            required
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
            disabled={isLoading}
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter Your Password"
            required
            className='px-6 py-5 mt-2 text-start text-lg w-full border border-solid border-stone-300 rounded-[72px]'
          />

          {errors.password && errors.password.map((e, index) => (
            <p key={index} className="text-lg text-rose-700 py-1 ml-1">{e}</p>
          ))}
        </div>

        <div className="flex flex-col w-full max-md:w-full">
          <label htmlFor="repeat-password" className="capitalize font-bold ml-1">repeat password</label>
          <input
            id="repeat-password"
            type="password"
            disabled={isLoading}
            value={user.password_confirmation}
            onChange={(e) => setUser({ ...user, password_confirmation: e.target.value })}
            placeholder="Please Repeat Your Password"
            required
            className='px-6 py-5 mt-2 text-start text-lg w-full border border-solid border-stone-300 rounded-[72px]'
          />
        </div>

        <button
          type="submit"
          className="px-8 py-5 mt-6 font-bold text-center capitalize text-white bg-rose-700 rounded-[118px] max-md:px-5 max-md:max-w-full"
        >
          register
        </button>

        <div className="flex justify-between items-center w-full">
          <Link to="/login" className="px-3 py-2 bg-gray-50 rounded-full hover:bg-gray-100 hover:text-rose-700 duration-100">Already have an accout? Login instead</Link>

          <div className="px-3 py-2 flex justify-between items-center">
            <input
              id="checkAdmin"
              type="checkbox"
<<<<<<< HEAD:front-end/src/components/forms/register/RegisterForm.tsx
              checked={user.role === Roles.admin}
              onChange={handleRoleChange}
              className="p-2 w-4 h-4"
=======
              className="p-2 w-4 h-4"
              checked={isAdmin}
              onChange={() => {
                setIsAdmin(prev => !prev)
                if (!isAdmin) {
                  setUser(() => ({ ...user, role: "admin"}))
                } else {
                  setUser(() => ({ ...user, role: "user"}))
                }
              }}
>>>>>>> bdc8ba608b140c27cb1e1ed73e06234b43c31014:front-end/src/components/sections/RegisterForm.jsx
            />
            <label htmlFor="checkAdmin" className="ml-1 p-2 capitalize">register as admin</label>
          </div>
        </div>

      </form>

    </section>
  )
}

export default RegisterForm