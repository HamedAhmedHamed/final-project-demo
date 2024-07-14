import bg from "../assets/hero/bg.jpg"

const HomeHero = () => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full min-h-[802px] max-md:px-5 max-md:max-w-full">

      <img
        loading="lazy"
        src={bg}
        className="object-cover absolute inset-0 size-full"
      />

      <div className="flex relative flex-col mt-32 mb-20 max-w-full w-[667px] max-md:my-10">

        <div className="flex flex-col text-center text-stone-800 max-md:max-w-full">

          <h1 className="font-playfair text-8xl leading-[96px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Best food for
            <br />
            your taste
          </h1>

          <p className="self-center mt-8 text-xl leading-8 w-[537px] max-md:max-w-full">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>

        </div>
        <div className="flex gap-4 self-center mt-10 text-base font-bold leading-6 text-right">

          <Link className="capitalize justify-center px-8 py-5 text-white bg-red-800 rounded-[118px] max-md:px-5">
            book a table
          </Link>

          <Link className="capitalize justify-center px-8 py-5 text-gray-900 border-2 border-solid border-stone-800 rounded-[118px] max-md:px-5">
            explore menu
          </Link>
        </div>
      </div>

    </section>
  )
}

export default HomeHero