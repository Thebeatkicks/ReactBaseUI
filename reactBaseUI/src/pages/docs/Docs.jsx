import { Routes, Route } from "react-router-dom"
import DocsLayout from "../../components/layout/DocsLayout"
import DocsLanding from "./DocsLanding"
import ButtonDoc from "./ButtonDoc" 
import BadgeDoc from "./BadgeDoc"  
import ImageDoc from "./ImageDoc"   
import CarouselDoc from "./CarouselDoc"

export default function Docs() {
  return (
    <DocsLayout>
      <Routes>
        <Route index element={<DocsLanding />} />
        <Route path="button" element={<ButtonDoc />} /> 
        <Route path="badge" element={<BadgeDoc />} />
        <Route path="image" element={<ImageDoc />} />
        <Route path="carousel" element={<CarouselDoc />} />

        
      </Routes>
    </DocsLayout>
  )
}
