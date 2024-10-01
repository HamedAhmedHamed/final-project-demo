import { Roles } from "../../types/auth.interface"
// import { ChangeEvent, useState } from "react"
import eggs from "/menu-items/fried-eggs.webp"
import { MdEdit } from "react-icons/md"

const MenuItem = ({ role }: { role: Roles }) => {
  return (
    <div className="flex flex-col max-md:ml-0 max-md:w-full">
      {role === Roles.admin ? (
        <form className="flex flex-col grow items-center pb-9 w-full font-bold text-center bg-white rounded-xl border-2 border-solid border-stone-300 max-md:mt-6">
          <div className="relative w-full flex justify-center items-center">
            <img
              loading="eager"
              src={eggs}
              className="w-full self-stretch aspect-[1.33]"
            />
            <span
              className="absolute top-4 right-2 flex flex-center justify-center cursor-pointer w-8 h-8 bg-white hover:bg-zinc-200 rounded-full"
            >
              <MdEdit size={20} className="my-auto text-zinc-600" />
            </span>
          </div>
          <label className="relative w-full flex justify-center items-center">
            <input
              type="text"
              className="mt-8 mx-4 w-full text-2xl text-center tracking-tighter text-rose-700 border border-dashed border-stone-300 rounded-lg"
              disabled
              value={"$ 9.99"}
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
              value={"Fried Eggs"}
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
              value={"Made with eggs, lettuce, salt, oil and other ingredients."}
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
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd"
            className="self-stretch w-full aspect-[1.33]"
          />
          <p className="mt-8 text-2xl tracking-tighter text-rose-700">
            $ 9.99
          </p>
          <h3 className="mt-4 text-xl leading-7 text-stone-800">
            Fried Eggs
          </h3>
          <p className="mt-4 text-base leading-6 text-stone-700 w-[246px]">
            Made with eggs, lettuce, salt, oil and other ingredients.
          </p>
        </div >
      )}
    </div>
  )
}

export default MenuItem