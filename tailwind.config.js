/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        // Aether Carbon Design System
        'aether-bg': '#0e0e0e',
        'aether-surface': '#131313',
        'aether-surface-high': '#201f1f',
        'aether-surface-highest': '#262626',
        'aether-primary': '#69daff',
        'aether-primary-container': '#00cffc',
        'aether-secondary': '#17c0fd',
        'aether-text': '#ffffff',
        'aether-text-secondary': '#adaaaa',
        'aether-error': '#ff716c',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        'aether': '4px', // ROUND_FOUR
      },
    },
  },
  plugins: [],
}
