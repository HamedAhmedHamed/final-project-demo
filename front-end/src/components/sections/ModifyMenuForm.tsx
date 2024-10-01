import { ChangeEvent, useState } from "react"
import eggs from "/menu-items/fried-eggs.webp"
import { IoIosAddCircleOutline } from "react-icons/io"
import { MdEdit } from "react-icons/md"
// import useAuthContext from "../../context/AuthContext"

enum Category {
  all = "all",
  breakfast = "breakfast",
  mainDishes = "main-dishes",
  desserts = "desserts"
}

interface MenuItem {
  id: number
  image: File["name"];
  title: string;
  description: string;
  price: number;
  category: Category.all | Category.breakfast | Category.mainDishes | Category.desserts;
  created_at: string;
  updated_at: string;
}

const ModifyMenuForm = () => {
  // const { csrf, getAccessToken } = useAuthContext()
  const buttons = [
    "all",
    'breakfast',
    'main dishes',
    'drinks',
    'desserts'
  ]
  const [activeId, setActiveId] = useState(0)

  const [menuItem, setMenuItem] = useState<MenuItem>({
    id: NaN,
    image: "",
    title: "",
    description: "",
    price: 0,
    category: Category.all,
    created_at: "",
    updated_at: ""
  })

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMenuItem({ ...menuItem, image: e.target.files[0]?.name })
    }
    console.log(menuItem)
  }

  return (
    <section className="flex flex-col justify-center bg-white">
      <div className="flex flex-col items-center px-5 pb-20 w-full bg-white max-md:max-w-full">
        <h1 className="font-playfair capitalize mt-20 text-8xl text-center leading-[96px] text-stone-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          modify menu
        </h1>

        <ul className="flex gap-4 mt-12 text-base font-bold leading-6 text-center text-stone-800 max-md:flex-wrap max-md:mt-10">

          {buttons.map((label, i) => (
            <li key={i}>
              <button
                type='button'
                onClick={() => setActiveId(() => i)}
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

        <form
          encType='multipart/form-data'
          className="mt-20 mb-7 shadow-lg rounded-md grid grid-cols-3 max-sm:grid-cols-1 w-full max-w-[1296px] max-md:mt-10 max-md:max-w-full"
        >
          <div className="shadow-lg m-7 h-80 rounded-md">
            <label
              id="image"
              className="h-[230px] w-[305px] m-3 rounded-md cursor-pointer bg-gray-200 flex items-center justify-center"
            >
              <IoIosAddCircleOutline size={130} />
              <input
                type="file"
                className="text-xs hidden"
                id="image"
                onChange={handleFile}
              />
            </label>
            <h3 className="ml-3 text-lg font-bold py-5 text-rose-700">{menuItem.image}</h3>
          </div>

          <div className="flex flex-col justify-between shadow-lg rounded-md m-7 h-80">
            <div className="flex flex-col mt-2 mx-4">
              <label htmlFor="title" className="capitalize font-bold ">
                title
              </label>
              <input
                type="text" id="title"
                className='px-2 py-3 mt-2 text-start text-lg w-full border border-solid border-stone-300 rounded-lg'
              />
            </div>

            <div className="flex flex-col mt-4 mx-4 overflow-scroll">
              <label htmlFor="" className="capitalize font-bold">
                description
              </label>
              <textarea className="w-full mt-2 p-3 bg-gray-100 rounded-lg" rows={5}></textarea>
            </div>
          </div>

          <div className="flex flex-col justify-between shadow-lg rounded-md m-7 h-80">
            <div className="flex flex-col mt-2 mx-4">
              <label htmlFor="" className="capitalize font-bold">
                price
              </label>
              <input
                type="text"
                className='px-2 py-3 mt-2 w-full text-start text-lg border border-solid border-stone-300 rounded-lg'
              />
            </div>

            <div className="flex flex-col mt-2 mx-4">
              <label htmlFor="" className="capitalize font-bold">
                category
              </label>
              <select
                className='px-2 py-3 mt-2 w-full text-start text-lg border border-solid border-stone-300 rounded-lg'
              >
                <option value="all">all</option>
                <option value="breakfast">breakfast</option>
                <option value="main-dishes">main dishes</option>
                <option value="desserts">desserts</option>
              </select>
            </div>

            <div className="mb-3 flex justify-center items-center">
              <button
                type="submit"
                className='px-2 py-3 w-11/12 text-center text-white text-3xl bg-rose-600 rounded-lg'
              >
                submit
              </button>
            </div>
          </div>
        </form>

        <div className="mt-12 mb-7 w-full max-w-[1296px] max-md:mt-10 max-md:max-w-full">
          <div className="grid grid-cols-4 gap-x-5 gap-y-7 max-md:grid-cols-3 max-sm:grid-cols-1">

            <div className="flex flex-col max-md:ml-0 max-md:w-full">
              <form className="flex flex-col grow items-center pb-9 w-full font-bold text-center bg-white rounded-xl border-2 border-solid border-stone-300 max-md:mt-6">
                <div>
                  <img
                    loading="eager"
                    src={eggs}
                    className="self-stretch w-full aspect-[1.33]"
                  />
                  <MdEdit />
                </div>
                <label className="flex relative justify-center items-center">
                  <input
                    type="text"
                    className="mt-8 text-2xl text-center tracking-tighter text-rose-700"
                    disabled
                    value={"$ 9.99"}
                  />
                  <span
                    className="absolute flex flex-center justify-center w-7 h-7 bg-zinc-600 hover:bg-zinc-500 rounded-full"
                  >
                    <MdEdit className="text-white" />
                  </span>
                </label>

                <label >
                  <input
                    type="text"
                    className="mt-4 text-xl leading-7 text-stone-800"
                    disabled
                    value={"Fried Eggs"}
                    onChange={() => null}
                  />
                  <MdEdit />
                </label>
                <label >
                  <input
                    type="text"
                    className="mt-4 text-base leading-6 text-stone-700 w-[246px]"
                    disabled
                    value={"Made with eggs, lettuce, salt, oil and other ingredients."}
                    onChange={() => null}
                  />
                  <MdEdit />
                </label>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  )

}

export default ModifyMenuForm