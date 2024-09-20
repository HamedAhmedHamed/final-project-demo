import { Link } from "react-router-dom"
import { useEffect } from "react"
import useAuthContext from "../../context/AuthContext"

const EditUser = () => {
  const { user, getUser } = useAuthContext()

  // useEffect(() => {
  //   if (!user) {
  //     getUser()
  //   }
  // }, [user])

  return (
    <section className="flex flex-col items-start px-5 w-full bg-stone-50 max-md:max-w-full">

      <h1 className="mt-12 capitalize text-7xl text-center leading-[96px] text-stone-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        welcome, <span className="text-8xl font-playfair text-rose-700">{user?.name}</span>
      </h1>

      <form className="flex z-10 flex-col gap-5 text-stone-800 px-12 py-12 mt-20 mb-40 max-w-full text-base leading-6 bg-white rounded-2xl border border-white border-solid shadow-2xl w-[812px] max-md:px-5 max-md:mt-10 max-md:mb-2.5">

        <div className="flex flex-col w-full max-md:w-full">
          <label htmlFor="name" className='capitalize font-bold'>name</label>
          {/* <input
            id='name'
            type="text"
            value={user?.name}
            disabled
            pattern="[A-Za-z\s]+"
            title="Name should only contain letters and spaces."
            required
            className='px-6 py-5 mt-2 text-start text-lg w-full border border-solid border-stone-300 rounded-[72px]'
          /> */}
        </div>

        <div className="flex flex-col w-full max-md:w-full">
          <label htmlFor="email" className='capitalize font-bold'>email</label>
          {/* <input
            id='email'
            type="email"
            value={user?.email}
            disabled
            required
            className='px-6 py-5 mt-2 text-start text-lg w-full border border-solid border-stone-300 rounded-[72px]'
          /> */}
        </div>

        <div className="flex flex-col w-full max-md:w-full">
          <label htmlFor="password" className="capitalize font-bold">password</label>
          {/* <input
            id="password"
            type="password"
            placeholder="Enter Your Password"
            value="********"
            required
            disabled
            className='px-6 py-5 mt-2 text-start text-lg w-full border border-solid border-stone-300 rounded-[72px]'
          /> */}
        </div>

        <button
          type="submit"
          disabled
          className="px-8 py-5 mt-6 font-bold text-center capitalize text-white bg-rose-700 rounded-[118px] max-md:px-5 max-md:max-w-full"
        >
          edit 
        </button>
      </form>

    </section>
  )
}

export default EditUser