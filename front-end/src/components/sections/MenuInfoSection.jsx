import MenuInfoCard from "./MenuInfoCard"

import { TbMug } from "react-icons/tb";
import { BiBowlRice } from "react-icons/bi";
import { RiDrinks2Line } from "react-icons/ri";
import { LuCakeSlice } from "react-icons/lu";

const MenuInfoSection = () => {
	const menuInfos = [
		{
			title: "Breakfast",
			icon: <TbMug size={50} />,
			children: "In the new era of technology we look in the future with certainty and pride for our life."
		},

		{
			title: "Main Dishes",
			icon: <BiBowlRice size={50} />,
			children: "In the new era of technology we look in the future with certainty and pride for our life."
		},

		{
			title: "Drinks",
			icon: <RiDrinks2Line size={50} />,
			children: "In the new era of technology we look in the future with certainty and pride for our life."
		},

		{
			title: "Desserts",
			icon: <LuCakeSlice size={50} />,
			children: "In the new era of technology we look in the future with certainty and pride for our life."
		}
	]

	return (
		<section className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      		<div className="flex flex-col mt-3 mb-4 w-full max-w-[1296px] max-md:max-w-full">
        		<h2 className="justify-center self-center text-6xl font-medium text-center leading-[60.5px] text-stone-800 max-md:max-w-full max-md:text-4xl">
          			Browse Our Menu
        		</h2>
        		<div className="mt-16 max-md:mt-10 max-md:max-w-full">
          			<div className="flex gap-5 max-md:flex-col max-md:gap-0">
            			{menuInfos.map((item, index) => (
              				<div key={index} className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                				<MenuInfoCard {...item} />
              				</div>
            			))}
          			</div>
        		</div>
      		</div>
      	</section>
	)
}

export default MenuInfoSection