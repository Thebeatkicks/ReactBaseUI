import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import Logo from "../icons/Logo"
import GithubIcon from "../icons/GithubIcon"
import DonateIcon from "../icons/DonateIcon"
import LoginIcon from "../icons/LoginIcon"
import ThemeToggleIcon from "../icons/ThemeToggleIcon"
import MobileMenu from "./MobileMenu"
import NavLinks from "./NavLinks"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setVisible(currentScrollY < lastScrollY || currentScrollY < 10)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.25 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-background border-b border-gray-200 dark:border-muted px-6 py-3"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/">
            <Logo />
          </NavLink>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <div className="flex items-center space-x-4">
              <GithubIcon />
              <DonateIcon />
              <LoginIcon />
              <ThemeToggleIcon />
            </div>
          </div>

          {/* Mobile burger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-foreground hover:text-primary transition"
              aria-label="Öppna mobilmeny"
            >
              <Menu className="w-6 h-6 text-black dark:text-white" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
