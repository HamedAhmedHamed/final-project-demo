import MyBookingsList from "../../components/sections/user/MyBookingsList"
import { BookingProvider } from "../../contexts/BookingContext"
import { Roles } from "../../types/auth.interface"

const MyBookings = () => {
  return (
    <main>
      <BookingProvider>
        <MyBookingsList role={Roles.user} />
      </BookingProvider>
    </main>
  )
}

export default MyBookings