// src/theme.js

export const colors = {
  // Light mode color palette
  light: {
    // Background and surface layers
    background: "#ffffff",      // Base background
    foreground: "#1e1e1e",      // Main text
    muted: "#6b7280",           // Subtle text or muted sections (gray-500)

    // Accent & feedback colors
    primary: "#7c3aed",         // Purple – used for buttons, links, highlights
    secondary: "#10b981",       // Emerald – secondary actions
    success: "#22c55e",         // Green – success messages/icons
    warning: "#f59e0b",         // Amber – warning messages
    danger: "#ef4444",          // Red – errors or destructive actions
  },

  // Dark mode color palette
  dark: {
    background: "#1e1f22",      // Deep gray/black (Discord dark)
    foreground: "#f2f3f5",      // Primary readable text on dark background
    muted: "#9ca3af",           // Subtle text or muted components (gray-400)

    primary: "#8b5cf6",         // Slightly lighter purple for better contrast
    secondary: "#34d399",       // Bright green (tealish)
    success: "#4ade80",         // Light green
    warning: "#fbbf24",         // Bright amber
    danger: "#f87171",          // Soft red
  },
}
