import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
// import useAuthContext from "../contexts/AuthContext";

import SuspensedNavbar from "../components/header/navbar/SuspensedNavbar";
import SuspensedContactbar from "../components/header/contactbar/SuspensedContactbar";
import SuspensedFooter from "../components/footer/SuspensedFooter";

const Navbar = lazy(() => import("../components/header/navbar/Navbar"))
const ContactBar = lazy(() => import("../components/header/contactbar/ContactBar"))
const Footer = lazy(() => import("../components/footer/Footer"))

// import { BeatLoader } from "react-spinners";

const Layout = () => {
  // const location = useLocation()
  // const { isLoading } = useAuthContext()

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" })
  // }, [location])

  // stop scrolling
  return (
    <>
      {/* {isLoading ? (
        <main className="fixed z-50 inset-0 backdrop-blur-sm flex justify-center items-center">
          <BeatLoader className="" size={50} />
        </main>
      ) : null} */}
      <header className="flex flex-col">
        <Suspense fallback={<SuspensedContactbar />}>
          <ContactBar />
        </Suspense>

        <Suspense fallback={<SuspensedNavbar />}>
          <Navbar />
        </Suspense>
      </header >

      <Outlet />

      <footer className="flex justify-center items-center px-16 py-20 bg-zinc-700 max-md:px-5 max-md:py-7">
        <Suspense fallback={<SuspensedFooter />}>
          <Footer />
        </Suspense>
      </footer>
    </>
  )
}

export default Layout