import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const ContactBar = () => {
  return (
    <div className="flex justify-center items-center px-16 py-2.5 w-full bg-zinc-700 max-md:px-5 max-md:max-w-full">
      <nav className="flex gap-5 justify-between w-full max-w-[1296px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between my-auto text-base leading-6 text-stone-50">
          <div className="flex gap-2">
            <HiOutlinePhone className="mt-auto" size={18}/>
            <p>(414) 857 - 0107</p>
          </div>
          <div className="flex gap-2 whitespace-nowrap">
            <HiOutlineMail className="mt-auto" size={18} />
            <p>yummy@bistrobliss</p>
          </div>
        </div>
        <ul className="flex gap-2">
          <li>
            <a className="flex items-center justify-center w-7 h-7 bg-zinc-600 hover:bg-zinc-500 rounded-full" href="" target="_blank">
              <FaTwitter size={13} className="text-white" />
            </a>
          </li>

          <li>
            <a className="flex items-center justify-center w-7 h-7 bg-zinc-600 hover:bg-zinc-500 rounded-full" href="" target="_blank">
              <FaFacebookF size={13} className="text-white"/>
            </a>
          </li>

          <li>
            <a className="flex items-center justify-center w-7 h-7 bg-zinc-600 hover:bg-zinc-500 rounded-full" href="" target="_blank">
              <FaInstagram size={13} className="text-white"/>
            </a>
          </li>

          <li>
            <a className="flex items-center justify-center w-7 h-7 bg-zinc-600 hover:bg-zinc-500 rounded-full" href="" target="_blank">
              <FaGithub size={13} className="text-white"/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default ContactBar