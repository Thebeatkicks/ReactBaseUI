// src/components/docs/CodeBlock.jsx
import React, { useRef, useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/themes/prism.css'             // Light theme
import 'prismjs/themes/prism-okaidia.css'     // Dark theme (okaidia)

export default function CodeBlock({ code, language = 'jsx' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current)
  }, [code])

  return (
    <div className="relative">
      <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto shadow-sm">
        <code
          ref={ref}
          className={`language-${language} text-sm`}
        >
          {code}
        </code>
      </pre>
    </div>
  )
}
