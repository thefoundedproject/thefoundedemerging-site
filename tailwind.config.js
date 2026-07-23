/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          night: '#0F1B1F',
          DEFAULT: '#1A3A42',
          light: '#2A5A66',
        },
        gold: {
          wheat: '#D8AB69',
          light: '#E8C88A',
          dark: '#B8894A',
        },
        // Warm-dark documentary palette ("Grounded & Human"), shared across the ecosystem.
        espresso: '#17110B',
        cocoa: '#241A11',
        ember: '#E0A45B',
        cream: '#EDE6D8',   // warm stone (was #F5F0E8)
        offwhite: '#FAFAF7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
