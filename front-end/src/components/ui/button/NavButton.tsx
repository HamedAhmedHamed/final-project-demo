import { ButtonHTMLAttributes, forwardRef, type FC } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../utils'
import { NavLink } from 'react-router-dom'

const buttonVariants = cva(
  "",
  {
    variants: {
      variant: {
        navHeader: "justify-center capitalize px-4 py-1 rounded-[34px] bg-stone-300 hover:bg-stone-200",
        navHeaderHover: "justify-center capitalize px-4 py-1 hover:bg-stone-100 rounded-[34px]",
      }
    }
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { }

const NavButton = <HTMLButtonElement, ButtonProps>({ className, variant, ...props }) => {
  return (
    <NavLink
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  )
}

export { NavButton }