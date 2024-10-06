import { useEffect } from "react";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineDateRange, MdDriveFileRenameOutline, MdApproval } from "react-icons/md"
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaHashtag } from "react-icons/fa";

import BookingDetails from "./BookingDetails";
import { Roles } from "../../../types/auth.interface";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import useBooking from "../../../contexts/BookingContext";
import { BeatLoader } from "react-spinners";

const MyBookingsList = ({ role = Roles.user }: { role: Roles }) => {
  const { fetchBookings, bookings, isGlobalLoading } = useBooking()

  useEffect(() => {
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

                  {bookings.map((booking) => (
                    <BookingDetails key={booking.id} role={role} booking={booking} />
                  ))}
                </tbody>

                {isGlobalLoading ? (
                  <caption className="caption-bottom">
                    <div>
                      <BeatLoader />
                    </div>
                  </caption>
                ) : !bookings.length && (
                  <caption className="caption-bottom py-4 text-2xl font-playfair">
                    you haven't booked yet, <Link to="/book-a-table"> book a table now </Link>
                  </caption>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default MyBookingsList