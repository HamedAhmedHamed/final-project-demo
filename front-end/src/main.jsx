import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import './index.css'

import GuestLayout from './layouts/GuestLayout.jsx'
import UserLayout from './layouts/UserLayout.jsx'
import AdminLayout from './layouts/GuestLayout.jsx'

import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Menu from './routes/Menu.jsx'
import NotFound from './routes/NotFound.jsx'
import Booking from './routes/Booking.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    errorElement: <Navigate to="/not-found" />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: "/not-found",
        element: <NotFound />
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/menu",
        element: <Menu />
      }
    ]
  },

  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/book-a-table",
        element: <Booking />
      }
    ]
  },

  {
    path: "/",
    element: <AdminLayout />,
    children: []
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
