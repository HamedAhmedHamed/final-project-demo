import { Booking } from "./booking.interface";

export interface BookingContext {
  bookings: Booking[] ;
  isGlobalLoading: boolean;

  fetchBookings: () => Promise<void>;
  handleConfirmation: (id: Booking["id"], statusRef: { current: Booking["status"]} ) => Promise<void>
}