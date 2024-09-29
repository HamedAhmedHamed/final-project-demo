import { useEffect, useRef, useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineDateRange, MdDriveFileRenameOutline, MdApproval } from "react-icons/md"
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";

import api from "../../api/api";
import useAuthContext from "../../context/AuthContext";
import { Booking, BookingStatus } from "../../types/booking.interface";
import { Roles } from "../../types/auth.interface";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { BeatLoader } from "react-spinners";

const BookingDetails = ({ role, booking }: { role: Roles, booking: Booking }) => {
  const [bookingStatus, setBookingStatus] = useState<BookingStatus>(booking.status)
  // STALE STATE
  const bookingStatusRef = useRef<BookingStatus>(bookingStatus)
  const { csrf, getAccessToken } = useAuthContext()

  useEffect(() => {
    bookingStatusRef.current = bookingStatus
  }, [bookingStatus])

  const handleConfirmation = async () => {
    await csrf()
    try {
      await api.put(`/api/handle-confirmation/${booking.id}`, { status: bookingStatusRef.current }, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`
        }
      })
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

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
                : bookingStatus === BookingStatus.accepted ? "bg-amber-500" : "bg-green-500 opacity-70"}`}

              disabled={bookingStatus === BookingStatus.rejected}
              onClick={() => {
                setBookingStatus((prev) => prev === BookingStatus.accepted ? BookingStatus.pending : BookingStatus.accepted)
                handleConfirmation()
              }}
            >
              {(bookingStatus === BookingStatus.accepted || bookingStatus === BookingStatus.pending) ? (
                <BeatLoader color="snow" size={5} />
              ) : bookingStatus === BookingStatus.accepted ? "undo" : "accept"}
            </button>

            <button
              className={`px-2 py-1 w-16 text-white rounded-md ${bookingStatus === BookingStatus.pending
                ? "bg-rose-500"
                : bookingStatus === BookingStatus.rejected ? "bg-amber-500" : "bg-rose-500 opacity-70"}`}
              disabled={bookingStatus === BookingStatus.accepted}
              onClick={() => {
                setBookingStatus((prev) => prev === BookingStatus.rejected ? BookingStatus.pending : BookingStatus.rejected)
                handleConfirmation()
              }}
            >
              {isLoading && (bookingStatus === BookingStatus.rejected || bookingStatus === BookingStatus.pending) ? (
                <BeatLoader color="snow" size={5} />
              ) : bookingStatus === BookingStatus.rejected ? "undo" : "reject"}
            </button>
          </div>
        </td>
      ) : (
        <td className="whitespace-nowrap px-6 py-4">
          {/*booking.status === BookingStatus.accepted ? (
            <span className="px-2 py-1 w-16 bg-green-400 text-white font-bold rounded-full capitalize">{BookingStatus.accepted}</span>
          ) : booking.status === BookingStatus.rejected ? (
            <span className="px-2 py-1 w-16 bg-rose-500 text-white font-bold rounded-full capitalize">{BookingStatus.rejected}</span>
          ) : (
            <span className="px-2 py-1 w-16 bg-blue-400 text-white font-bold rounded-full capitalize">{booking.status}</span>
          )*/}
          <span className={`px-2 py-1 w-16 ${bookingStatus === BookingStatus.accepted
          ? "bg-green-400"
          : bookingStatus === BookingStatus.rejected
          ? "bg-rose-500" : "bg-cyan-600"} text-white font-bold rounded-full capitalize`}>{bookingStatus}</span>
        </td>
      )}
    </tr>
  )
}

