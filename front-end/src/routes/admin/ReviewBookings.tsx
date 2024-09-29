import MyBookingsList from "../../components/sections/MyBookingsList"
import { Roles } from "../../types/auth.interface"

MyBookingsList
const ReviewBookings = () => {
  return (
    <main>
      <MyBookingsList role={Roles.admin} />
    </main>
  )
}

export default ReviewBookings