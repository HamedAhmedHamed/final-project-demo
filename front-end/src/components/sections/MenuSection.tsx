import { useState } from "react"
import { Roles } from "../../types/auth.interface"
import MenuItem from "./MenuItem"
import ModifyMenuForm from "./ModifyMenuForm"

const MenuSection = ({ role = Roles.user }: { role: Roles }) => {
  const [activeId, setActiveId] = useState(0)

  const buttons = [
    "all",
    'breakfast',
    'main dishes',
    'drinks',
    'desserts'
  ]

  const handleFetch = (id: number) => {
    setActiveId(() => id)
  }

  return (
    <section className="flex flex-col justify-center bg-white">
      <div className="flex flex-col items-center px-5 pb-20 w-full bg-white max-md:max-w-full">
        <h1 className="font-playfair capitalize mt-20 text-8xl text-center leading-[96px] text-stone-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          {role === Roles.admin
            ? "modify menu"
            : "our menu"}
        </h1>

        {role === Roles.user ? (
          <p className="mt-5 text-lg leading-7 text-center text-gray-600 w-[557px] max-md:max-w-full">
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        ) : null}

        <ul className="flex gap-4 mt-12 text-base font-bold leading-6 text-center text-stone-800 max-md:flex-wrap max-md:mt-10">

          {buttons.map((label, i) => (
            <li key={i}>
              <button
                type='button'
                onClick={() => handleFetch(i)}
                className={
                  i === activeId
                    ? "capitalize px-8 py-3 text-white bg-rose-700 rounded-[50px] max-md:px-5"
                    : "capitalize px-7 py-3 border border-solid border-stone-300 rounded-[50px] max-md:px-5"
                }
              >
                {label}
              </button>
            </li>
          ))}

        </ul>

        {role === Roles.admin ? (
          <ModifyMenuForm />
        ) : null}

        <div className="mt-24 mb-7 w-full max-w-[1296px] max-md:mt-10 max-md:max-w-full">
          <div className="grid grid-cols-4 gap-x-5 gap-y-7 max-md:grid-cols-3 max-sm:grid-cols-1">
            <MenuItem role={role} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuSection