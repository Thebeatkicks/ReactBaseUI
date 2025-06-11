import React from 'react'
import PropTypes from 'prop-types'

/**
 * Smart video component that supports:
 * - local video files via <video>
 * - external embeds like YouTube, Vimeo via <iframe>
 *
 * Automatically detects if `src` is a URL or local asset.
 */

export default function FlexibleVideo({
  src,
  poster,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  className = ''
}) {
  const isExternal = typeof src === 'string' && /^https?:\/\//.test(src)

  // Render <iframe> for external video (YouTube/Vimeo/etc)
  if (isExternal) {
    return (
      <div className={`aspect-video w-full rounded-md overflow-hidden ${className}`}>
        <iframe
          src={src}
          title="Embedded video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    )
  }

  // Fallback to HTML5 video for local file
  return (
    <video
      className={`rounded-md w-full h-auto ${className}`}
      src={src}
      poster={poster}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
    >
      Your browser does not support the video tag.
    </video>
  )
}

FlexibleVideo.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  className: PropTypes.string
}
