// Image.jsx
import React from 'react'
import PropTypes from 'prop-types'

/**
 * A flexible image component that supports future extensions like:
 * - lazy loading
 * - placeholder blur
 * - responsive handling
 * - cloud/CDN support
 * 
 * @param {string} src - Path to the image (imported or URL)
 * @param {string} alt - Alternative text for accessibility
 * @param {number} width - Optional fixed width
 * @param {number} height - Optional fixed height
 * @param {string} className - Optional Tailwind utility classes
 */
export default function Image({
  src,
  alt = '',
  width,
  height,
  className = '',
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`rounded-md object-cover ${className}`}
      loading="lazy"
      decoding="async"
      {...props}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string
}
