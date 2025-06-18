// src/components/ui/ImageCarousel.jsx
import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ImageCarousel({
  images,
  className = "",
  showArrows = true,
  showDots   = true,
  autoPlay   = false,
  autoPlayInterval = 3000,
  objectFit  = "cover",          // <-- ny prop
}) {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef(null)

  const prev = () =>
    setCurrent((current - 1 + images.length) % images.length)
  const next = () =>
    setCurrent((current + 1) % images.length)

  useEffect(() => {
    if (!autoPlay) return
    timeoutRef.current = setTimeout(next, autoPlayInterval)
    return () => clearTimeout(timeoutRef.current)
  }, [current, autoPlay, autoPlayInterval, images.length])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, idx) => (
         <img
           key={idx}
           src={src}
           alt={`slide-${idx}`}
           className={`w-full flex-shrink-0 object-${objectFit} object-center`}
         />
     ))}
      </div>

      {showArrows && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-background/70 text-foreground p-2 rounded-full hover:bg-background/90 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-background/70 text-foreground p-2 rounded-full hover:bg-background/90 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === current
                  ? "bg-primary"
                  : "bg-muted/50 dark:bg-muted/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

ImageCarousel.propTypes = {
  images:           PropTypes.arrayOf(PropTypes.string).isRequired,
  className:        PropTypes.string,
  showArrows:       PropTypes.bool,
  showDots:         PropTypes.bool,
  autoPlay:         PropTypes.bool,
  autoPlayInterval: PropTypes.number,
  objectFit:        PropTypes.oneOf(["cover","contain"]), // <-- deklarera
}
