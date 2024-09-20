import bg from "/hero/main-hero.webp"

const NotFound = () => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full min-h-[802px] max-md:px-5 max-md:max-w-full">

      <img
        loading="eager"
        src={bg}
        alt="background"
        className="object-cover absolute inset-0 size-full"
      />

      <div className="flex relative flex-col mt-32 mb-20 max-w-full w-[667px] max-md:my-10">

        <div className="flex flex-col text-center text-stone-800 max-md:max-w-full">
          <h1 className="font-playfair capitalize text-8xl leading-[96px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            page not found 
          </h1>
          
          <p className="self-center mt-8 text-xl leading-8 w-[537px] max-md:max-w-full">
            You can navigate through Bistro Bliss from the Navbar. 
          </p>
        </div>
      </div>
    </section>
  )
}

export default NotFound