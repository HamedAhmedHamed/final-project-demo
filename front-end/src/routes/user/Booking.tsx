import BookingForm from "../../components/forms/booking/BookingForm"
import mapBg from "/images/sections/map.webp"

const Booking = () => {
  return (
    <main>
      <BookingForm />
       <img
        loading="eager"
        className="w-full"
        src={mapBg}
        alt="map background"
      />
    </main>
  )
}

export default Booking