// src/App.jsx
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Docs from "./pages/docs/Docs"
import Navbar from "./components/layout/Navbar"

export default function App() {
  return (
    <div className="dark:bg-background dark:text-foreground bg-white text-black min-h-screen transition-colors">
      <Navbar />
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/docs/*" element={<Docs />} />
        </Routes>
      </div>
    </div>
  )
}
