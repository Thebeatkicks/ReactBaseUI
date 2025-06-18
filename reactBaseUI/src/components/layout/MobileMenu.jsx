import { X, Home, Book, Layers } from "lucide-react"
import GithubIcon from "../icons/GithubIcon"
import DonateIcon from "../icons/DonateIcon"
import LoginIcon from "../icons/LoginIcon"
import ThemeToggleIcon from "../icons/ThemeToggleIcon"
import Button from "../ui/Button"
import { NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

export default function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-16 inset-x-0 bottom-0 z-40 bg-white dark:bg-background flex flex-col px-6 py-6"
        >

          {/* Buttons */}
          <div className="flex flex-col space-y-3 mb-6">
            <Button variant="primary">Login</Button>
            <Button variant="outline">Sign Up</Button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-5 mb-6">
            <NavLink to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-lg">
              <Home className="w-5 h-5" />
              Home
            </NavLink>
            <NavLink to="/docs" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-lg">
              <Book className="w-5 h-5" />
              Docs
            </NavLink>
            <NavLink to="/services" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-lg">
              <Layers className="w-5 h-5" />
              Services
            </NavLink>
          </nav>

          {/* Bottom icon row */}
          <div className="mt-auto flex justify-center gap-5 border-t border-muted pt-4">
            <GithubIcon />
            <DonateIcon />
            <LoginIcon />
            <ThemeToggleIcon />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
