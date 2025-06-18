// src/pages/Home.jsx
// src/pages/Home.jsx
import { Link } from "react-router-dom"
import Badge from "../components/ui/Badge"
import Button from "../components/ui/Button"
import Logo from "../components/icons/Logo"
import { BookOpen, ArrowRight, ArrowUpRight } from "lucide-react"

export default function Home() {
  const badgeColors = [
  "!bg-purple-500/20 !text-purple-600",
  "!bg-indigo-500/20 !text-indigo-600",
  "!bg-blue-500/20   !text-blue-600",
  "!bg-emerald-500/20 !text-emerald-600",
  "!bg-pink-500/20   !text-pink-600",
]

  const badges = ["React", "Tailwind", "Zustand", "Dark Mode", "Framer Motion"]

  return (
    <section className="bg-background text-foreground min-h-screen pt-32 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">

          {/* Top red alert button */}
          <div className="flex justify-center md:justify-start">
            <button className="text-red-500 border border-red-500 bg-red-500/10 hover:bg-red-500/30 transition text-sm px-3 py-1 rounded-full">
              See what’s new
            </button>
          </div>

          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold font-sans">
            Build modern UIs with <span className="text-primary">ReactBaseUI</span>
          </h1>

          {/* Informative paragraph with buzzwords */}
          <p className="text-muted text-base">
            Quickly <span className="px-1 py-0.5 bg-yellow-100 text-purple-700 dark:bg-purple-700/20 dark:text-purple-400 rounded-md">deploy</span> powerful components,
            <span className="px-1 py-0.5 bg-green-100 text-green-700 dark:bg-green-700/20 dark:text-green-400 rounded-md ml-1">style</span> your brand with ease, and
            <span className="px-1 py-0.5 bg-blue-100 text-blue-700 dark:bg-blue-700/20 dark:text-blue-400 rounded-md ml-1">publish</span> faster than ever before.
          </p>

          {/* Gradient Badges */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {badges.map((label, i) => (
              <Badge key={label} className={badgeColors[i % badgeColors.length]}>
                {label}
              </Badge>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
             <Link to="/admin">
             <Button variant="primary">
              
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
             </Link>
            
            <Link to="/docs">
         <Button variant="outline">
             Read the Docs
             < ArrowUpRight className="w-4 h-4" />
           </Button>
         </Link>
          </div>
        </div>

        {/* Right Side – Install Instructions */}
        <div className="flex-1 max-w-md w-full bg-white dark:bg-[#2a2a2a] rounded-xl shadow-md p-6 border border-muted">
          <h2 className="text-lg font-semibold mb-2">Install ReactBaseUI</h2>
          <div className="bg-black text-white dark:bg-gray-900 p-4 rounded-md text-sm font-mono">
            <pre>
              <code>npm install reactbaseui</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
