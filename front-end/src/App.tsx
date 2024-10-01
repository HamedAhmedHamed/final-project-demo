import { Routes, Route, Navigate } from 'react-router-dom'

import Layout from './layouts/Layout.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'

import Home from './routes/shared/Home.tsx'
import About from './routes/shared/About.tsx'
import Menu from './routes/shared/Menu.tsx'
// import NotFound from './routes/NotFound.jsx'

import Booking from './routes/user/Booking.tsx'
import Login from './routes/guest/Login.tsx'
import Register from './routes/guest/Register.tsx'
import MyBookings from './routes/user/MyBookings.tsx'
import UserProfile from './routes/user/UserProfile.tsx'

import AdminPanel from './routes/admin/AdminPanel.tsx'
import ReviewBookings from './routes/admin/ReviewBookings.tsx'
import ModifyMenu from './routes/admin/ModifyMenu.tsx'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={
          <ProtectedRoute allowedModels={["guest", "user", "admin"]}>
            <Home />
          </ProtectedRoute>}
        />
        <Route path='/about' element={
          <ProtectedRoute allowedModels={["guest", "user", "admin"]}>
            <About />
          </ProtectedRoute>}
        />
        <Route path='/menu' element={
          <ProtectedRoute allowedModels={["guest", "user", "admin"]}>
            <Menu />
          </ProtectedRoute>}
        />

        <Route path='/register' element={
          <ProtectedRoute allowedModels={["guest"]}>
            <Register />
          </ProtectedRoute>}
        />
        <Route path='/login' element={
          <ProtectedRoute allowedModels={["guest"]}>
            <Login />
          </ProtectedRoute>}
        />

        <Route path='/profile' element={
          <ProtectedRoute allowedModels={["user"]}>
            <UserProfile />
          </ProtectedRoute>}
        />
        <Route path='/book-a-table' element={
          <ProtectedRoute allowedModels={["user"]}>
            <Booking />
          </ProtectedRoute>}
        />
        <Route path='/my-bookings' element={
          <ProtectedRoute allowedModels={["user"]}>
            <MyBookings />
          </ProtectedRoute>}
        />

        <Route path='/admin-panel' element={
          <ProtectedRoute allowedModels={["admin"]}>
            <AdminPanel /> 
          </ProtectedRoute>}
        />
        <Route path='/review-bookings' element={
          <ProtectedRoute allowedModels={["admin"]}>
            <ReviewBookings />
          </ProtectedRoute>}
        />
        <Route path='/modify-menu' element={
          <ProtectedRoute allowedModels={["admin"]}>
            <ModifyMenu />
          </ProtectedRoute>}
        />
      </Route>
    </Routes>
  )
}
export default App