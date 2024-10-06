import Skeleton from "../../ui/Skeleton"

const SuspensedContactbar = () => {
  return (
  <section className="flex justify-center items-center px-16 py-2.5 w-full bg-zinc-700 max-md:px-5 max-md:max-w-full">
      <nav className="flex gap-5 justify-between w-full max-w-screen-xl max-sm:flex-col max-md:max-w-full ">

        <ul className="flex gap-5 justify-between my-auto text-base leading-6 text-stone-50 max-sm:justify-evenly">
          <li className="flex gap-2">
            <Skeleton
              className="w-4 h-4 bg-white my-auto"
            />
            <Skeleton
              className="w-28 h-6 bg-gray-500 rounded-2xl"
            />
          </li>

          <li className="flex gap-2 whitespace-nowrap">
            <Skeleton
              className="w-4 h-4 bg-white my-auto"
            />
            <Skeleton
              className="w-28 h-6 bg-gray-500 rounded-2xl"
            />
          </li>
        </ul>

        <ul className="flex gap-2 max-sm:justify-evenly">
          <li>
            <Skeleton
              className="w-7 h-7 bg-gray-400 rounded-full"
            />
          </li>
          <li>
            <Skeleton
              className="w-7 h-7 bg-gray-400 rounded-full"
            />
          </li>
          <li>
            <Skeleton
              className="w-7 h-7 bg-gray-400 rounded-full"
            />
          </li>
          <li>
            <Skeleton
              className="w-7 h-7 bg-gray-400 rounded-full"
            />
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default SuspensedContactbar