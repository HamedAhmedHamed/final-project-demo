import eggs from "../../assets/footer/eggs.png"
import chips from "../../assets/footer/chips.png"
import salad from "../../assets/footer/salad.png"
import pancake from "../../assets/footer/pancake.png"
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

import { useState, useEffect } from "react"

const Footer = () => {
	const [date, setDate] = useState(null)

	useEffect(() => {
		setDate(() => new Date().getFullYear())
	}, [])

	return (
		<footer className="flex justify-center items-center px-16 py-20 w-full bg-zinc-700 max-md:px-5 max-md:max-w-full">
		    <div className="flex flex-col mt-10 mb-1.5 w-full max-w-[1296px] max-md:max-w-full">
		      <div className="max-md:max-w-full">
		        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
		          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
		            <div className="flex flex-col max-md:mt-10">
		              <div className="flex gap-3.5 text-4xl font-semibold tracking-tight leading-7 text-white">
		                <img
		                  loading="lazy"
		                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea73a94d8c64e12927b51b2e23af8b4457a9dab7f28bebd30b58a5cde6281132?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&"
		                  className="shrink-0 w-14 aspect-[1.02]"
		                />
		                <div className="justify-center my-auto italic">
		                  Bistro Bliss
		                </div>
		              </div>
		              <div className="mt-8 text-base leading-6 text-stone-400">
		                In the new era of technology we look a in the future with
		                certainty and pride to for our company and.
		              </div>
		              <div className="flex gap-3 pr-20 mt-8 max-md:pr-5">
		                <img
		                  loading="lazy"
		                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d6c05067fff89397c8213227513b4e5ef53f87227286d968951fc5e641b149b?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&"
		                  className="shrink-0 aspect-square w-[35px]"
		                />
		                <img
		                  loading="lazy"
		                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/697cd861ac74e048c3a5d16a6d13a641203d7a32a3b136a1d2fcdc34b1cd35cd?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&"
		                  className="shrink-0 aspect-square w-[35px]"
		                />
		                <img
		                  loading="lazy"
		                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f59e412e09769b850945b3cccea6f2ca5f85e28dcc7eb0eaf06dfb6528ef90ce?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&"
		                  className="shrink-0 aspect-square w-[35px]"
		                />
		                <img
		                  loading="lazy"
		                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/38de0204d632321684bb0db59808ecb693058eb970c6ab98629a57981f9f1df2?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&"
		                  className="shrink-0 aspect-square w-[35px]"
		                />
		              </div>
		            </div>
		          </div>
		          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
		            <div className="flex gap-5 justify-center text-base leading-6 max-md:mt-10 max-md:justify-between">
		              <div className="flex flex-col whitespace-nowrap">
		                <div className="font-bold text-white">Pages</div>
		                <div className="flex flex-col mt-10 text-stone-300">
		                  <div>Home</div>
		                  <div className="mt-5">About</div>
		                  <div className="mt-5">Menu</div>
		                  <div className="mt-5">Register</div>
		                  <div className="mt-5">Login</div>
		                </div>
		              </div>
		              {/*<div className="flex flex-col">
		                <div className="font-bold text-white">Utility Pages</div>
		                <div className="flex flex-col mt-10 text-stone-300">
		                  <div>Start Here</div>
		                  <div className="mt-5">Styleguide</div>
		                  <div className="mt-5">Password Protected</div>
		                  <div className="mt-5">404 Not Found</div>
		                  <div className="mt-5">Licenses</div>
		                  <div className="mt-5">Changelog</div>
		                  <div className="mt-5">View More</div>
		                </div>
		              </div>*/}
		            </div>
		          </div>
		          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
		            <div className="flex flex-col grow max-md:mt-10">
		              <div className="text-base font-bold leading-6 text-white">
		                Follow Us On Instagram
		              </div>
		              <div className="mt-10">
		                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
		                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
		                    <img
		                      loading="lazy"
		                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35a1d85c481cf2bd8470266fda18bb761eced7b7a7244c4c49abbe2a8a7dd754?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35a1d85c481cf2bd8470266fda18bb761eced7b7a7244c4c49abbe2a8a7dd754?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35a1d85c481cf2bd8470266fda18bb761eced7b7a7244c4c49abbe2a8a7dd754?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35a1d85c481cf2bd8470266fda18bb761eced7b7a7244c4c49abbe2a8a7dd754?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35a1d85c481cf2bd8470266fda18bb761eced7b7a7244c4c49abbe2a8a7dd754?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35a1d85c481cf2bd8470266fda18bb761eced7b7a7244c4c49abbe2a8a7dd754?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35a1d85c481cf2bd8470266fda18bb761eced7b7a7244c4c49abbe2a8a7dd754?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35a1d85c481cf2bd8470266fda18bb761eced7b7a7244c4c49abbe2a8a7dd754?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&"
		                      className="grow shrink-0 max-w-full aspect-[1.14] w-[194px] max-md:mt-4"
		                    />
		                  </div>
		                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
		                    <img
		                      loading="lazy"
		                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/783d7860896e7fdc4d232b56264b9b7b123bfbc44bd60c4f69d00c337457fedb?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/783d7860896e7fdc4d232b56264b9b7b123bfbc44bd60c4f69d00c337457fedb?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/783d7860896e7fdc4d232b56264b9b7b123bfbc44bd60c4f69d00c337457fedb?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/783d7860896e7fdc4d232b56264b9b7b123bfbc44bd60c4f69d00c337457fedb?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/783d7860896e7fdc4d232b56264b9b7b123bfbc44bd60c4f69d00c337457fedb?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/783d7860896e7fdc4d232b56264b9b7b123bfbc44bd60c4f69d00c337457fedb?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/783d7860896e7fdc4d232b56264b9b7b123bfbc44bd60c4f69d00c337457fedb?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/783d7860896e7fdc4d232b56264b9b7b123bfbc44bd60c4f69d00c337457fedb?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&"
		                      className="grow shrink-0 max-w-full aspect-[1.14] w-[194px] max-md:mt-4"
		                    />
		                  </div>
		                </div>
		              </div>
		              <div className="mt-4">
		                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
		                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
		                    <img
		                      loading="lazy"
		                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9319d650357334094bb5d761acfcf019c932e23ac331416548e3b9f50d295b58?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9319d650357334094bb5d761acfcf019c932e23ac331416548e3b9f50d295b58?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9319d650357334094bb5d761acfcf019c932e23ac331416548e3b9f50d295b58?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9319d650357334094bb5d761acfcf019c932e23ac331416548e3b9f50d295b58?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9319d650357334094bb5d761acfcf019c932e23ac331416548e3b9f50d295b58?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9319d650357334094bb5d761acfcf019c932e23ac331416548e3b9f50d295b58?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9319d650357334094bb5d761acfcf019c932e23ac331416548e3b9f50d295b58?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9319d650357334094bb5d761acfcf019c932e23ac331416548e3b9f50d295b58?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&"
		                      className="grow shrink-0 max-w-full aspect-[1.14] w-[194px] max-md:mt-4"
		                    />
		                  </div>
		                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
		                    <img
		                      loading="lazy"
		                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bc7667f51b0871de11ce738c87037f8d2d49f4ebc9848bc8df69d5814799a978?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc7667f51b0871de11ce738c87037f8d2d49f4ebc9848bc8df69d5814799a978?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc7667f51b0871de11ce738c87037f8d2d49f4ebc9848bc8df69d5814799a978?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc7667f51b0871de11ce738c87037f8d2d49f4ebc9848bc8df69d5814799a978?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc7667f51b0871de11ce738c87037f8d2d49f4ebc9848bc8df69d5814799a978?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc7667f51b0871de11ce738c87037f8d2d49f4ebc9848bc8df69d5814799a978?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc7667f51b0871de11ce738c87037f8d2d49f4ebc9848bc8df69d5814799a978?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc7667f51b0871de11ce738c87037f8d2d49f4ebc9848bc8df69d5814799a978?apiKey=dc98b0512cdc414dbb547f3d5242c1bd&"
		                      className="grow shrink-0 max-w-full aspect-[1.14] w-[194px] max-md:mt-4"
		                    />
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		      <div className="shrink-0 mt-24 h-px border border-solid bg-stone-700 border-stone-700 max-md:mt-10 max-md:max-w-full" />
		      <div className="self-center mt-9 text-base leading-6 text-stone-400 max-md:max-w-full">
		        Copyright © {date} Hashtag Developer. All Rights Reserved
		      </div>
		    </div>
		</footer>
	)
}

export default Footer