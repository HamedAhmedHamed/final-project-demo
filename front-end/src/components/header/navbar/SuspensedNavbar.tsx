import Skeleton from "../../ui/Skeleton"

const SuspensedNavbar = () => {
  return (
    <nav className="flex gap-5 justify-between items-center self-center px-5 my-7 w-full text-base leading-6 max-w-screen-xl max-sm:flex-col max-md:max-w-full">

      <span className="flex justify-center items-center gap-1">
        <Skeleton
          className="w-14 h-14 rounded-full bg-rose-400"
        />
        <Skeleton
          className="w-40 h-6 bg-stone-500 rounded-2xl"
        />
      </span>

      <ul className="flex gap-2 self-stretch my-auto font-medium whitespace-nowrap text-stone-800 max-sm:justify-evenly">
        <Skeleton
          className="w-16 h-7 bg-stone-200 rounded-[34px]"
        />
        <Skeleton
          className="w-16 h-7 bg-stone-200 rounded-[34px]"
        />
        <Skeleton
          className="w-16 h-7 bg-stone-200 rounded-[34px]"
        />
        <Skeleton
          className="w-16 h-7 bg-stone-200 rounded-[34px]"
        />
      </ul>

      <Skeleton
        className="w-20 h-12 border-2 border-solid border-rose-700 rounded-full max-md:px-5 max-sm:justify-end"
      />
    </nav>
  )
}

export default SuspensedNavbar