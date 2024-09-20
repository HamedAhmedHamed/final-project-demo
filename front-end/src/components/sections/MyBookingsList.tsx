import { Link } from "react-router-dom"

import { FaRegClock } from "react-icons/fa6";
import { MdOutlineDateRange, MdDriveFileRenameOutline, MdApproval } from "react-icons/md"
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";

const MyBookingsList = () => {
  return (
    <section className="flex flex-col px-5 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">

      <h1 className="mt-20 capitalize font-playfair text-7xl text-start leading-[96px] text-stone-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        my bookings
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
                      <MdApproval className="inline mr-1" color="#be123c" size={16} />
                      status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                    <td className="whitespace-nowrap px-6 py-4">01/03/2025</td>
                    <td className="whitespace-nowrap px-6 py-4">01:50 AM</td>
                    <td className="whitespace-nowrap px-6 py-4">hamed</td>
                    <td className="whitespace-nowrap px-6 py-4">01020446522</td>
                    <td className="whitespace-nowrap px-6 py-4">2</td>

                    <td className="whitespace-nowrap px-6 py-4">
                      {/* <span className="px-2 py-1 bg-green-500 text-white font-bold rounded-full capitalize">accepted</span> */}
                      <span className="px-2 py-1 bg-blue-500 text-white font-bold rounded-full capitalize">pending</span>
                      {/* <span className="px-2 py-1 bg-red-600 text-white font-bold rounded-full capitalize">rejected</span> */}
                    </td>
                  </tr>

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