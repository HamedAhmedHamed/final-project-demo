import Skeleton from "../../ui/Skeleton"

const SuspensedHero = () => {
  return (
    <>
      <div className="relative flex overflow-hidden flex-col justify-center items-center px-16 py-20 w-full min-h-[802px] max-sm:px-2 max-sm:py-0 max-md:px-5 max-md:max-w-full">
        <Skeleton
          className="bg-amber-100 w-full h-full absolute z-0"
        />
        <div className="z-10 flex flex-col mt-32 mb-20 max-w-full w-[667px] max-sm:my-0 max-md:my-10">
          <div className="flex items-center flex-col max-md:max-w-full">

            <Skeleton
              className="bg-stone-500 w-[615px] h-8"
            /> 
            <Skeleton
              className="bg-stone-500 w-[480px] h-8 mt-2"
            />

            <Skeleton
              className="mt-8 bg-stone-500 w-[540px] h-16"
            />

          </div>

          <div className="flex gap-4 self-center mt-10 text-base font-bold leading-6 text-right">

            <Skeleton
              className="w-44 h-20 bg-rose-700 rounded-[118px] max-md:px-5"
            />

            <Skeleton
              className="w-44 h-20 bg-stone-400 rounded-[118px] max-md:px-5"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SuspensedHero