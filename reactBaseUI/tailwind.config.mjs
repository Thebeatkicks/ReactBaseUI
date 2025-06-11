// tailwind.config.mjs
import { colors } from "./src/theme.js"

export default {
  darkMode: "class", // Enables manual toggle via `.dark` class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Automatically inject both light and dark color schemes
        background: colors.light.background,
        foreground: colors.light.foreground,
        muted: colors.light.muted,
        primary: colors.light.primary,
        secondary: colors.light.secondary,
        success: colors.light.success,
        warning: colors.light.warning,
        danger: colors.light.danger,

        // Dark mode variants (used with `dark:` prefix)
        dark: {
          background: colors.dark.background,
          foreground: colors.dark.foreground,
          muted: colors.dark.muted,
          primary: colors.dark.primary,
          secondary: colors.dark.secondary,
          success: colors.dark.success,
          warning: colors.dark.warning,
          danger: colors.dark.danger,
        },
      },
      fontFamily: {
        // Optional: Default to Poppins, fallback sans-serif
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
