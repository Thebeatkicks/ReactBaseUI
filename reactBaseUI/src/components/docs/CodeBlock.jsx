// src/components/docs/CodeBlock.jsx
import React, { useRef, useEffect, useState } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.js'
// we’ll only use the dark Okaidia theme for both modes:
import 'prismjs/themes/prism-okaidia.css'

import { Copy, Check } from 'lucide-react'

export default function CodeBlock({ code = '', language = 'jsx' }) {
  const ref = useRef(null)
  const [copied, setCopied] = useState(false)

  // Highlight with Prism whenever `code` or `language` changes
  useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current)
  }, [code, language])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 800)
    } catch (err) {
      console.error('Copy failed:', err)
    }
  }

  return (
    <div className="relative">
      {/* Copy button */}
      <button
        onClick={handleCopy}
        title={copied ? 'Copied!' : 'Copy to clipboard'}
        className={`
          absolute top-2 right-2 z-10 flex items-center
          bg-gray-700 text-gray-200           /* always dark button */
          hover:text-white
          px-2 py-1 rounded transition
        `}
      >
        {copied ? (
          <Check className="w-4 h-4 text-primary" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
        <span className="ml-1 text-xs">{copied ? 'Copied' : 'Copy'}</span>
      </button>

      {/* Outer wrapper for focus ring */}
      <div
        className={`
          rounded-lg transition-shadow duration-300 ease-out
          ${copied ? 'shadow-[0_0_0_2px_rgba(88,101,242,0.8)]' : 'shadow-sm'}
        `}
      >
        {/* Always dark background & light text */}
        <pre className="bg-gray-800 text-gray-100 rounded-lg p-4 overflow-x-auto">
          <code
            ref={ref}
            className={`language-${language} text-sm`}
          >
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}
