import { ChangeEvent, type FormEvent, MouseEventHandler, type MutableRefObject, useEffect, useRef, useState } from "react"
import { Roles } from "../../types/auth.interface"
import { FaHashtag } from "react-icons/fa"
import { MdEdit } from "react-icons/md"
import { FaTrashAlt } from "react-icons/fa"
import { IoIosUndo } from "react-icons/io"
import { useMenu, type MenuItem } from "../../context/MenuContext"

const MenuItem = ({ role, item }: { role: Roles | Roles[], item: MenuItem }) => {
  const { isLoading, updateMenuItem } = useMenu()
  const [menuItem, setMenuItem] = useState<MenuItem>(item)
  const [canSubmit, setCanSubmit] = useState<boolean>(false)

  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const priceRef = useRef<HTMLInputElement | null>(null)
  const titleRef = useRef<HTMLInputElement | null>(null)
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null)
  const submitRef = useRef<HTMLButtonElement | null>(null)

  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (!file)
      return
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewUrl(() => reader.result?.toString())
    }
    reader.readAsDataURL(file)
    // setMenuItem((item) => ({ ...item, image: file ?? item.image }))
  }, [file])

  const handleFileInput = (inputRef: MutableRefObject<HTMLInputElement | null>) => {
    // trigger input
    if (!file && inputRef.current) {
      inputRef.current.click()
    } else {
      // undo
      setFile(() => null)
      setPreviewUrl(() => undefined)
      setCanSubmit(() => false)
    }
    inputRef.current?.blur()
  }
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files instanceof FileList) {
      setFile(e.target.files[0])
      setCanSubmit(() => true)
    }
  }

  const handleInputChange = (inputRef: MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null>) => {
    if (inputRef.current) {
      inputRef.current.disabled = false
      inputRef.current.focus()
      setCanSubmit(() => true)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setMenuItem((item) => ({ ...item, image: file ?? item.image }))
    updateMenuItem(menuItem)
  }

  return (
    <div className="flex flex-col max-md:ml-0 max-md:w-full">
      {role === Roles.admin ? (
        <form
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="flex flex-col grow items-center pb-9 w-full font-bold text-center bg-white rounded-xl border-2 border-solid border-stone-300 max-md:mt-6"
        >
          <div className="relative w-full flex justify-center items-center">
            <img
              loading="eager"
              src={previewUrl ?? String(menuItem.image)}
              className="w-full self-stretch aspect-[1.33]"
            />


            <div className="absolute top-4 right-2 h-20 flex flex-col justify-between">
              <button
                type="button"
                disabled={isLoading}
                className="flex justify-center w-8 h-8 bg-rose-700 hover:bg-rose-800 rounded-full"
              >
                <FaTrashAlt size={16} className="my-auto text-white" />
              </button>

              <button
                type="button"
                disabled={isLoading}
                onClick={() => handleFileInput(fileInputRef)}
                className="flex justify-center w-8 h-8 bg-white hover:bg-zinc-200 rounded-full"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  className="text-xs z-20 hidden"
                  accept="image/*"
                  onChange={handleFileUpload}
                  onBlur={() => {
                    fileInputRef.current ? fileInputRef.current.disabled = true : null
                    setCanSubmit(() => true)
                  }}
                />
                {file ? (
                  <IoIosUndo size={16} className="my-auto text-zinc-600" />
                ) : (
                  <MdEdit size={20} className="my-auto text-zinc-600" />
                )}
              </button>
            </div>

            <div
              className="absolute top-4 left-2 flex justify-center items-center w-8 h-8 bg-zinc-600 hover:bg-zinc-700 rounded-full"
            >
              <FaHashtag className="my-auto text-white" size={12} />
              <span className="text-white">{menuItem.id}</span>
            </div>
          </div>

          <label htmlFor="menu-item-price" className="relative w-full flex justify-center items-center">
            <input
              type="number"
              min={1}
              ref={priceRef}
              id="menu-item-price"
              className="mt-8 mx-4 w-full text-2xl text-center tracking-tighter text-rose-700 border border-dashed border-stone-300 rounded-lg"
              disabled
              value={menuItem.price}
              onChange={(e) => setMenuItem(() => ({ ...menuItem, price: e.target.value }))}
              onBlur={() => {
                priceRef.current ? priceRef.current.disabled = true : null
                setCanSubmit(() => true)
              }}
            />
            <button
              type="button"
              disabled={isLoading}
              onClick={() => handleInputChange(priceRef)}
              className="absolute top-4 right-2 flex flex-center justify-center w-8 h-8 bg-zinc-600 hover:bg-zinc-500 rounded-full"
            >
              <MdEdit size={20} className="my-auto text-white" />
            </button>
          </label>

          <label htmlFor="menu-item-title" className="relative w-full flex justify-center items-center">
            <input
              type="text"
              ref={titleRef}
              className="mt-6 mx-4 w-full text-xl text-center leading-7 text-stone-800 border border-dashed border-stone-300 rounded-lg"
              id="menu-item-title"
              disabled
              value={menuItem.title}
              onChange={(e) => setMenuItem(() => ({ ...menuItem, title: e.target.value }))}
              onBlur={() => titleRef.current ? titleRef.current.disabled = true : null}
            />
            <button
              type="button"
              disabled={isLoading}
              onClick={() => handleInputChange(titleRef)}
              className="absolute top-4 right-2 flex flex-center justify-center w-8 h-8 bg-zinc-600 hover:bg-zinc-500 rounded-full"
            >
              <MdEdit size={20} className="my-auto text-white" />
            </button>
          </label>

          <label htmlFor="menu-item-description" className="relative w-full flex justify-center items-center">
            <textarea
              className="mt-10 mx-4 p-2 rounded-lg w-full text-base leading-6 text-stone-700 border border-dashed border-stone-300"
              id="menu-item-description"
              ref={descriptionRef}
              rows={3}
              disabled
              value={menuItem.description}
              // onChange={(e) => setMenuItem(({ ...menuItem, description: e.target.value }))}
              onChange={(e) => setMenuItem(() => ({ ...menuItem, description: e.target.value }))}
              onBlur={() => descriptionRef.current ? descriptionRef.current.disabled = true : null}
            />

            <button
              type="button"
              disabled={isLoading}
              onClick={() => handleInputChange(descriptionRef)}
              className="absolute top-4 right-2 flex flex-center justify-center w-8 h-8 bg-zinc-600 hover:bg-zinc-500 rounded-full"
            >
              <MdEdit size={20} className="my-auto text-white" />
            </button>
          </label>

          <button
            type="submit"
            // disabled={isLoading}
            ref={submitRef}
            disabled={!canSubmit || isLoading}
            className={`mt-3 px-1 py-2 w-11/12 text-center text-white text-lg bg-rose-600 rounded-lg ${canSubmit ? null : "opacity-70"}`}
          >
            confirm
          </button>
        </form>
      ) : (
        <div className="flex flex-col grow items-center pb-9 w-full font-bold text-center bg-white rounded-xl border-2 border-solid border-stone-300 max-md:mt-6">
          <img
            loading="eager"
            src={String(menuItem.image)}
            className="self-stretch w-full aspect-[1.33]"
          />
          <p className="mt-8 text-2xl tracking-tighter text-rose-700">
            {`$ ${item.price}`}
          </p>
          <h3 className="mt-4 text-xl leading-7 text-stone-800 capitalize">
            {menuItem.title}
          </h3>
          <p className="mt-4 text-base leading-6 text-stone-700 w-[246px]">
            {menuItem.description}
          </p>
        </div >
      )}
    </div>
  )
}

export default MenuItem