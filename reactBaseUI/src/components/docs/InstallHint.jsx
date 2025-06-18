// src/components/docs/InstallHint.jsx
import React from "react"

/**
 * Visar var komponenten ska placeras.
 *
 * @param {string} name - Filnamnet (t.ex. "Badge.jsx")
 * @param {string} path - Mappsökväg under src (t.ex. "/components/ui")
 */
export default function InstallHint({ name, path }) {
  return (
    <p className="text-sm text-muted">
      <strong>File:</strong>{" "}
      <code className="bg-muted/10 px-1 rounded">
        src{path}/{name}
      </code>
    </p>
  )
}
