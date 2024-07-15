import ContactBar from "../components/header/ContactBar";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <>
      <header className="flex flex-col w-full max-md:max-w-full">
        <ContactBar />
        <NavBar />
      </header>

      <Outlet />

      <Footer />
    </>
  )
}

export default GuestLayout