import chef from "/sections/chef.webp"
import sadj from "/sections/sadj.webp"
import soup from "/sections/soup.webp"

import { FaRegClock } from "react-icons/fa6";
import { RiCoupon5Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";

const BenefitsSection = () => {
	return (
		<div className="flex justify-center items-center px-16 py-20 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
			<div className="mt-10 mb-4 w-full max-w-[1296px] max-md:max-w-full">
				<div className="flex gap-5 max-md:flex-col max-md:gap-0">
					<div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
						<div className="grow max-md:mt-10 max-md:max-w-full">
							<div className="flex gap-5 max-md:flex-col max-md:gap-0">
								<div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
									<img
										loading="eager"
										src={chef}
										alt="chef"
										className="w-full max-md:mt-6 max-md:max-w-full"
									/>
								</div>
								<div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
									<div className="flex flex-col grow mt-8 max-md:mt-10">
										<img
											loading="eager"
											src={soup}
											alt="soup"
										/>
										<img
											loading="eager"
											src={sadj}
											alt="sadj"
											className="mt-6"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
						<div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
							<div className="flex flex-col max-md:max-w-full">
								<div className="font-playfair text-6xl font-medium leading-[61px] text-stone-800 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
									Fastest Food Delivery in City
								</div>
								<div className="mt-5 text-base leading-6 text-stone-700 max-md:max-w-full">
									Our visual designer lets you quickly and of drag a down your
									way to customapps for both keep desktop.{" "}
								</div>
							</div>

							<ul className="flex flex-col mt-12 text-xl font-medium leading-7 text-stone-800 max-md:mt-10 max-md:max-w-full">
								<li className="flex gap-5 max-md:flex-wrap">
									<span className="flex items-center justify-center w-8 h-8 bg-rose-700 hover:bg-rose-800 rounded-full">
										<FaRegClock size={15} className="text-white"/>
									</span>
									<div className="my-auto">Delivery within 30 minutes</div>
								</li>

								<li className="flex gap-5 mt-5 max-md:flex-wrap">
									<span className="flex items-center justify-center w-8 h-8 bg-rose-700 hover:bg-rose-800 rounded-full">
										<RiCoupon5Line size={15} className="text-white" />
									</span>
									<div className="my-auto">Best Offer & Prices</div>
								</li>

								<li className="flex gap-5 mt-5 max-md:flex-wrap">
									<span className="flex items-center justify-center w-8 h-8 bg-rose-700 hover:bg-rose-800 rounded-full">
										<MdOutlineShoppingCart size={15} className="text-white" />
									</span>
									<div className="my-auto">Online Services Available</div>
								</li>
							</ul>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BenefitsSection