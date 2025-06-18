// src/components/ui/Button.jsx
import clsx from "clsx"

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md px-4 py-2 transition-colors duration-200"

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    outline: "border border-foreground text-foreground hover:bg-foreground/10",
    ghost: "text-foreground hover:bg-foreground/10",
    transparent: "bg-transparent text-primary hover:underline",
  }

  return (
    <button
      {...props}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  )
}
