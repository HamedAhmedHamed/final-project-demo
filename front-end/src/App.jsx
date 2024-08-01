import { Routes, Route } from 'react-router-dom'
import GuestLayout from './layouts/GuestLayout.jsx'
import UserLayout from './layouts/UserLayout.jsx'
import AdminLayout from './layouts/GuestLayout.jsx'

import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Menu from './routes/Menu.jsx'
import NotFound from './routes/NotFound.jsx'
import Booking from './routes/Booking.jsx'
import Login from './routes/Login.jsx'
import Register from './routes/Register.jsx'
import MyBookings from './routes/MyBookings.jsx'
import UserProfile from './routes/UserProfile.jsx'

import './index.css'

const App = () => {
  return (
    <Routes>
      <Route element={<GuestLayout />}>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Route>

      <Route element={<UserLayout />}>
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/book-a-table' element={<Booking />} />
        <Route path='/my-bookings' element={<MyBookings />} />
      </Route>

      <Route element={<AdminLayout />}>

      </Route>
    </Routes>
  )
  // const routes = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <GuestLayout />,
  //     // errorElement: <Navigate to="/not-found" />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Navigate to="/home" replace />
  //       },
  //       // {
  //       //   path: "/not-found",
  //       //   element: <NotFound />
  //       // },
  //       {
  //         path: "/home",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/about",
  //         element: <About />
  //       },
  //       {
  //         path: "/menu",
  //         element: <Menu />
  //       },
  //       {
  //         path: "/register",
  //         element: <Register />
  //       },
  //       {
  //         path: "/login",
  //         element: <Login />
  //       },
  //       {
  //         path: "/book-a-table",
  //         element: <Booking />
  //       },
  //       {
  //         path: "/my-bookings",
  //         element: <MyBookings />
  //       },
  //       {
  //         path: "/profile",
  //         element: <UserProfile />
  //       }
  //     ]
  //   },

  //   // {
  //   //   path: "/",
  //   //   element: <UserLayout />,
  //   //   children: [
  //   //     {
  //   //       path: "/book-a-table",
  //   //       element: <Booking />
  //   //     },
  //   //     {
  //   //       path: "/my-bookings",
  //   //       element: <MyBookings />
  //   //     },
  //   //     {
  //   //       path: "/profile",
  //   //       element: <UserProfile />
  //   //     }
  //   //   ]
  //   // },

  //   // {
  //   //   path: "/",
  //   //   element: <AdminLayout />,
  //   //   children: []
  //   // }
  // ])
}
export default App