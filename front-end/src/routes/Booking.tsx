import BookingForm from "../components/sections/BookingForm"
import mapBg from "/sections/map.webp"

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