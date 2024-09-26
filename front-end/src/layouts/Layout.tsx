import ContactBar from "../components/header/ContactBar";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer"
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import useAuthContext from "../context/AuthContext";
import { BeatLoader } from "react-spinners";

const Layout = () => {
  const location = useLocation()
  const { isLoading } = useAuthContext()

  useEffect(() => {
    window.scrollTo(0, 0)

  }, [location])

  // stop scrolling
  return (
    <>
      {isLoading && (
        <main className="fixed z-50 inset-0 h-full w-full overflow-hidden backdrop-blur-sm flex justify-center items-center">
          <BeatLoader className="" size={50} />
        </main>
      )}
      <header className="flex flex-col w-full max-md:max-w-full">
        <ContactBar />
        < NavBar />
      </header >

      <Outlet />

      <footer className="flex justify-center items-center px-16 py-20 w-full bg-zinc-700 max-md:px-5 max-md:max-w-full">
        <Footer />
      </footer>
    </>
  )
}

export default Layout