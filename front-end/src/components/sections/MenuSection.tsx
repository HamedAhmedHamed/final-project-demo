import { useState } from "react"

const MenuSection = () => {
  const [activeId, setActiveId] = useState(0)

  const buttons = [
    "all",
    'breakfast',
    'main dishes',
    'drinks',
    'desserts'
  ]

  const handleFetch = (id) => {
    setActiveId(() => id)
  }

  return (
    <section className="flex flex-col justify-center bg-white">
      <div className="flex flex-col items-center px-5 pb-20 w-full bg-white max-md:max-w-full">
        <h1 className="font-playfair capitalize mt-20 text-8xl text-center leading-[96px] text-stone-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          our menu
        </h1>

        <p className="mt-5 text-lg leading-7 text-center text-gray-600 w-[557px] max-md:max-w-full">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>

        <ul className="flex gap-4 mt-12 text-base font-bold leading-6 text-center text-stone-800 max-md:flex-wrap max-md:mt-10">

          {buttons.map((label, i) => (
            <li key={i}>
              <button
                type='button'
                onClick={() => handleFetch(i)}
                className={
                  i === activeId
                    ? "capitalize px-8 py-3 text-white bg-rose-700 rounded-[50px] max-md:px-5"
                    : "capitalize px-7 py-3 border border-solid border-stone-300 rounded-[50px] max-md:px-5"
                }
              >
                {label}
              </button>
            </li>
          ))}

        </ul>

        {/* card container */}
        <div className="mt-24 mb-7 w-full max-w-[1296px] max-md:mt-10 max-md:max-w-full">
          {/* <div className="flex gap-5 max-md:flex-col"> */}
          {/* don't forget to adjust the responsiveness */}
          <div className="grid grid-cols-4 gap-x-5 gap-y-7 max-md:grid-cols-3 max-sm:grid-cols-1">
            {/* card 1 */}
            {/* <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"> */}
            <div className="flex flex-col max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center pb-9 w-full font-bold text-center bg-white rounded-xl border-2 border-solid border-stone-300 max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd"
                  className="self-stretch w-full aspect-[1.33]"
                />
                <p className="mt-8 text-2xl tracking-tighter text-rose-700">
                  $ 9.99
                </p>
                <h3 className="mt-4 text-xl leading-7 text-stone-800">
                  Fried Eggs
                </h3>
                <p className="mt-4 text-base leading-6 text-stone-700 w-[246px]">
                  Made with eggs, lettuce, salt, oil and other ingredients.
                </p>
              </div>
            </div>

            {/* original design */}
            {/* <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center pb-9 w-full font-bold text-center bg-white rounded-xl border-2 border-solid border-stone-300 max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d5d81bfb8f8d7ca13a7955331864b93dd8e0792aea7407e4be58d0d3fefc1f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd"
                  className="self-stretch w-full aspect-[1.33]"
                />
                <div className="mt-8 text-2xl tracking-tighter text-pink-800">
                  $ 9.99
                </div>
                <div className="mt-4 text-xl leading-7 text-stone-800">
                  Fried Eggs
                </div>
                <div className="mt-4 text-base leading-6 text-stone-700 w-[246px]">
                  Made with eggs, lettuce, salt, oil and other ingredients.
                </div>
              </div>
            </div> */}



            {/* card 2 */}
            {/* <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center pb-9 w-full font-bold text-center bg-white rounded-xl border-2 border-solid border-stone-300 max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a3fc36af945412ace8ea4a142c19dd452e579cb1ade69c3bf02032fbea167ba2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3fc36af945412ace8ea4a142c19dd452e579cb1ade69c3bf02032fbea167ba2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3fc36af945412ace8ea4a142c19dd452e579cb1ade69c3bf02032fbea167ba2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3fc36af945412ace8ea4a142c19dd452e579cb1ade69c3bf02032fbea167ba2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3fc36af945412ace8ea4a142c19dd452e579cb1ade69c3bf02032fbea167ba2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3fc36af945412ace8ea4a142c19dd452e579cb1ade69c3bf02032fbea167ba2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3fc36af945412ace8ea4a142c19dd452e579cb1ade69c3bf02032fbea167ba2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a3fc36af945412ace8ea4a142c19dd452e579cb1ade69c3bf02032fbea167ba2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd"
                  className="self-stretch w-full aspect-[1.33]"
                />
                <div className="mt-8 text-2xl tracking-tighter text-pink-800">
                  $ 15.99
                </div>
                <div className="mt-4 text-xl leading-7 text-stone-800">
                  Hawaiian Pizza
                </div>
                <div className="mt-4 text-base leading-6 text-stone-700 w-[246px]">
                  Made with eggs, lettuce, salt, oil and other ingredients.
                </div>
              </div>
            </div> */}

            {/* card 3 */}
            {/* <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center pb-9 w-full font-bold text-center bg-white rounded-xl border-2 border-solid border-stone-300 max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b3b76499e9d996acb3a2a9113e274fa288d16c0cb44b0eecefc5b3dc5dbe488a?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3b76499e9d996acb3a2a9113e274fa288d16c0cb44b0eecefc5b3dc5dbe488a?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3b76499e9d996acb3a2a9113e274fa288d16c0cb44b0eecefc5b3dc5dbe488a?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3b76499e9d996acb3a2a9113e274fa288d16c0cb44b0eecefc5b3dc5dbe488a?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3b76499e9d996acb3a2a9113e274fa288d16c0cb44b0eecefc5b3dc5dbe488a?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3b76499e9d996acb3a2a9113e274fa288d16c0cb44b0eecefc5b3dc5dbe488a?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3b76499e9d996acb3a2a9113e274fa288d16c0cb44b0eecefc5b3dc5dbe488a?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b3b76499e9d996acb3a2a9113e274fa288d16c0cb44b0eecefc5b3dc5dbe488a?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd"
                  className="self-stretch w-full aspect-[1.33]"
                />
                <div className="mt-8 text-2xl tracking-tighter text-pink-800">
                  $ 7.25
                </div>
                <div className="mt-4 text-xl leading-7 text-stone-800">
                  Martinez Cocktail
                </div>
                <div className="mt-4 text-base leading-6 text-stone-700 w-[246px]">
                  Made with eggs, lettuce, salt, oil and other ingredients.
                </div>
              </div>
            </div> */}

            {/* card 4 */}
            {/* <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center pb-9 w-full font-bold text-center bg-white rounded-xl border-2 border-solid border-stone-300 max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d7e3b03dbd8cc42825ca98a7d0aaa824a47fa6f4fd4d2adcec65eaadf6f922a3?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7e3b03dbd8cc42825ca98a7d0aaa824a47fa6f4fd4d2adcec65eaadf6f922a3?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7e3b03dbd8cc42825ca98a7d0aaa824a47fa6f4fd4d2adcec65eaadf6f922a3?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7e3b03dbd8cc42825ca98a7d0aaa824a47fa6f4fd4d2adcec65eaadf6f922a3?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7e3b03dbd8cc42825ca98a7d0aaa824a47fa6f4fd4d2adcec65eaadf6f922a3?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7e3b03dbd8cc42825ca98a7d0aaa824a47fa6f4fd4d2adcec65eaadf6f922a3?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7e3b03dbd8cc42825ca98a7d0aaa824a47fa6f4fd4d2adcec65eaadf6f922a3?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7e3b03dbd8cc42825ca98a7d0aaa824a47fa6f4fd4d2adcec65eaadf6f922a3?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd"
                  className="self-stretch w-full aspect-[1.33]"
                />
                <div className="mt-8 text-2xl tracking-tighter text-pink-800">
                  $ 20.99
                </div>
                <div className="mt-4 text-xl leading-7 text-stone-800">
                  Butterscotch Cake
                </div>
                <div className="mt-4 text-base leading-6 text-stone-700 w-[246px]">
                  Made with eggs, lettuce, salt, oil and other ingredients.
                </div>
              </div>
            </div> */}

          </div>
        </div>



        {/* row 2 */}
        {/* <div className="mt-6 mb-7 w-full max-w-[1296px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">

            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center pb-9 w-full font-bold text-center bg-white rounded-xl border-2 border-solid border-stone-300 max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c6f2d8e85bcd815b9f6fc5bbffac6921152ceca9b76bfb9d77e712ce5496a7f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6f2d8e85bcd815b9f6fc5bbffac6921152ceca9b76bfb9d77e712ce5496a7f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6f2d8e85bcd815b9f6fc5bbffac6921152ceca9b76bfb9d77e712ce5496a7f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6f2d8e85bcd815b9f6fc5bbffac6921152ceca9b76bfb9d77e712ce5496a7f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6f2d8e85bcd815b9f6fc5bbffac6921152ceca9b76bfb9d77e712ce5496a7f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6f2d8e85bcd815b9f6fc5bbffac6921152ceca9b76bfb9d77e712ce5496a7f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6f2d8e85bcd815b9f6fc5bbffac6921152ceca9b76bfb9d77e712ce5496a7f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6f2d8e85bcd815b9f6fc5bbffac6921152ceca9b76bfb9d77e712ce5496a7f0?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd"
                  className="self-stretch w-full aspect-[1.33]"
                />
                <div className="mt-8 text-2xl tracking-tighter text-pink-800">
                  $ 5.89
                </div>
                <div className="mt-4 text-xl leading-7 text-stone-800">
                  Mint Lemonade
                </div>
                <div className="mt-4 text-base leading-6 text-stone-700 w-[246px]">
                  Made with eggs, lettuce, salt, oil and other ingredients.
                </div>
              </div>
            </div>

            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center pb-9 w-full font-bold text-center bg-white rounded-xl border-2 border-solid border-stone-300 max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d56214af4bc6e55d398382cb3ed369db80c7a5ed02f932df4c416eff179123d2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d56214af4bc6e55d398382cb3ed369db80c7a5ed02f932df4c416eff179123d2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d56214af4bc6e55d398382cb3ed369db80c7a5ed02f932df4c416eff179123d2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d56214af4bc6e55d398382cb3ed369db80c7a5ed02f932df4c416eff179123d2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d56214af4bc6e55d398382cb3ed369db80c7a5ed02f932df4c416eff179123d2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d56214af4bc6e55d398382cb3ed369db80c7a5ed02f932df4c416eff179123d2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d56214af4bc6e55d398382cb3ed369db80c7a5ed02f932df4c416eff179123d2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d56214af4bc6e55d398382cb3ed369db80c7a5ed02f932df4c416eff179123d2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd"
                  className="self-stretch w-full aspect-[1.33]"
                />
                <div className="mt-8 text-2xl tracking-tighter text-pink-800">
                  $ 18.05
                </div>
                <div className="mt-4 text-xl leading-7 text-stone-800">
                  Chocolate Icecream
                </div>
                <div className="mt-4 text-base leading-6 text-stone-700 w-[246px]">
                  Made with eggs, lettuce, salt, oil and other ingredients.
                </div>
              </div>
            </div>

            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center pb-9 w-full font-bold text-center bg-white rounded-xl border-2 border-solid border-stone-300 max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/63767512f28c64b0450b0de9e6e7524b1cdbe93f4e8a63cd9bcb7ed7cb7363f2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/63767512f28c64b0450b0de9e6e7524b1cdbe93f4e8a63cd9bcb7ed7cb7363f2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63767512f28c64b0450b0de9e6e7524b1cdbe93f4e8a63cd9bcb7ed7cb7363f2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/63767512f28c64b0450b0de9e6e7524b1cdbe93f4e8a63cd9bcb7ed7cb7363f2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/63767512f28c64b0450b0de9e6e7524b1cdbe93f4e8a63cd9bcb7ed7cb7363f2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/63767512f28c64b0450b0de9e6e7524b1cdbe93f4e8a63cd9bcb7ed7cb7363f2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/63767512f28c64b0450b0de9e6e7524b1cdbe93f4e8a63cd9bcb7ed7cb7363f2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/63767512f28c64b0450b0de9e6e7524b1cdbe93f4e8a63cd9bcb7ed7cb7363f2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd"
                  className="self-stretch w-full aspect-[1.33]"
                />
                <div className="mt-8 text-2xl tracking-tighter text-pink-800">
                  $ 12.55
                </div>
                <div className="mt-4 text-xl leading-7 text-stone-800">
                  Cheese Burger
                </div>
                <div className="mt-4 text-base leading-6 text-stone-700 w-[246px]">
                  Made with eggs, lettuce, salt, oil and other ingredients.
                </div>
              </div>
            </div>

            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center pb-9 w-full font-bold text-center bg-white rounded-xl border-2 border-solid border-stone-300 max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/857dfbaa3142085e35c71f67d858e17e65c95c5aecdac794f933ba37476eccb1?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/857dfbaa3142085e35c71f67d858e17e65c95c5aecdac794f933ba37476eccb1?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/857dfbaa3142085e35c71f67d858e17e65c95c5aecdac794f933ba37476eccb1?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/857dfbaa3142085e35c71f67d858e17e65c95c5aecdac794f933ba37476eccb1?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/857dfbaa3142085e35c71f67d858e17e65c95c5aecdac794f933ba37476eccb1?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/857dfbaa3142085e35c71f67d858e17e65c95c5aecdac794f933ba37476eccb1?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/857dfbaa3142085e35c71f67d858e17e65c95c5aecdac794f933ba37476eccb1?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/857dfbaa3142085e35c71f67d858e17e65c95c5aecdac794f933ba37476eccb1?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&&apiKey=dc98b0512cdc414dbb547f3d5242c1bd"
                  className="self-stretch w-full aspect-[1.33]"
                />
                <div className="mt-8 text-2xl tracking-tighter text-pink-800">
                  $ 12.99
                </div>
                <div className="mt-4 text-xl leading-7 text-stone-800">
                  Classic Waffles
                </div>
                <div className="mt-4 text-base leading-6 text-stone-700 w-[246px]">
                  Made with eggs, lettuce, salt, oil and other ingredients.
                </div>
              </div>
            </div>

          </div>
        </div> */}
      </div>
    </section>
  )
}

export default MenuSection