// src/components/ui/ThemeToggle.jsx
import { useTheme } from '../../contexts/ThemeProvider'
import { Moon, Sun, Monitor } from 'lucide-react' // Du kan installera via: npm install lucide-react

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggle = () => {
    if (theme === 'dark') setTheme('light')
    else if (theme === 'light') setTheme('system')
    else setTheme('dark')
  }

  const icon = theme === 'dark' ? <Moon size={20} /> :
               theme === 'light' ? <Sun size={20} /> :
               <Monitor size={20} />

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-muted text-foreground hover:opacity-80 transition"
    >
      {icon}
    </button>
  )
}