import eggs from "../../assets/footer/eggs.png"
import chips from "../../assets/footer/chips.png"
import salad from "../../assets/footer/salad.png"
import pancake from "../../assets/footer/pancake.png"
import logo from "../../assets/logo/white-japanese-food.svg"
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"

const Footer = () => {
	const [date, setDate] = useState(null)

	useEffect(() => {
		setDate(() => new Date().getFullYear())
	}, [])

	return (
		<div className="flex flex-col mt-10 mb-1.5 w-full max-w-[1296px] max-md:max-w-full">
			<div className="max-md:max-w-full">
				<div className="flex gap-5 max-md:flex-col max-md:gap-0">
					<div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
						<div className="flex flex-col max-md:mt-10">
							<div className="flex gap-3.5 text-4xl font-semibold tracking-tight leading-7 text-white">
								<img
									src={logo}
								/>
								<div className="capitalize font-playfair justify-center my-auto italic">
									bistro bliss
								</div>
							</div>
							<div className="mt-8 text-base leading-6 text-stone-400">
								In the new era of technology we look a in the future with
								certainty and pride to for our company and.
							</div>

							<ul className="flex gap-3 pr-20 mt-8 max-md:pr-5">
								<li>
									<a className="flex items-center justify-center w-9 h-9 bg-rose-800 hover:bg-rose-900 rounded-full" href="" target="_blank">
										<FaTwitter size={15} className="text-white" />
									</a>
								</li>

								<li>
									<a className="flex items-center justify-center w-9 h-9 bg-rose-800 hover:bg-rose-900 rounded-full" href="" target="_blank">
										<FaFacebookF size={15} className="text-white" />
									</a>
								</li>

								<li>
									<a className="flex items-center justify-center w-9 h-9 bg-rose-800 hover:bg-rose-900 rounded-full" href="" target="_blank">
										<FaInstagram size={15} className="text-white" />
									</a>
								</li>

								<li>
									<a className="flex items-center justify-center w-9 h-9 bg-rose-800 hover:bg-rose-900 rounded-full" href="" target="_blank">
										<FaGithub size={15} className="text-white" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
						<div className="flex gap-5 justify-center text-base leading-6 max-md:mt-10 max-md:justify-between">
							<div className="flex flex-col whitespace-nowrap">
								<div className="font-bold text-white">Pages</div>

								<ul className="flex flex-col mt-10 text-stone-300">
									<li>
										<Link to="/home" className="capitalize">
											home
										</Link>
									</li>

									<li className="mt-5">
										<Link to="/about" className="capitalize">
											about
										</Link>
									</li>

									<li className="mt-5">
										<Link to="/menu" className="capitalize">
											menu
										</Link>
									</li>

									<li className="mt-5">
										<Link to="/register" className="capitalize">
											register
										</Link>
									</li>

									<li className="mt-5">
										<Link to="/login" className="capitalize">
											login
										</Link>
									</li>
									{/* <div>Home</div>
									<div className="mt-5">About</div>
									<div className="mt-5">Menu</div>
									<div className="mt-5">Register</div>
									<div className="mt-5">Login</div> */}
								</ul>

							</div>
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
											src={eggs}
											className="grow shrink-0 max-w-full aspect-[1.14] w-[194px] max-md:mt-4"
										/>
									</div>
									<div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
										<img
											loading="lazy"
											src={chips}
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
											src={salad}
											className="grow shrink-0 max-w-full aspect-[1.14] w-[194px] max-md:mt-4"
										/>
									</div>
									<div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
										<img
											loading="lazy"
											src={pancake}
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
	)
}

export default Footer