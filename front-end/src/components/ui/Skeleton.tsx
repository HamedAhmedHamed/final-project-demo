import { forwardRef, HTMLAttributes } from "react";
import cn from "../../utils/cn";
import { cva } from "class-variance-authority";

enum Variants {
  primary = "primary",
  secondary = "secondary"
}

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variants
}

const skeletonVariants = cva(
  "animate-pulse rounded-md bg-muted",
  {
    variants: {
      variant: {
        primary: "",
        secondary: ""
      },
    },
    defaultVariants: {
      variant: "primary"
    }
  }
)

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(({ className, variant, ...props }, ref) => {
  return (
    <div ref={ref} {...props} className={cn(skeletonVariants({ variant }), className)} />
  )
})

export default Skeleton