import { Roles } from "../../types/auth.interface"
// import { ChangeEvent, useState } from "react"
import { FaHashtag } from "react-icons/fa"
import { MdEdit } from "react-icons/md"
import { FaTrashAlt } from "react-icons/fa"
import { type MenuItem } from "../../context/MenuContext"

const MenuItem = ({ role, item }: { role: Roles | Roles[], item: MenuItem }) => {
  return (
    <div className="flex flex-col max-md:ml-0 max-md:w-full">
      {role === Roles.admin ? (
        <form
          encType="multipart"
          className="flex flex-col grow items-center pb-9 w-full font-bold text-center bg-white rounded-xl border-2 border-solid border-stone-300 max-md:mt-6"
        >
          <div className="relative w-full flex justify-center items-center">
            <img
              loading="eager"
              src={String(item.image)}
              className="w-full self-stretch aspect-[1.33]"
            />
            <div className="absolute top-4 right-2 h-20 flex flex-col justify-between">
              <span
                className="flex justify-center cursor-pointer w-8 h-8 bg-rose-700 hover:bg-rose-800 rounded-full"
              >
                <FaTrashAlt size={16} className="my-auto text-white" />
              </span>

              <span
                className="flex justify-center cursor-pointer w-8 h-8 bg-white hover:bg-zinc-200 rounded-full"
              >
                <MdEdit size={20} className="my-auto text-zinc-600" />
              </span>
            </div>

            <div
              className="absolute top-4 left-2 flex justify-center items-center w-8 h-8 bg-zinc-600 hover:bg-zinc-700 rounded-full"
            >
              <FaHashtag className="my-auto text-white" size={12} />
              <span className="text-white">{item.id}</span>
            </div>
          </div>
          <label className="relative w-full flex justify-center items-center">
            <input
              type="text"
              className="mt-8 mx-4 w-full text-2xl text-center tracking-tighter text-rose-700 border border-dashed border-stone-300 rounded-lg"
              disabled
              value={`$ ${item.price}`}
            />
            <span
              className="absolute top-4 right-2 flex flex-center justify-center cursor-pointer w-8 h-8 bg-zinc-600 hover:bg-zinc-500 rounded-full"
            >
              <MdEdit size={20} className="my-auto text-white" />
            </span>
          </label>

          <label className="relative w-full flex justify-center items-center">
            <input
              type="text"
              className="mt-6 mx-4 w-full text-xl text-center leading-7 text-stone-800 border border-dashed border-stone-300 rounded-lg"
              disabled
              value={item.title}
              onChange={() => null}
            />
            <span
              className="absolute top-4 right-2 flex flex-center justify-center cursor-pointer w-8 h-8 bg-zinc-600 hover:bg-zinc-500 rounded-full"
            >
              <MdEdit size={20} className="my-auto text-white" />
            </span>
          </label>

          <label className="relative w-full flex justify-center items-center">
            <textarea
              className="mt-10 mx-4 p-2 rounded-lg w-full text-base leading-6 text-stone-700 border border-dashed border-stone-300"
              rows={3}
              disabled
              value={item.description}
              onChange={() => null}
            ></textarea>

            <span
              className="absolute top-4 right-2 flex flex-center justify-center cursor-pointer w-8 h-8 bg-zinc-600 hover:bg-zinc-500 rounded-full"
            >
              <MdEdit size={20} className="my-auto text-white" />
            </span>
          </label>

          <button
            type="submit"
            disabled
            className='mt-3 px-1 py-2 w-11/12 text-center text-white text-lg bg-rose-600 rounded-lg opacity-70'
          >
            confirm
          </button>
        </form>
      ) : (
        <div className="flex flex-col grow items-center pb-9 w-full font-bold text-center bg-white rounded-xl border-2 border-solid border-stone-300 max-md:mt-6">
          <img
            loading="eager"
            src={String(item.image)}
            className="self-stretch w-full aspect-[1.33]"
          />
          <p className="mt-8 text-2xl tracking-tighter text-rose-700">
            {`$ ${item.price}`}
          </p>
          <h3 className="mt-4 text-xl leading-7 text-stone-800 capitalize">
            {item.title}
          </h3>
          <p className="mt-4 text-base leading-6 text-stone-700 w-[246px]">
            {item.description}
          </p>
        </div >
      )}
    </div>
  )
}

export default MenuItem