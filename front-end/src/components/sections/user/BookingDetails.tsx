import { useState, useRef, useEffect } from "react"
import useBooking from "../../../contexts/BookingContext"
import { Roles } from "../../../types/auth.interface"
import { Booking } from "../../../types/booking.interface"
import { BookingStatus } from "../../../types/booking.interface"
import { BeatLoader } from "react-spinners"

const BookingDetails = ({ role, booking }: { role: Roles, booking: Booking }) => {
  const [bookingStatus, setBookingStatus] = useState<BookingStatus>(booking.status)
  const { isGlobalLoading, handleConfirmation } = useBooking()
  const [isLoading, setIsLoading] = useState<boolean>(isGlobalLoading)
  const bookingStatusRef = useRef<BookingStatus>(bookingStatus)

  useEffect(() => {
    setIsLoading(() => isGlobalLoading)
    bookingStatusRef.current = bookingStatus
  }, [bookingStatus, isGlobalLoading])

  return (
    <tr
      className={`border-b "border-neutral-200" transition duration-300 ease-in-out ${bookingStatus === BookingStatus.accepted
        ? "hover:bg-green-100"
        : bookingStatus === BookingStatus.rejected ? "hover:bg-rose-100" : "hover:bg-neutral-100"}`}
    >
      <td className="whitespace-nowrap px-6 py-4 font-medium">{booking.id}</td>
      <td className="whitespace-nowrap px-6 py-4">{booking.registration_date}</td>
      <td className="whitespace-nowrap px-6 py-4">{booking.registration_time}</td>
      <td className="whitespace-nowrap px-6 py-4">{booking.name}</td>
      <td className="whitespace-nowrap px-6 py-4">{booking.phone}</td>
      <td className="whitespace-nowrap px-6 py-4">{booking.number_of_persons}</td>

      {role === Roles.admin ? (
        <td className="px-6 py-4 capitalize whitespace-nowrap">
          <div className="flex justify-evenly">
            <button
              className={`px-2 py-1 w-16 text-white rounded-md ${bookingStatus === BookingStatus.pending
                ? "bg-green-500"
                : (bookingStatus === BookingStatus.accepted) ? "bg-amber-500" : "bg-green-500 opacity-70"}`}

              disabled={bookingStatus === BookingStatus.rejected || isGlobalLoading}
              onClick={() => {
                setBookingStatus((prev) => prev === BookingStatus.accepted ? BookingStatus.pending : BookingStatus.accepted)
                handleConfirmation(booking.id, bookingStatusRef)
              }}
            >
              {/* {isLoading ? ( */}
              {isLoading && (bookingStatus === BookingStatus.accepted || bookingStatus === BookingStatus.pending) ? (
                <BeatLoader color="snow" size={5} />
              ) : bookingStatus === BookingStatus.accepted ? "undo" : "accept"}
            </button>

            <button
              className={`px-2 py-1 w-16 text-white rounded-md ${bookingStatus === BookingStatus.pending
                ? "bg-rose-500"
                : (bookingStatus === BookingStatus.rejected) ? "bg-amber-500" : "bg-rose-500 opacity-70"}`}
              disabled={bookingStatus === BookingStatus.accepted || isLoading}
              onClick={() => {
                setBookingStatus((prev) => prev === BookingStatus.rejected ? BookingStatus.pending : BookingStatus.rejected)
                handleConfirmation(booking.id, bookingStatusRef)
              }}
            >
              {/* {isLoading ? ( */}
              {isLoading && (bookingStatus === BookingStatus.rejected || bookingStatus === BookingStatus.pending) ? (
                <BeatLoader color="snow" size={5} />
              ) : bookingStatus === BookingStatus.rejected ? "undo" : "reject"}
            </button>
          </div>
        </td>
      ) : (
        <td className="whitespace-nowrap px-6 py-4">
          <span className={`px-2 py-1 w-16 text-white font-bold rounded-full capitalize ${bookingStatus === BookingStatus.accepted
          ? "bg-green-400"
          : bookingStatus === BookingStatus.rejected
          ? "bg-rose-500" : "bg-cyan-500"} `}>{bookingStatus}</span>
        </td>
      )}
    </tr>
  )
}
export default BookingDetails