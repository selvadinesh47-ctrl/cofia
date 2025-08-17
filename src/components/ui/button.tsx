import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Cofia Premium Variants
        hero: "bg-cofia-brown text-cofia-cream font-poppins font-semibold uppercase tracking-wide shadow-[var(--shadow-button)] hover:bg-cofia-dark-brown hover:shadow-[var(--shadow-premium)] transform hover:-translate-y-0.5 transition-all duration-300",
        "hero-outline": "border-2 border-cofia-brown text-cofia-brown bg-transparent font-poppins font-semibold uppercase tracking-wide hover:bg-cofia-brown hover:text-cofia-cream transition-all duration-300",
        premium: "bg-gradient-to-r from-cofia-brown to-cofia-dark-brown text-cofia-cream font-poppins font-semibold shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-premium)] transform hover:scale-105 transition-all duration-300",
        coconut: "bg-cofia-green text-cofia-dark-brown font-poppins font-medium hover:bg-cofia-green/80 shadow-[var(--shadow-card)] transition-all duration-300",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 py-4 text-base",
        xl: "h-14 rounded-lg px-10 py-5 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
