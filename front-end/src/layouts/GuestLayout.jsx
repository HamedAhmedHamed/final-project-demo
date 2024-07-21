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

		  <footer className="flex justify-center items-center px-16 py-20 w-full bg-zinc-700 max-md:px-5 max-md:max-w-full">
        <Footer />
      </footer>
    </>
  )
}

export default GuestLayout