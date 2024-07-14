import ContactBar from "../components/ContactBar";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <>
      <header className="flex flex-col w-full max-md:max-w-full">
        <ContactBar />
        <NavBar />
      </header>

      <Outlet />
    </>
  )
}

export default GuestLayout