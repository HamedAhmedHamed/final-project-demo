export enum BookingStatus {
  pending = "pending",
  accepted = "accepted",
  rejected = "rejected"
}

export interface Booking {
  created_at: string;
  id: number;
  name: string;
  number_of_persons: string;
  phone: string;
  registration_date: string;
  registration_time: string;
  status: BookingStatus.accepted | BookingStatus.pending | BookingStatus.rejected
  updated_at: string;
}

// export interface Booking {
//   data: string;
//   time: string;
//   name: string;
//   phone: string;
//   noOfPersons: string;
//   status: BookingStatus.accepted | BookingStatus.pending | BookingStatus.rejected;
// }