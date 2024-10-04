import eggs from "/footer/eggs.webp"
import chips from "/footer/chips.webp"
import salad from "/footer/salad.webp"
import pancake from "/footer/pancake.webp"
import logo from "/logo/white-japanese-food.svg"

import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"

import { guestNavigation, userNavigation, adminNavigation } from "../header/NavBar"
import useAuthContext from "../../context/AuthContext"
import { Roles } from "../../types/auth.interface"

const Footer = () => {
	const [date, setDate] = useState<number | null>(null)
	const { user } = useAuthContext()

	useEffect(() => {
		setDate(() => new Date().getFullYear())
	}, [])

	return (
		<div className="flex flex-col mt-10 mb-1.5 max-w-screen-xl">
			<div className="flex gap-5 max-md:flex-col max-md:gap-0">
				<div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
					<div className="flex flex-col max-md:mt-10">
						<div className="flex gap-3.5 text-4xl font-semibold tracking-tight leading-7 text-white">
							<img
								loading="eager"
								src={logo}
								alt="logo"
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
						<nav className="flex flex-col whitespace-nowrap">
							<div className="font-bold text-white">Pages</div>

							<ul className="flex flex-col mt-8 text-stone-300">
								{(user.role === Roles.guest)
									? guestNavigation.map((link, i) => (
										<li key={i} className="mt-5">
											<NavLink
												to={link.navigateTo}
												className={({ isActive }) => (
													isActive
														? "capitalize"
														: "capitalize"
												)}
											>
												{link.label}
											</NavLink>
										</li>
									))
									: (user.role === Roles.user)
										? userNavigation.map((link, i) => (
											<li key={i} className="mt-5">
												<NavLink
													to={link.navigateTo}
													className={({ isActive }) => (
														isActive
															? "capitalize"
															: "capitalize"
													)}
												>
													{link.label}
												</NavLink>
											</li>
										))
										: adminNavigation.map((link, i) => (
											<li key={i} className="mt-5">
												<NavLink
													to={link.navigateTo}
													className={({ isActive }) => (
														isActive
															? "capitalize"
															: "capitalize"
													)}
												>
													{link.label}
												</NavLink>
											</li>
										))}
							</ul>
						</nav>
					</div>
				</div>

				<div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
					<div className="flex flex-col grow max-md:mt-10">
						<div className="text-base capitalize font-bold leading-6 text-white">
							follow us on instagram
						</div>
						<div className="mt-10">
							<div className="flex gap-5 max-md:flex-col max-md:gap-0">
								<div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
									<img
										loading="eager"
										src={eggs}
										alt="eggs"
										className="grow shrink-0 max-w-full aspect-[1.14] w-[194px] max-md:mt-4"
									/>
								</div>
								<div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
									<img
										loading="eager"
										src={chips}
										alt="chips"
										className="grow shrink-0 max-w-full aspect-[1.14] w-[194px] max-md:mt-4"
									/>
								</div>
							</div>
						</div>
						<div className="mt-4">
							<div className="flex gap-5 max-md:flex-col max-md:gap-0">
								<div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
									<img
										loading="eager"
										src={salad}
										alt="salad"
										className="grow shrink-0 max-w-full aspect-[1.14] w-[194px] max-md:mt-4"
									/>
								</div>
								<div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
									<img
										loading="eager"
										src={pancake}
										alt="pancake"
										className="grow shrink-0 max-w-full aspect-[1.14] w-[194px] max-md:mt-4"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr className="shrink-0 mt-24 h-px border border-solid bg-stone-700 border-stone-700 max-md:mt-10" />
			<div className="self-center mt-9 text-base leading-6 text-stone-400 max-md:max-w-full">
				Copyright © {date} Hamed Ahmed Hamed. All Rights Reserved
			</div>
		</div>
	)
}

export default Footer