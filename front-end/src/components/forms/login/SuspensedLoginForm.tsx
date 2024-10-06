import Skeleton from "../../ui/Skeleton"

const SuspensedLoginForm = () => {
  return (
    <main>
      <section className="flex z-10 flex-col items-center px-5 w-full bg-stone-50 max-md:max-w-full">

        <Skeleton
          className="mt-20 w-64 h-8 bg-rose-400 rounded-2xl max-md:mt-10 max-md:max-w-full"
        />
        <Skeleton
          className="mt-2 w-48 h-8 bg-rose-400 rounded-2xl max-md:mt-10 max-md:max-w-full"
        />

        <div
          className="flex z-10 flex-col gap-5 text-stone-800 px-12 py-12 mt-20 -mb-60 max-w-full text-base leading-6 bg-white rounded-2xl border border-white border-solid shadow-2xl w-[812px] max-md:px-5 max-md:mt-10 max-md:mb-2.5"
        >

          <div className="flex flex-col w-full max-md:w-full">
            <Skeleton
              className="w-24 h-5 rounded-2xl bg-gray-200"
            />
            <Skeleton
              className='w-[715px] h-[70px] mt-2 border border-solid bg-gray-200 border-stone-300 rounded-[72px]'
            />
          </div>

          <div className="flex flex-col w-full max-md:w-full">
            <Skeleton
              className="w-24 h-5 rounded-2xl bg-gray-200"
            />
            <Skeleton
              className='w-[715px] h-[70px] mt-2 border border-solid bg-gray-200 border-stone-300 rounded-[72px]'
            />
          </div>

          <Skeleton
            className="w-[715px] h-16 mt-6 bg-rose-400 rounded-[118px] max-md:px-5 max-md:max-w-full"
          />

          <div className="flex justify-between items-center w-full">
            <Skeleton
              className="w-80 h-10 bg-gray-200 rounded-full"
            />
          </div>

        </div>

      </section>

      <Skeleton
        className="min-h-[800px] bg-gray-200"
      />
    </main>
  )
}

export default SuspensedLoginForm