import { Routes, Route, Navigate } from 'react-router-dom'
import { Roles } from './types/auth.interface.ts'

import Layout from './layouts/Layout.tsx'
import ProtectedRoute from './utils/ProtectedRoute.tsx'

import Home from './routes/shared/Home.tsx'
import About from './routes/shared/About.tsx'
import Menu from './routes/shared/Menu.tsx'

import Login from './routes/guest/Login.tsx'
import Register from './routes/guest/Register.tsx'

import Booking from './routes/user/Booking.tsx'
import MyBookings from './routes/user/MyBookings.tsx'
import UserProfile from './routes/user/UserProfile.tsx'

import ReviewBookings from './routes/admin/ReviewBookings.tsx'
import ModifyMenu from './routes/admin/ModifyMenu.tsx'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={
          <ProtectedRoute allowedModels={[Roles.guest, Roles.user, Roles.admin]}>
            <Home />
          </ProtectedRoute>}
        />
        <Route path='/about' element={
          <ProtectedRoute allowedModels={[Roles.guest, Roles.user, Roles.admin]}>
            <About />
          </ProtectedRoute>}
        />
        <Route path='/menu' element={
          <ProtectedRoute allowedModels={[Roles.guest, Roles.user]}>
            <Menu />
          </ProtectedRoute>}
        />

        <Route path='/register' element={
          <ProtectedRoute allowedModels={[Roles.guest]}>
            <Register />
          </ProtectedRoute>}
        />
        <Route path='/login' element={
          <ProtectedRoute allowedModels={[Roles.guest]}>
            <Login />
          </ProtectedRoute>}
        />

        <Route path='/profile' element={
          <ProtectedRoute allowedModels={[Roles.user]}>
            <UserProfile />
          </ProtectedRoute>}
        />
        <Route path='/book-a-table' element={
          <ProtectedRoute allowedModels={[Roles.user]}>
            <Booking />
          </ProtectedRoute>}
        />
        <Route path='/my-bookings' element={
          <ProtectedRoute allowedModels={[Roles.user]}>
            <MyBookings />
          </ProtectedRoute>}
        />

        <Route path='/review-bookings' element={
          <ProtectedRoute allowedModels={[Roles.admin]}>
            <ReviewBookings />
          </ProtectedRoute>}
        />
        <Route path='/modify-menu' element={
          <ProtectedRoute allowedModels={[Roles.admin]}>
            <ModifyMenu />
          </ProtectedRoute>}
        />
      </Route>
    </Routes>
  )
}
export default App