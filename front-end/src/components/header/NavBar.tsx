import { NavLink, useNavigate } from "react-router-dom"
import useAuthContext from "../../context/AuthContext"
import { NavButton } from "../ui/button/NavButton"
import logo from "/japanese-food.svg"

export type NavigationLink = { navigateTo: string; label: string; }
export const guestNavigation: NavigationLink[] = [
  {
    label: "home",
    navigateTo: "/home"
  },
  {
    label: "about",
    navigateTo: "/about"
  },
  {
    label: "menu",
    navigateTo: "/menu"
  },
  {
    label: "login",
    navigateTo: "/login"
  },
  {
    label: "register",
    navigateTo: "/register"
  },
]

export const userNavigation: NavigationLink[] = [
  {
    label: "home",
    navigateTo: "/home"
  },
  {
    label: "about",
    navigateTo: "/about"
  },
  {
    label: "profile",
    navigateTo: "/profile"
  },
  {
    label: "menu",
    navigateTo: "/menu"
  },
  {
    label: "book a table",
    navigateTo: "/book-a-table"
  },
  {
    label: "my bookings",
    navigateTo: "/my-bookings"
  },
  
]

export const adminNavigation: NavigationLink[] = [
  {
    label: "home",
    navigateTo: "/home"
  },
  {
    label: "about",
    navigateTo: "/about"
  },
  {
    label: "modify menu",
    navigateTo: "/modify-menu"
  },
  {
    label: "admin panel",
    navigateTo: "/admin-panel"
  },
  {
    label: "review bookings",
    navigateTo: "/review-bookings"
  },
]

const NavBar = () => {
  const { user, logout } = useAuthContext()
  const navigate = useNavigate()

  const handleAuth = () => {
    if (user.role !== "guest")
      logout()
    else
      navigate("/login")
  }

  return (
    <nav className="flex gap-5 justify-between items-center self-center px-5 my-7 w-full text-base leading-6 max-w-screen-xl max-sm:flex-col max-md:max-w-full">

      <span className="flex justify-center items-center gap-1">
        <img src={logo} className="" alt="logo" />
        <h2 className="font-playfair italic font-bold text-3xl text-stone-700">Bistro Bliss</h2>
      </span>

      <ul className="flex gap-2 self-stretch my-auto font-medium whitespace-nowrap text-stone-800 max-sm:justify-evenly">
        {(user.role === "guest")
          ? guestNavigation.filter(link => (link.label !== "register" && link.label !== "login")).map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.navigateTo}
                className={({ isActive }) => (
                  isActive
                    ? "justify-center capitalize px-4 py-1 rounded-[34px] bg-stone-300 hover:bg-stone-200"
                    : "justify-center capitalize px-4 py-1 hover:bg-stone-100 rounded-[34px]"
                )}
              >
                {link.label}
              </NavLink>
            </li>
          ))
          : (user.role === "user")
            ? userNavigation.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.navigateTo}
                  className={({ isActive }) => (
                    isActive
                      ? "justify-center capitalize px-4 py-1 rounded-[34px] bg-stone-300 hover:bg-stone-200"
                      : "justify-center capitalize px-4 py-1 hover:bg-stone-100 rounded-[34px]"
                  )}
                >
                  {link.label}
                </NavLink>
              </li>
            ))
            : adminNavigation.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.navigateTo}
                  className={({ isActive }) => (
                    isActive
                      ? "justify-center capitalize px-4 py-1 rounded-[34px] bg-stone-300 hover:bg-stone-200"
                      : "justify-center capitalize px-4 py-1 hover:bg-stone-100 rounded-[34px]"
                  )}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
      </ul>

      <button
        onClick={handleAuth}
        className="justify-center capitalize px-6 py-3 my-auto font-bold text-right text-gray-900 hover:text-rose-700 border-2 border-solid border-stone-800 hover:border-rose-700 duration-100 rounded-full max-md:px-5 max-sm:justify-end"
      >
        {user.role === "guest"
          ? "login"
          : "logout"}
      </button>
    </nav>
  )
}

export default NavBar