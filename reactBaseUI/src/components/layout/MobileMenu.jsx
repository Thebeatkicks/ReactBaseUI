import { X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import GithubIcon from "../icons/GithubIcon"
import DonateIcon from "../icons/DonateIcon"
import LoginIcon from "../icons/LoginIcon"
import ThemeToggleIcon from "../icons/ThemeToggleIcon"
import NavLinks from "./NavLinks"

export default function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-72 h-full bg-white dark:bg-background border-l dark:border-muted z-50 flex flex-col justify-between px-6 py-4"
        >
          {/* Stäng-knapp */}
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)} aria-label="Stäng meny">
              <X className="w-6 h-6 text-muted hover:text-primary transition dark:text-white" />
            </button>
          </div>

          {/* Länkar */}
          <div className="mt-8 space-y-6">
            <NavLinks onClick={() => setIsOpen(false)} />
          </div>

          {/* Ikoner i rad längst ner */}
          <div className="flex items-center justify-around mt-auto pt-6 border-t dark:border-muted">
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
