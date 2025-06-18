import { NavLink } from "react-router-dom"
import {
  Book,
  LayoutDashboard,
  Boxes,
  Sliders,
  Sparkles,
  Menu,
  X
} from "lucide-react"
import { useState } from "react"

export default function DocsLayout({ children }) {
  const [open, setOpen] = useState(false)

  const navLinkClass = "hover:text-primary block py-1"
  const sectionClass = "space-y-1 pl-2"

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile Topbar */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 border-b border-muted bg-white dark:bg-background sticky top-0 z-50">
        <h1 className="text-lg font-semibold">Docs</h1>
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground hover:text-primary transition"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          open ? "block" : "hidden"
        } md:block w-full md:w-64 bg-white dark:bg-background border-r border-gray-200 dark:border-muted p-6`}
      >
        <nav className="space-y-6 text-sm">
          {/* Getting Started */}
          <div>
            <div className="flex items-center text-muted uppercase text-xs font-bold mb-2">
              <Book className="w-4 h-4 mr-2" />
              Getting Started
            </div>
            <ul className={sectionClass}>
              <li>
                <NavLink to="/docs/installation" className={navLinkClass}>
                  Installation
                </NavLink>
                </li>
                <li>
                <NavLink to="/docs/icons" className={navLinkClass}>
                  Adding Icons
                </NavLink>
                </li>
                <li>
                <NavLink to="/docs/links" className={navLinkClass}>
                  Adding links
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Layout */}
          <div>
            <div className="flex items-center text-muted uppercase text-xs font-bold mb-2">
              <LayoutDashboard className="w-4 h-4 mr-2" />
              Layout
            </div>
            <ul className={sectionClass}>
              <li>
                <NavLink to="/docs/navbars" className={navLinkClass}>
                  Navbars
                </NavLink>
              </li>
              <li>
                <NavLink to="/docs/card" className={navLinkClass}>
                  Cards
                </NavLink>
              </li>
              <li>
                <NavLink to="/docs/section" className={navLinkClass}>
                  Section
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Components */}
          <div>
            <div className="flex items-center text-muted uppercase text-xs font-bold mb-2">
              <Boxes className="w-4 h-4 mr-2" />
              Components
            </div>
            <ul className={sectionClass}>
              <li>
                <NavLink to="/docs/button" className={navLinkClass}>
                  Button
                </NavLink>
              </li>
              <li>
                <NavLink to="/docs/badge" className={navLinkClass}>
                  Badge
                </NavLink>
              </li>
              <li>
                <NavLink to="/docs/image" className={navLinkClass}>
                  Images
                </NavLink>
              </li>
              <li>
                <NavLink to="/docs/carousel" className={navLinkClass}>
                    Carousel
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Customize */}
          <div>
            <div className="flex items-center text-muted uppercase text-xs font-bold mb-2">
              <Sliders className="w-4 h-4 mr-2" />
              Customize
            </div>
            <ul className={sectionClass}>
              <li>
                <NavLink to="/docs/custom-theme" className={navLinkClass}>
                  Global Styles
                </NavLink>
              </li>
            </ul>
          </div>

          {/* AI */}
          <div>
            <div className="flex items-center text-muted uppercase text-xs font-bold mb-2">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Tools
            </div>
            <ul className={sectionClass}>
              <li>
                <NavLink to="/docs/ai-builder" className={navLinkClass}>
                  Component Builder
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8 bg-white dark:bg-background text-foreground">
        {children}
      </main>
    </div>
  )
}
