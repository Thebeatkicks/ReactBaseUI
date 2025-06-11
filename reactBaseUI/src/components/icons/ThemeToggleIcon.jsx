import { useTheme } from "../../contexts/ThemeProvider"
import { Moon, Sun, Laptop } from "lucide-react"

export default function ThemeToggleIcon() {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    if (theme === "dark") setTheme("light")
    else if (theme === "light") setTheme("system")
    else setTheme("dark")
  }

  const getIcon = () => {
    if (theme === "dark") return <Moon className="w-5 h-5" />
    if (theme === "light") return <Sun className="w-5 h-5" />
    return <Laptop className="w-5 h-5" />
  }

  return (
    <button
      onClick={handleClick}
      className="hover:text-primary transition"
      title={`Change theme (current: ${theme})`}
    >
      {getIcon()}
    </button>
  )
}
