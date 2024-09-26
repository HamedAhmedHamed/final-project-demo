import MyBookingsList from "../../components/sections/MyBookingsList"
import { Roles } from "../../context/AuthContext"

MyBookingsList
const ReviewBookings = () => {
  return (
    <main>
      <MyBookingsList role={Roles.admin} />
    </main>
  )
}

export default ReviewBookings