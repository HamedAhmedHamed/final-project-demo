import ContactBar from "../components/header/ContactBar";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer"
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import useAuthContext from "../context/AuthContext";
import { BeatLoader } from "react-spinners";

const Layout = () => {
  // const location = useLocation()
  const { isLoading } = useAuthContext()

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" })
  // }, [location])

  // stop scrolling
  return (
    <>
      {isLoading ? (
        <main className="fixed z-50 inset-0 backdrop-blur-sm flex justify-center items-center">
          <BeatLoader className="" size={50} />
        </main>
      ) : null}
      <header className="flex flex-col">
        <ContactBar />
        < NavBar />
      </header >

      <Outlet />

      <footer className="flex justify-center items-center px-16 py-20 bg-zinc-700 max-md:px-5 max-md:py-7">
        <Footer />
      </footer>
    </>
  )
}

export default Layout