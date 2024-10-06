import { NavLink, useNavigate } from "react-router-dom"
import { Roles } from "../../../types/auth.interface"
import useAuthContext from "../../../contexts/AuthContext"
import logo from "/japanese-food.svg"

export interface NavigationLink {
  navigateTo: string;
  label: string;
  roles: Roles[]
}

export const navigation: NavigationLink[] = [
  {
    label: "home",
    navigateTo: "/home",
    roles: [Roles.guest, Roles.user, Roles.admin]
  },
  {
    label: "about",
    navigateTo: "/about",
    roles: [Roles.guest, Roles.user, Roles.admin]
  },
  {
    label: "menu",
    navigateTo: "/menu/?cat=all",
    roles: [Roles.guest, Roles.user]
  },
  {
    label: "login",
    navigateTo: "/login",
    roles: [Roles.guest]
  },
  {
    label: "register",
    navigateTo: "/register",
    roles: [Roles.guest]
  },
  {
    label: "profile",
    navigateTo: "/profile",
    roles: [Roles.user]
  },
  {
    label: "book a table",
    navigateTo: "/book-a-table",
    roles: [Roles.user]
  },
  {
    label: "my bookings",
    navigateTo: "/my-bookings",
    roles: [Roles.user]
  },
  {
    label: "modify menu",
    navigateTo: "/modify-menu/?cat=all",
    roles: [Roles.admin]
  },
  {
    label: "admin panel",
    navigateTo: "/admin-panel",
    roles: [Roles.admin]
  },
  {
    label: "review bookings",
    navigateTo: "/review-bookings",
    roles: [Roles.admin]
  }
]

const Navbar = () => {
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
        {navigation.filter((nav) => nav.roles.includes(user.role)).filter((nav) => !nav.label.includes("login")).map((link, i) => (
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

export default Navbar