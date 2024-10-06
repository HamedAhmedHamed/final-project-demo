import { type BrowseMenuCardProps } from "./BrowseMenu"
import { Link } from "react-router-dom"

const BrowseMenuCard = ({ icon, title, description, navTo}: BrowseMenuCardProps) => {
	return (
		<div className="flex flex-col grow justify-center text-center max-md:mt-6">
      		<div className="flex flex-col justify-center px-9 py-9 bg-white rounded-xl border-2 border-solid border-stone-300 max-md:px-5">
        		<div className="flex flex-col justify-center items-center">
        			<span className="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full">
        				{icon}
        			</span>
          			<div className="flex flex-col self-stretch mt-8">
            			<h3 className="self-center text-2xl font-bold tracking-tighter text-stone-800">{title}</h3>
            			<p className="mt-4 text-base leading-6 text-stone-700">{description}</p>
          			</div>
          			<Link to={navTo} className="capitalize justify-center px-14 py-1 mt-8 text-base font-bold leading-6 text-rose-700 bg-gray-100 hover:bg-rose-700 hover:text-gray-100 duration-100 rounded-3xl">
            			explore menu
          			</Link>
        		</div>
      		</div>
    	</div>
	)
}

export default BrowseMenuCard