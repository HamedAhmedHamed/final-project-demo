import uberEats from "/brands/uber-eats.webp"
import postMates from "/brands/postmates.webp"
import grubHub from "/brands/grubhub.webp"
import justEat from "/brands/just-eat.webp"
import foodPanda from "/brands/food-panda.webp"
import doorDash from "/brands/door-dash.webp"
import delivergoo from "/brands/delivergoo.webp"
import instaCart from "/brands/insta-cart.webp"
import didiFood from "/brands/didi-foods.webp"

const Brands = () => {
  return (
    <section className="flex justify-center items-center px-16 py-20 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
      <div className="mt-10 mb-4 w-full max-w-[1296px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">

          <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10">
              <h2 className="font-playfair text-6xl font-medium leading-[61px] text-stone-800 max-md:text-4xl max-md:leading-[49px]">
                You can order through apps
              </h2>

              <p className="mt-5 text-base leading-6 text-stone-700">
                Lorem ipsum dolor sit amet consectetur adipiscing elit enim
                bibendum sed et aliquet aliquet risus tempor semper.
              </p>
            </div>
          </div>

          <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center max-md:mt-10 max-md:max-w-full">

              <div className="flex gap-5 justify-center max-md:flex-wrap">

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center px-9 py-8 bg-white rounded-xl border border-solid shadow-2xl border-stone-50 max-md:px-5">
                    <img
                      loading="eager"
                      src={uberEats}
                      alt="ubereats"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center px-12 py-8 bg-white rounded-xl border border-solid shadow-2xl border-stone-50 max-md:px-5">
                    <img
                      loading="eager"
                      src={grubHub}
                      alt="grubhub"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center px-9 py-8 bg-white rounded-xl border border-solid shadow-2xl border-stone-50 max-md:px-5">
                    <img
                      loading="eager"
                      src={postMates}
                      alt="postmates"
                    />
                  </div>
                </div>

              </div>

              <div className="flex gap-5 justify-center self-stretch mt-10 max-md:flex-wrap">

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center px-9 py-8 bg-white rounded-xl border border-solid shadow-2xl border-stone-50 max-md:px-5">
                    <img
                      loading="eager"
                      src={doorDash}
                      alt="doordash"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center px-12 py-8 bg-white rounded-xl border border-solid shadow-2xl border-stone-50 max-md:px-5">
                    <img
                      loading="eager"
                      src={foodPanda}
                      alt="foodpanda"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center px-12 py-6 bg-white rounded-xl border border-solid shadow-2xl border-stone-50 max-md:px-5">
                    <img
                      loading="eager"
                      src={delivergoo}
                      alt="delivergoo"
                    />
                  </div>
                </div>

              </div>

              <div className="flex gap-5 justify-center mt-10 max-md:flex-wrap">

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center px-10 py-8 bg-white rounded-xl border border-solid shadow-2xl border-stone-50 max-md:px-5">
                    <img
                      loading="eager"
                      src={instaCart}
                      alt="instacart"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center px-12 py-8 bg-white rounded-xl border border-solid shadow-2xl border-stone-50 max-md:px-5">
                    <img
                      loading="eager"
                      src={justEat}
                      alt="justeat"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center px-9 py-8 bg-white rounded-xl border border-solid shadow-2xl border-stone-50 max-md:px-5">
                    <img
                      loading="eager"
                      src={didiFood}
                      alt="didifood"
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

  )
}

export default Brands