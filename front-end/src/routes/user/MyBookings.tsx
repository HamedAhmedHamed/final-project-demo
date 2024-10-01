import MyBookingsList from "../../components/sections/MyBookingsList"
import { BookingProvider } from "../../context/BookingContext"
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