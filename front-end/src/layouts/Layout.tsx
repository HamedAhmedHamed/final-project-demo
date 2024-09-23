import ContactBar from "../components/header/ContactBar";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer"
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import useAuthContext from "../context/AuthContext";

const Layout = () => {
  const location = useLocation()
  const { isLoading } = useAuthContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    // loading overlay
    isLoading ? (
      <div className="absolute inset-0 h-screen w-full overflow-hidden bg-gray-200"></div>
    ) :
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

export default Layout