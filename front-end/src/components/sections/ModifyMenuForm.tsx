import { ChangeEvent, useState } from "react"
import { IoIosAddCircleOutline } from "react-icons/io"
// import useAuthContext from "../../context/AuthContext"
import { TbFileDescription } from "react-icons/tb";
import { MdOutlineTitle } from "react-icons/md";
import { IoPricetag } from "react-icons/io5";
import { MdCategory } from "react-icons/md";

enum Categories {
  all = "all",
  breakfast = "breakfast",
  mainDishes = "main-dishes",
  drinks = "drinks",
  desserts = "desserts"
}

interface MenuItem {
  id: number
  image: File["name"];
  title: string;
  description: string;
  price: number;
  category: Categories;
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
    category: Categories.all,
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
          <label htmlFor="title" className="capitalize font-bold flex">
            <MdOutlineTitle color="#e11d48" className="my-auto mr-2" size={20} />
            title
          </label>
          <input
            type="text" id="title"
            className='px-2 py-3 mt-2 text-start text-lg w-full border border-solid border-stone-300 rounded-lg'
          />
        </div>

        <div className="flex flex-col mt-4 mx-4 overflow-scroll">
          <label htmlFor="" className="capitalize font-bold flex">
            <TbFileDescription color="#e11d48" className="my-auto mr-2" size={20} />
            description
          </label>
          <textarea className="w-full mt-2 p-3 bg-gray-100 rounded-lg" rows={5}></textarea>
        </div>
      </div>

      <div className="flex flex-col justify-between shadow-lg rounded-md m-7 h-80">
        <div className="flex flex-col mt-2 mx-4">
          <label htmlFor="" className="capitalize font-bold flex">
            <IoPricetag color="#e11d48" className="my-auto mr-2" size={18} />
            price
          </label>
          <input
            type="text"
            className='px-2 py-3 mt-2 w-full text-start text-lg border border-solid border-stone-300 rounded-lg'
          />
        </div>

        <div className="flex flex-col mt-2 mx-4">
          <label htmlFor="" className="capitalize font-bold flex">
            <MdCategory color="#e11d48" className="my-auto mr-2" size={18} />
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
  )

}

export default ModifyMenuForm