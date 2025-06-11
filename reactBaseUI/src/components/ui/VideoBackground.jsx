import React from 'react'
import PropTypes from 'prop-types'

/**
 * Video background component that supports:
 * - Local video files via <video>
 * - External embeds (YouTube, Vimeo) via <iframe>
 * - Autoplay, loop, muted — no controls
 */

export default function VideoBackground({ src, className = '', overlay = true }) {
  const isExternal = typeof src === 'string' && /^https?:\/\//.test(src)

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Video Layer */}
      {isExternal ? (
        <iframe
          src={`${src}?autoplay=1&mute=1&loop=1&playlist=${getYouTubeId(src)}`}
          title="Background video"
          allow="autoplay; fullscreen"
          allowFullScreen
          frameBorder="0"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      ) : (
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={src}
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {/* Optional overlay for better text contrast */}
      {overlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}

      {/* Content Layer */}
      <div className="relative z-10">
        {/* children get injected here, e.g. hero text */}
      </div>
    </div>
  )
}

VideoBackground.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  overlay: PropTypes.bool,
}

// Extracts YouTube video ID for loop to work
function getYouTubeId(url) {
  const match = url.match(/[?&]v=([^&]+)/) || url.match(/\/embed\/([^/?]+)/)
  return match?.[1] || ''
}
