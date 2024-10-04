import { ChangeEvent, FormEvent, useEffect, useState } from "react"
// import { IoIosAddCircleOutline } from "react-icons/io"
import { MdFileUpload } from "react-icons/md";
// import useAuthContext from "../../context/AuthContext"
import { TbFileDescription } from "react-icons/tb";
import { MdOutlineTitle } from "react-icons/md";
import { IoPricetag } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { IoIosUndo } from "react-icons/io"
import useAuthContext from "../../context/AuthContext";
import api from "../../api/api";
import { type MenuItem, Categories } from "../../context/MenuContext";

const ModifyMenuForm = () => {
  const { csrf, getAccessToken } = useAuthContext()

  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined)
  const [menuItem, setMenuItem] = useState<MenuItem>({
    id: NaN,
    image: null,
    title: "",
    description: "",
    price: "",
    category: Categories.all,
    created_at: "",
    updated_at: ""
  })

  useEffect(() => {
    if (!file) {
      return
    }
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewUrl(() => reader.result?.toString())
    }
    reader.readAsDataURL(file)
    setMenuItem({ ...menuItem, image: file })
  }, [file])

  const handleFilePreview = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files instanceof FileList) {
      setFile(e.target.files[0])
    }
  }

  const handleRemoveImage = () => {
    setFile(() => null)
    setPreviewUrl(() => undefined)
    setMenuItem(() => ({ ...menuItem, image: file }))
  }

  const handleMenuItem = async (e: FormEvent) => {
    e.preventDefault()
    await csrf()
    try {
      const { data } = await api.post<MenuItem>("/api/menu/store", {
        image: menuItem.image,
        title: menuItem.title,
        description: menuItem.description,
        price: menuItem.price,
        category: menuItem.category
      }, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getAccessToken()}`
        }
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      onSubmit={handleMenuItem}
      encType='multipart/form-data'
      className="mt-20 mb-7 shadow-lg rounded-md grid grid-cols-3 max-sm:grid-cols-1 w-full max-w-[1296px] max-md:mt-10 max-md:max-w-full"
    >
      <div className="shadow-lg shadow-rose-200 m-7 h-80 rounded-md flex flex-col justify-center items-start">
        <label
          id="image"
          className="h-[230px] w-[305px] rounded-lg m-3 cursor-pointer bg-gray-200 flex items-center justify-center"
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              className="rounded-lg"
              alt=""
            />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <MdFileUpload size={110} />
              <p className="text-balance text-center text-sm font-semibold">click here to upload an image</p>
            </div>
          )}

          <input
            type="file"
            className="text-xs z-20 hidden"
            accept="image/*"
            id="image"
            onChange={handleFilePreview}
          />
        </label>

        {previewUrl ? (
          <button
            type="button"
            className="ml-3 flex justify-between items-center gap-3 rounded-lg bg-rose-600 text-white px-2 py-1"
            onClick={handleRemoveImage}
          >
            <IoIosUndo color="white" />
            remove image
          </button>
        ) : null}
      </div>

      <div className="flex flex-col justify-between shadow-lg shadow-rose-200 rounded-md m-7 h-80">
        <div className="flex flex-col mt-2 mx-4">
          <label htmlFor="title" className="capitalize font-bold flex">
            <MdOutlineTitle color="#e11d48" className="my-auto mr-2" size={20} />
            title
          </label>
          <input
            type="text" id="title"
            value={menuItem.title}
            onChange={(e) => setMenuItem(() => ({ ...menuItem, title: e.target.value }))}
            className='px-2 py-3 mt-2 text-start text-lg w-full border border-solid border-stone-300 rounded-lg'
          />
        </div>

        <div className="flex flex-col mt-4 mx-4 overflow-scroll">
          <label htmlFor="" className="capitalize font-bold flex">
            <TbFileDescription color="#e11d48" className="my-auto mr-2" size={20} />
            description
          </label>
          <textarea
            className="w-full mt-2 p-3 bg-gray-100 rounded-lg"
            rows={5}
            value={menuItem.description}
            onChange={(e) => setMenuItem(() => ({ ...menuItem, description: e.target.value }))}
          ></textarea>
        </div>
      </div>

      <div className="flex flex-col justify-between shadow-lg shadow-rose-200 rounded-md m-7 h-80">
        <div className="flex flex-col mt-2 mx-4">
          <label htmlFor="" className="capitalize font-bold flex">
            <IoPricetag color="#e11d48" className="my-auto mr-2" size={18} />
            price
          </label>
          <input
            type="number"
            value={menuItem.price}
            onChange={(e) => setMenuItem(() => ({ ...menuItem, price: e.target.value }))}
            className='px-2 py-3 mt-2 w-full text-start text-lg border border-solid border-stone-300 rounded-lg'
          />
        </div>

        <div className="flex flex-col mt-2 mx-4">
          <label htmlFor="" className="capitalize font-bold flex">
            <MdCategory color="#e11d48" className="my-auto mr-2" size={18} />
            category
          </label>
          <select
            value={menuItem.category}
            onChange={(e) => setMenuItem(() => ({ ...menuItem, category: e.target.value as Categories }))}
            className='px-2 py-3 mt-2 w-full text-start text-lg border border-solid border-stone-300 rounded-lg'
          >
            {Object.values(Categories).map((cat, i) => (
              <option
                key={i}
                value={cat}
              >{cat.replace('-', ' ')}</option>
            ))}
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