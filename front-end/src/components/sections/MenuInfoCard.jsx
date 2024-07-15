const MenuInfoCard = ({ icon, title, children}) => {
	return (
		<div className="flex flex-col grow justify-center text-center max-md:mt-6">
      		<div className="flex flex-col justify-center px-9 py-9 bg-white rounded-xl border-2 border-solid border-stone-300 max-md:px-5">
        		<div className="flex flex-col justify-center items-center">
        			<span className="flex items-center justify-center w-24 h-24 bg-zinc-600 rounded-full">
        				{icon}
        			</span>
          			<div className="flex flex-col self-stretch mt-8">
            			<h3 className="self-center text-2xl font-bold tracking-tighter text-stone-800">{title}</h3>
            			<p className="mt-4 text-base leading-6 text-stone-700">{children}</p>
          			</div>
          			<button className="justify-center px-1 py-px mt-8 text-base font-bold leading-6 text-pink-800 rounded-xl">
            			Explore Menu
          			</button>
        		</div>
      		</div>
    	</div>
	)
}

export default MenuInfoCard