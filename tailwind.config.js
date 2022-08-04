/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'backgroundHeader': '#00abc1',
        
    },
    spacing: {
      '30': '30vh;',
      '60': '60vh;',
      '50': '50px;',
      '60': '60px;',
      '80': '80px;',
      '90': '90px;',
      '120': '120px;',
      '97': '97%;',
      '250': '250px;',
      '288': '288px;',
      '300': '300px;',
      '380': '380px;',
      '600': '600px;',
    },
    gridTemplateColumns: {
      // Simple 16 column grid
      '16': 'repeat(auto-fit, 300px)',
    },
  },
  plugins: [],
}

}