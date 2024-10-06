import Skeleton from "../ui/Skeleton"

const SuspensedFooter = () => {
  return (
    <div className="flex flex-col mt-10 mb-1.5 max-w-screen-xl">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:mt-10">
            <div className="flex gap-3.5 text-4xl font-semibold tracking-tight leading-7 text-white">
              <Skeleton
                className="w-14 h-14 bg-white rounded-full"
              />
              <Skeleton
                className="w-28 h-6 bg-gray-500 rounded-2xl justify-center my-auto"
              />
            </div>

            <Skeleton
              className="mt-8 w-96 h-12 bg-gray-500 rounded-2xl"
            />

            <ul className="flex gap-3 pr-20 mt-8 max-md:pr-5">
              <li>
                <Skeleton
                  className="w-8 h-8 bg-rose-400 rounded-full"
                />
              </li>
              <li>
                <Skeleton
                  className="w-8 h-8 bg-rose-400 rounded-full"
                />
              </li>
              <li>
                <Skeleton
                  className="w-8 h-8 bg-rose-400 rounded-full"
                />
              </li>
              <li>
                <Skeleton
                  className="w-8 h-8 bg-rose-400 rounded-full"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-5 justify-center text-base leading-6 max-md:mt-10 max-md:justify-between">
            <nav className="flex flex-col whitespace-nowrap">
              <Skeleton
                className="w-32 h-7 bg-gray-400 rounded-full"
              />

              <ul className="flex flex-col items-center mt-8">
                <li>
                  <Skeleton
                    className="w-24 h-7 bg-gray-400 rounded-full"
                  />
                </li>
                <li>
                  <Skeleton
                    className="mt-5 w-24 h-7 bg-gray-400 rounded-full"
                  />
                </li>
                <li>
                  <Skeleton
                    className="mt-5 w-24 h-7 bg-gray-400 rounded-full"
                  />
                </li>
                <li>
                  <Skeleton
                    className="mt-5 w-24 h-7 bg-gray-400 rounded-full"
                  />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10">
            {/* <div className="text-base capitalize font-bold leading-6 text-white">
              follow us on instagram
            </div> */}
            <Skeleton
              className="w-28 h-6 bg-gray-500 rounded-2xl"
            />
            <div className="mt-10">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <Skeleton
                    className="w-44 h-44 bg-amber-200 rounded-xl"
                  />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <Skeleton
                    className="w-44 h-44 bg-amber-200 rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <Skeleton
                    className="w-44 h-44 bg-amber-200 rounded-xl"
                  />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <Skeleton
                    className="w-44 h-44 bg-amber-200 rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="shrink-0 mt-24 h-px border border-solid bg-stone-700 border-stone-700 max-md:mt-10" />
      <div className="self-center mt-9 text-base leading-6 text-stone-400 max-md:max-w-full">
        <Skeleton
          className="w-96 h-6 bg-gray-400"
        />
      </div>
    </div>
  )
}

export default SuspensedFooter