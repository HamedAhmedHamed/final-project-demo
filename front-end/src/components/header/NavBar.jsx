import { NavLink } from "react-router-dom"
import logo from "../../assets/logo/japanese-food.svg"

const NavBar = () => {
  return (
    <nav className="flex gap-5 justify-between items-center self-center px-5 my-7 w-full text-base leading-6 max-w-[1293px] max-md:flex-wrap max-md:max-w-full">

      <span className="flex justify-center items-center gap-1">
        <img src={logo} className="" alt="logo" />
        <h2 className="font-playfair italic font-bold text-3xl text-stone-700">Bistro Bliss</h2>
      </span>

      <ul className="flex gap-2 self-stretch my-auto font-medium whitespace-nowrap text-stone-800 max-md:flex-wrap">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (
              isActive
                ? "justify-center capitalize px-4 py-1 rounded-[34px] bg-stone-300 hover:bg-stone-200"
                : "justify-center capitalize px-4 py-1 hover:bg-stone-100 rounded-[34px]"
            )}
          >
            home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (
              isActive
                ? "justify-center capitalize px-4 py-1 rounded-[34px] bg-stone-300 hover:bg-stone-200"
                : "justify-center capitalize px-4 py-1 hover:bg-stone-100 rounded-[34px]"
            )}
          >
            about
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) => (
              isActive
              ? "justify-center capitalize px-4 py-1 rounded-[34px] bg-stone-300 hover:bg-stone-200"
              : "justify-center capitalize px-4 py-1 hover:bg-stone-100 rounded-[34px]"
            )}
          >
            menu
          </NavLink>
        </li>
      </ul>

      <NavLink
        to="/login"
        className="justify-center capitalize self-stretch px-6 py-3 my-auto font-bold text-right text-gray-900 hover:text-rose-700 border-2 border-solid border-stone-800 hover:border-rose-700 duration-100 rounded-[118px] max-md:px-5"
      >
        login
      </NavLink>
    </nav>
  )
}

export default NavBar