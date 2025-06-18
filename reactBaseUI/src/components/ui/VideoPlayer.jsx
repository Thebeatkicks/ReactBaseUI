// VideoPlayer.jsx
import React from 'react'
import PropTypes from 'prop-types'

/**
 * Reusable video player component for local or hosted videos.
 * Future features could include:
 * - video.js or Plyr integration
 * - custom controls
 * - cloud storage integration
 *
 * @param {string} src - Video file path (imported or URL)
 * @param {string} poster - Optional thumbnail image
 * @param {boolean} controls - Show native controls
 * @param {boolean} autoPlay - Start playing automatically
 * @param {boolean} loop - Loop playback
 * @param {boolean} muted - Mute by default (required for autoplay)
 * @param {string} className - Tailwind utility classes
 */
export default function VideoPlayer({
  src,
  poster,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  className = '',
  ...props
}) {
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
      {...props}
    >
      Your browser does not support the video tag.
    </video>
  )
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  className: PropTypes.string
}
