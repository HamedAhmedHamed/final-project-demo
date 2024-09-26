import { FaRegClock } from "react-icons/fa6";
import { MdOutlineDateRange, MdDriveFileRenameOutline, MdApproval } from "react-icons/md"
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";

import api from "../../api/api";
import useAuthContext from "../../context/AuthContext";
import { BookingStatus } from "./BookingForm";
import { Roles } from "../../context/AuthContext";
import { useEffect, useState } from "react";

import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";

interface ResponseBooking {
  created_at: string;
  id: number;
  name: string;
  number_of_persons: number;
  phone: number;
  registration_date: number;
  registration_time: number;
  status: BookingStatus.accepted | BookingStatus.pending | BookingStatus.rejected
  updated_at: string;
}


const MyBookingsList = ({ role }: { role?: Roles }) => {
  const [bookings, setBookings] = useState<ResponseBooking[] | null>(null);
  const { csrf } = useAuthContext()
  const token = sessionStorage.getItem("access-token");

  useEffect(() => {
    const fetchBookings = async () => {
      await csrf()
      try {
        const { data } = await api.get<ResponseBooking[]>("/api/get-bookings", {
          headers: {
            Authorization: `Bearer ${token}`
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

  const handleConfirmation = async (id: number, action: BookingStatus) => {
    const token = sessionStorage.getItem("access-token")
    try {
      await csrf()
      const { data } = await api.get(`/${action}/-booking/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {

    }
  }

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
                  {bookings?.map((booking, i) => (
                    <tr key={i} className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">{booking.id}</td>
                      <td className="whitespace-nowrap px-6 py-4">{booking.registration_date}</td>
                      <td className="whitespace-nowrap px-6 py-4">{booking.registration_time}</td>
                      <td className="whitespace-nowrap px-6 py-4">{booking.name}</td>
                      <td className="whitespace-nowrap px-6 py-4">{booking.phone}</td>
                      <td className="whitespace-nowrap px-6 py-4">{booking.number_of_persons}</td>

                      {/* <span className="px-2 py-1 bg-green-500 text-white font-bold rounded-full capitalize">accepted</span> */}
                      {/* <span className="px-2 py-1 bg-red-600 text-white font-bold rounded-full capitalize">rejected</span> */}
                      {role === Roles.admin ? (
                        <td className="px-6 py-4 capitalize whitespace-nowrap">
                          <div className="flex justify-evenly">
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
                          </div>
                        </td>
                      ) : (
                        <td className="whitespace-nowrap px-6 py-4">
                          <span className="px-2 py-1 bg-blue-500 text-white font-bold rounded-full capitalize">{booking.status}</span>
                        </td>
                      )}
                    </tr>
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