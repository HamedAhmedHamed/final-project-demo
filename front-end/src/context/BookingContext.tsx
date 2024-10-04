import { createContext, useContext, useState, type PropsWithChildren } from "react"
import api from "../api/api";
import { Booking } from "../types/booking.interface";
import useAuthContext from "./AuthContext";
import { type BookingContext } from "../types/bookingContext.interface";

const BookingContext = createContext<BookingContext | null>(null)

export const BookingProvider = ({ children }: PropsWithChildren) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isGlobalLoading, setIsGlobalLoading] = useState<boolean>(false)
  const { csrf, getAccessToken } = useAuthContext()

  const fetchBookings = async () => {
    setIsGlobalLoading(() => true)
    await csrf()
    try {
      const { data } = await api.get<Booking[]>("/api/bookings", {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      })
      setBookings(() => data)
      console.log(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsGlobalLoading(() => false)
    }


  }

  const handleConfirmation = async (id: Booking["id"], statusRef: ({ current: Booking["status"] })) => {
    setIsGlobalLoading(() => true)
    await csrf()

    try {
      await api.put(`/api/bookings/confirm/${id}`, { status: statusRef.current }, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      })
    } catch (error) {

    } finally {
      setIsGlobalLoading(() => false)
    }
  }

  return (
    <BookingContext.Provider
      value={{
        bookings,
        isGlobalLoading,
        fetchBookings,
        handleConfirmation
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking () {
  const ctx = useContext(BookingContext) as BookingContext 
  if (ctx === null)
    throw new Error("useBooking hook must be used within a BookingProvider")
  return ctx
}

export default useBooking