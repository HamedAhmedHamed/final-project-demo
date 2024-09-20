import { useState, useEffect } from "react"

const BookingForm = () => {
  const [currentDate, setCurrentDate] = useState<string | null>(null)

  useEffect(() => {
    setCurrentDate(() => new Date().toISOString().substring(0, 10))
  }, [currentDate])

  return (
    <section className="flex z-10 flex-col items-center px-5 w-full bg-stone-50 max-md:max-w-full">

      <h1 className="mt-20 capitalize font-playfair text-8xl text-center leading-[96px] text-stone-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        book a table
      </h1>

      <p className="mt-6 text-lg leading-7 text-center text-gray-600 w-[545px] max-md:max-w-full">
        We consider all the drivers of change gives you the components you need
        to change to create a truly happens.
      </p>

      <form className="flex z-10 flex-col px-12 py-12 mt-20 -mb-60 max-w-full text-base leading-6 bg-white rounded-2xl border border-white border-solid shadow-2xl w-[812px] max-md:px-5 max-md:mt-10 max-md:mb-2.5">

        <div className="flex justify-between gap-5 text-stone-800 max-md:flex-wrap">

          <div className="flex flex-col w-1/2 max-md:w-full">
            <label htmlFor="date" className='capitalize font-bold'>date</label>
            <input
              id='date'
              type="date"
              min={currentDate}
              required
              className='px-6 py-5 mt-2 text-start w-full border border-solid border-stone-300 rounded-[72px]'
            />
          </div>

          <div className="flex flex-col w-1/2 max-md:w-full">
            <label htmlFor="time" className="capitalize font-bold">time</label>
            <input
              id="time"
              type="time"
              max="01:00"
              min="09:00"
              required
              className='px-6 py-5 mt-2 text-start w-full border border-solid border-stone-300 rounded-[72px]'
            />
          </div>
        </div>


        <div className="flex gap-5 justify-between text-stone-800 mt-6 max-md:flex-wrap">

          <div className="flex flex-col w-1/2">
            <label htmlFor="name" className="capitalize font-bold">name</label>

            <input
              id="name"
              type="text"
              placeholder="Enter Your Name"
              pattern="[A-Za-z\s]+"
              title="Name should only contain letters and spaces."
              required
              className="px-6 py-5 mt-2 text-start bg-white border border-solid border-stone-300 rounded-[72px] text-stone-500 max-md:px-5"
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label htmlFor="phone" className="font-bold">phone</label>

            <input
              id="phone"
              type="text"
              placeholder="XXX-XXX-XXXX"
              maxLength="11"
              pattern="\d{11}"
              title="Phone number must be 11 numbers long"
              required
              className="px-6 py-5 mt-2 text-start bg-white border border-solid border-stone-300 rounded-[72px] text-stone-500 max-md:px-5"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 text-stone-800 mt-6 max-md:flex-wrap">
          <label htmlFor="total-person" className="capitalize font-bold">total person</label>

          <input
            type="number"
            id="total-person"
            min="1"
            max="1000"
            placeholder="1 Person"
            required
            className="px-6 py-5 mt-2 text-start bg-white border border-solid border-stone-300 rounded-[72px] text-stone-500 max-md:px-5"
          />
        </div>

        <button
          type="submit"
          className="px-8 py-5 mt-6 font-bold text-center capitalize text-white bg-rose-700 rounded-[118px] max-md:px-5 max-md:max-w-full"
        >
          book a table
        </button>

      </form>

    </section>
  )
}

export default BookingForm