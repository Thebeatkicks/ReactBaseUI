// src/components/ui/Badge.jsx
import clsx from "clsx"

/**
 * Pill-label för status/taggar
 *
 * @param {React.ReactNode}        children   – text eller element inuti badgen
 * @param {"default"|"primary"|"secondary"|"success"|"warning"|"danger"} variant
 * @param {string}                 className – extra Tailwind-klasser
 */
export default function Badge({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-block px-3 py-1 text-sm font-medium rounded-full transition-colors"

  const variants = {
    default:   "bg-muted/20 dark:bg-muted/30 text-muted",
    primary:   "bg-primary/20 text-primary",
    secondary: "bg-secondary/20 text-secondary",
    success:   "bg-success/20 text-success",
    warning:   "bg-warning/20 text-warning",
    danger:    "bg-danger/20 text-danger",
  }

  // Välj styles för vald variant (fallback till default om okänd variant)
  const variantStyles = variants[variant] || variants.default

  return (
    <span
      {...props}
      className={clsx(baseStyles, variantStyles, className)}
    >
      {children}
    </span>
  )
}
