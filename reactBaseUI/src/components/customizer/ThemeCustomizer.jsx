// src/components/customizer/ThemeCustomizer.jsx
import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import CodeBlock from '../docs/CodeBlock'
import { Clipboard, Check } from 'lucide-react'
import { colors as defaultColors } from '../../config/theme.js'

const STORAGE_KEY = 'reactbaseui-theme'

export default function ThemeCustomizer() {
  // Load or fallback to defaults
  const [themeData, setThemeData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try { return JSON.parse(saved) } catch {}
    }
    return {
      colors: defaultColors,
      fonts: { header: 'Poppins', body: 'Inter' },
    }
  })
  const [saved, setSaved] = useState(false)

  const handleColorChange = (mode, key, value) => {
    setThemeData(td => ({
      ...td,
      colors: {
        ...td.colors,
        [mode]: { ...td.colors[mode], [key]: value },
      },
    }))
  }

  const handleFontChange = (type, value) => {
    setThemeData(td => ({
      ...td,
      fonts: { ...td.fonts, [type]: value },
    }))
  }

  const saveSettings = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(themeData))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  // Generate install snippet for fonts
  const googleLinks = [
    `<link href="https://fonts.googleapis.com/css2?family=${themeData.fonts.header.replace(
      / /g,'+'
    )}:wght@400;700&display=swap" rel="stylesheet" />`,
    `<link href="https://fonts.googleapis.com/css2?family=${themeData.fonts.body.replace(
      / /g,'+'
    )}:wght@400;700&display=swap" rel="stylesheet" />`,
  ].join('\n')

  // Generate tailwind.config.js snippet
  const generateFontConfig = `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['${themeData.fonts.header}', 'sans-serif'],
        body:    ['${themeData.fonts.body}', 'sans-serif'],
      },
    },
  },
}`

  // Generate theme.js snippet
  const generateThemeCode = `// src/config/theme.js
export const colors = ${JSON.stringify(themeData.colors, null, 2)}`

  const fontOptions = [
    'Poppins','Inter','Roboto','Open Sans','Montserrat',
    'Lato','Source Sans Pro','Nunito','Oswald','Raleway',
  ]

  return (
    <div className="space-y-12">
      {/* 1. Font Pickers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Fonts</h2>
        <div className="flex flex-col sm:flex-row gap-6">
          {['header','body'].map(type => (
            <div key={type} className="flex-1 space-y-1">
              <label className="block font-medium">
                {type === 'header' ? 'Header Font' : 'Body Font'}
              </label>
              <select
                value={themeData.fonts[type]}
                onChange={e => handleFontChange(type, e.target.value)}
                className="w-full bg-gray-100 dark:bg-gray-700 p-2 rounded"
              >
                {fontOptions.map(f => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted">Add these to your &lt;head&gt;:</p>
        <CodeBlock language="html" code={googleLinks} />

        <p className="text-sm text-muted">Then extend in <code>tailwind.config.js</code>:</p>
        <CodeBlock language="js" code={generateFontConfig} />
      </section>

      {/* 2. Color Pickers */}
      {['light','dark'].map(mode => (
        <section key={mode} className="space-y-4">
          <h2 className="text-2xl font-semibold capitalize">
            2. {mode} mode colors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(themeData.colors[mode]).map(([key,val]) => (
              <div key={key} className="space-y-1">
                <label className="block font-medium">{key}</label>
                <HexColorPicker
                  color={val}
                  onChange={c => handleColorChange(mode, key, c)}
                />
                <input
                  type="text"
                  value={val}
                  onChange={e => handleColorChange(mode, key, e.target.value)}
                  className="mt-1 w-full bg-gray-100 dark:bg-gray-700 p-1 rounded text-sm font-mono"
                />
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* 3. Generated theme.js */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">3. Generated <code>theme.js</code></h2>
        <CodeBlock language="js" code={generateThemeCode} />
      </section>

      {/* Save Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={saveSettings}
          className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
        >
          <Clipboard className="w-5 h-5" /> Save to LocalStorage
        </button>
        {saved && (
          <div className="flex items-center text-success gap-1">
            <Check className="w-5 h-5" /> Saved!
          </div>
        )}
      </div>
    </div>
  )
}
