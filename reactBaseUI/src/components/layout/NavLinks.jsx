import { NavLink } from "react-router-dom"

export default function NavLinks({ onClick }) {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold"
      : "hover:text-primary transition"

  return (
    <nav className="flex flex-col md:flex-row md:items-center gap-4 md:gap-x-3 text-sm font-medium">
      <NavLink to="/services" className={linkClass} onClick={onClick}>
        Services
      </NavLink>
      <NavLink to="/docs" className={linkClass} onClick={onClick}>
        Docs
      </NavLink>
    </nav>
  )
}

