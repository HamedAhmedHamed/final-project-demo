import MyBookingsList from "../../components/sections/user/MyBookingsList"
import { BookingProvider } from "../../contexts/BookingContext"
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