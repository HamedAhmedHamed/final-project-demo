import { ButtonHTMLAttributes, forwardRef, type FC } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../utils'

const buttonVariants = cva(
  "",
  {
    variants: {
      variant: {
        contact: "flex gap-2", 
		    constactFooter: "flex items-center justify-center w-9 h-9 bg-rose-800 hover:bg-rose-900 rounded-full",
        navHeader: "justify-center capitalize px-4 py-1 rounded-[34px] bg-stone-300 hover:bg-stone-200",
        navHeaderHover: "justify-center capitalize px-4 py-1 hover:bg-stone-100 rounded-[34px]",
        auth: "justify-center capitalize px-6 py-3 my-auto font-bold text-right text-gray-900 hover:text-rose-700 border-2 border-solid border-stone-800 hover:border-rose-700 duration-100 rounded-full max-md:px-5 max-sm:justify-end",

        prmiaryHero: "capitalize justify-center px-8 py-5 text-white bg-rose-700 border-2 border-rose-700 border-solid rounded-[118px] hover:bg-transparent hover:text-rose-700 duration-75 max-md:px-5",
        secondaryHero: "capitalize justify-center px-8 py-5 text-gray-900 bg-transparent border-2 border-solid border-stone-800 rounded-[118px] max-md:px-5",

        browseMenu: "justify-center self-start px-8 py-5 mt-10 text-base font-bold leading-6 text-right text-gray-900 border-2 border-solid border-stone-800 rounded-[118px] max-md:px-5",
        moreAboutUs: "justify-center self-start px-8 py-5 mt-10 text-base font-bold leading-6 text-right text-gray-900 border-2 border-solid border-stone-800 rounded-[118px] max-md:px-5",
      }
    }
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, ...props }, ref) => {
  return (
    <button
      ref={ref} 
      className={cn(buttonVariants({ variant, className }))}
      { ...props }
    />
  )
})

export { Button, buttonVariants }

/*
  contact btns
  <li className="flex gap-2">
    <HiOutlinePhone className="mt-auto" size={18} />
    <p className="max-sm:text-sm">(414) 857 - 0107</p>
  </li>

  nav buttons
  <NavLink
    to={link.navigateTo}
    className={({ isActive }) => (
      isActive
        ? "justify-center capitalize px-4 py-1 rounded-[34px] bg-stone-300 hover:bg-stone-200"
        : "justify-center capitalize px-4 py-1 hover:bg-stone-100 rounded-[34px]"
      )}
  >
    {link.label}
  </NavLink>
  
  auth buttons 
  <button
    onClick={handleAuth}
    className="justify-center capitalize px-6 py-3 my-auto font-bold text-right text-gray-900 hover:text-rose-700 border-2 border-solid border-stone-800 hover:border-rose-700 duration-100 rounded-full max-md:px-5 max-sm:justify-end"
  >
   {user.role === "guest"
      ? "login"
      : "logout"}
  </button>

  HOME
 ----------- 
  hero
  <button
    className="capitalize justify-center px-8 py-5 text-white bg-rose-700 border-2 border-rose-700 border-solid rounded-[118px] hover:bg-transparent hover:text-rose-700 duration-75 max-md:px-5"
  >
    book a table
  </button>

  <Link
    to="/menu"
    className="capitalize justify-center px-8 py-5 text-gray-900 bg-transparent border-2 border-solid border-stone-800 rounded-[118px] max-md:px-5"
  >
    explore menu
  </Link>
  
  browse menus btns
  <Link to="/menu" className="capitalize justify-center px-14 py-1 mt-8 text-base font-bold leading-6 text-rose-700 bg-gray-100 hover:bg-rose-700 hover:text-gray-100 duration-100 rounded-3xl">
    explore menu
  </Link>
  
  <Link to="/about" className="justify-center self-start px-8 py-5 mt-10 text-base font-bold leading-6 text-right text-gray-900 border-2 border-solid border-stone-800 rounded-[118px] max-md:px-5">
		More About Us
	</Link>

  ------
  footer
  <li>
		<a className="flex items-center justify-center w-9 h-9 bg-rose-800 hover:bg-rose-900 rounded-full" href="" target="_blank">
			<FaTwitter size={15} className="text-white" />
		</a>
	</li>

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
*/