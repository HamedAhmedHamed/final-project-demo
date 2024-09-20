import TestimonialCard from "./TestimonialCard.tsx"

import sohpie from "/testimonials/sophire.webp"
import matt from "/testimonials/matt.webp"
import andy from "/testimonials/andy.webp"

const Testimonails = () => {
  const reviews = [
    {
      title: "The best restaurant",
      content: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      author: "Sophire Robson",
      location: "Los Angeles, CA",
      imageSrc: sohpie
    },
    {
      title: "Simply delicious",
      content: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
      author: "Matt Cannon",
      location: "San Diego, CA",
      imageSrc: matt
    },
    {
      title: "One of a kind restaurant",
      content: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
      author: "Andy Smith",
      location: "San Francisco, CA",
      imageSrc: andy
    }
  ]

  return (
    <section className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col mt-5 mb-7 w-full max-w-[1296px] max-md:max-w-full">
        <h2 className="capitalize font-playfair justify-center self-center text-6xl font-medium text-center leading-[60.5px] text-stone-800 max-md:max-w-full max-md:text-4xl">
          what our customers say
        </h2>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {reviews.map((review, index) => (
              <TestimonialCard key={index} {...review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonails