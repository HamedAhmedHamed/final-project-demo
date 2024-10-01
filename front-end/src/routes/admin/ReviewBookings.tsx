import MyBookingsList from "../../components/sections/MyBookingsList"
import { BookingProvider } from "../../context/BookingContext"
import { Roles } from "../../types/auth.interface"

MyBookingsList
const ReviewBookings = () => {
  return (
    <main>
      <BookingProvider>
        <MyBookingsList role={Roles.admin} />
      </BookingProvider>
    </main>
  )
}

export default ReviewBookings