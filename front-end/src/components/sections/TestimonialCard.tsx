import React from 'react'

const TestimonialCard = ({ title, content, author, location, imageSrc }) => {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center max-md:mt-6">
        <div className="flex flex-col justify-center items-center px-9 rounded-xl aspect-square bg-stone-50 max-md:px-5">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold tracking-tighter text-rose-700">“{title}”</h3>
              <p className="mt-6 text-lg leading-7 text-stone-700">{content}</p>
            </div>
            <hr className="shrink-0 mt-8 h-px border border-solid bg-stone-300 border-stone-300" />
            <div className="flex gap-5 mt-8 text-base leading-6">
              <img
                src={imageSrc}
                alt={`${author}'s profile`}
                className="shrink-0 rounded-full aspect-square w-[70px]"
              />

              <div className="flex flex-col my-auto">
                <p className="font-bold text-stone-800">{author}</p>
                <p className="text-stone-700">{location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard