import BookingForm from "../components/sections/BookingForm"
import mapBg from "../assets/booking/Map.png"

const Booking = () => {
  return (
    <main>
      <BookingForm />
       <img
        loading="lazy"
        src={mapBg}
      />
    </main>
  )
}

export default Booking