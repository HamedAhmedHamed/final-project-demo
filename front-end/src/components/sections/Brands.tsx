import uberEats from "../../assets/brands/uber-eats.png"
import postMates from "../../assets/brands/postmates.png"
import grubHub from "../../assets/brands/grubhub.png"
import justEat from "../../assets/brands/justeat.png"
import foodPanda from "../../assets/brands/foodpanda.png"
import doorDash from "../../assets/brands/doordash.png"
import deliveroo from "../../assets/brands/deliveroo.png"
import instaCart from "../../assets/brands/instacart.png"
import didiFood from "../../assets/brands/didi-food.png"

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
                      loading="lazy"
                      src={uberEats}
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center px-12 py-8 bg-white rounded-xl border border-solid shadow-2xl border-stone-50 max-md:px-5">
                    <img
                      loading="lazy"
                      src={grubHub}
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center px-9 py-8 bg-white rounded-xl border border-solid shadow-2xl border-stone-50 max-md:px-5">
                    <img
                      loading="lazy"
                      src={postMates}
                    />
                  </div>
                </div>

              </div>

              <div className="flex gap-5 justify-center self-stretch mt-10 max-md:flex-wrap">

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center px-9 py-8 bg-white rounded-xl border border-solid shadow-2xl border-stone-50 max-md:px-5">
                    <img
                      loading="lazy"
                      src={doorDash}
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center px-12 py-8 bg-white rounded-xl border border-solid shadow-2xl border-stone-50 max-md:px-5">
                    <img
                      loading="lazy"
                      src={foodPanda}
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center px-12 py-6 bg-white rounded-xl border border-solid shadow-2xl border-stone-50 max-md:px-5">
                    <img
                      loading="lazy"
                      src={deliveroo}
                    />
                  </div>
                </div>

              </div>

              <div className="flex gap-5 justify-center mt-10 max-md:flex-wrap">

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center px-10 py-8 bg-white rounded-xl border border-solid shadow-2xl border-stone-50 max-md:px-5">
                    <img
                      loading="lazy"
                      src={instaCart}
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center px-12 py-8 bg-white rounded-xl border border-solid shadow-2xl border-stone-50 max-md:px-5">
                    <img
                      loading="lazy"
                      src={justEat}
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex justify-center items-center px-9 py-8 bg-white rounded-xl border border-solid shadow-2xl border-stone-50 max-md:px-5">
                    <img
                      loading="lazy"
                      src={didiFood}
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