const MyBookingsList = ({ role = Roles.user }: { role: Roles }) => {
  const [bookings, setBookings] = useState<Booking[] | null>(null);
  const { csrf, getAccessToken } = useAuthContext()

  useEffect(() => {
    const fetchBookings = async () => {
      await csrf()
      try {
        const { data } = await api.get<Booking[]>("/api/get-bookings", {
          headers: {
            Authorization: `Bearer ${getAccessToken()}`
          }
        })
        console.log(data)
        setBookings(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBookings()
  }, [])

  return (
    <section className="flex flex-col px-5 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">

      <h1 className="mt-20 capitalize font-playfair text-7xl text-start leading-[96px] text-stone-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        {role === Roles.admin ? "review bookings" : "my bookings"}
      </h1>

      <div className="flex flex-col my-10">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 ">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">

                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-6 py-4 capitalize whitespace-nowrap">
                      <FaHashtag className="inline mr-1" color="#be123c" size={16} />
                    </th>

                    <th scope="col" className="px-6 py-4 capitalize whitespace-nowrap">
                      <MdOutlineDateRange className="inline mr-1" color="#be123c" size={16} />
                      date
                    </th>

                    <th scope="col" className="px-6 py-4 capitalize whitespace-nowrap">
                      <FaRegClock className="inline mr-1" color="#be123c" size={16} />
                      time
                    </th>

                    <th scope="col" className="px-6 py-4 capitalize whitespace-nowrap">
                      <MdDriveFileRenameOutline className="inline mr-1" color="#be123c" size={16} />
                      name
                    </th>

                    <th scope="col" className="px-6 py-4 capitalize whitespace-nowrap">
                      <HiOutlinePhone className="inline mr-1" color="#be123c" size={16} />
                      phone
                    </th>

                    <th scope="col" className="px-6 py-4 capitalize whitespace-nowrap">
                      <AiOutlineFieldNumber className="inline mr-1" color="#be123c" size={16} />
                      number of persons
                    </th>

                    <th scope="col" className="px-6 py-4 capitalize whitespace-nowrap">
                      {role === Roles.admin ? (
                        <div className="flex justify-evenly">
                          <div className="flex">
                            <AiOutlineCheckCircle color="#28a745" size={20} className="my-auto mr-2" />
                            accept
                          </div>
                          <div className="flex">
                            <AiOutlineCloseCircle color="#dc3545" size={20} className="my-auto mr-2" />
                            reject
                          </div>
                        </div>
                      ) : (
                        <>
                          <MdApproval className="inline mr-1" color="#be123c" size={16} />
                          status
                        </>
                      )}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* {bookings?.map((booking, i) => (
                    <tr key={i} className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{booking.id}</td>
                      <td className="whitespace-nowrap px-6 py-4">{booking.registration_date}</td>
                      <td className="whitespace-nowrap px-6 py-4">{booking.registration_time}</td>
                      <td className="whitespace-nowrap px-6 py-4">{booking.name}</td>
                      <td className="whitespace-nowrap px-6 py-4">{booking.phone}</td>
                      <td className="whitespace-nowrap px-6 py-4">{booking.number_of_persons}</td>

                      {role === Roles.admin ? (
                        <td className="px-6 py-4 capitalize whitespace-nowrap">
                          <div className="flex justify-evenly">
                            {booking.status === BookingStatus.accepted ? (
                              <>
                                <button
                                  className="px-2 py-1 bg-green-500 text-white rounded-md"
                                  disabled
                                  onClick={() => null}
                                >
                                  accepted
                                </button>
                                <button
                                  className="px-2 py-1 bg-rose-500 text-white rounded-md"
                                  onClick={() => null}
                                >
                                  rejected
                                </button>
                              </>
                            ) : booking.status === BookingStatus.rejected ? (
                              <>
                                <button
                                  className="px-2 py-1 bg-orange-400 text-white rounded-md"
                                  onClick={() => null}
                                >
                                  undo
                                </button>
                                <button
                                  className="px-2 py-1 bg-red-500 text-white rounded-md"
                                  disabled
                                  onClick={() => null}
                                >
                                  rejected
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  className="px-2 py-1 bg-green-500 text-white rounded-md"
                                  onClick={() => handleConfirmation(booking.id, BookingStatus.accepted)}
                                >
                                  accept
                                </button>
                                <button
                                  className="px-2 py-1 bg-red-500 text-white rounded-md"
                                  onClick={() => handleConfirmation(booking.id, BookingStatus.rejected)}
                                >
                                  reject
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      ) : (
                        <td className="whitespace-nowrap px-6 py-4">
                          {booking.status === BookingStatus.accepted ? (
                            <span className="px-2 py-1 bg-green-400 text-white font-bold rounded-full capitalize">{BookingStatus.accepted}</span>
                          ) : booking.status === BookingStatus.rejected ? (
                            <span className="px-2 py-1 bg-rose-500 text-white font-bold rounded-full capitalize">{BookingStatus.rejected}</span>
                          ) : (
                            <span className="px-2 py-1 bg-blue-400 text-white font-bold rounded-full capitalize">{booking.status}</span>
                          )}
                        </td>
                      )}
                    </tr>
                  ))} */}
                  {bookings?.map((booking) => (
                    <BookingDetails key={booking.id} role={role} booking={booking} />
                  ))}
                </tbody>

                {/* <caption className="caption-bottom py-4 text-2xl font-playfair">
                  you haven't booked yet, <Link to="/book-a-table"> book a table now </Link>
                </caption> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBookingsList