import BookingForm from "../../components/sections/BookingForm"
import mapBg from "/sections/map.webp"

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