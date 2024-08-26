/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],  
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'logo-red':'#E25050',
        'logo-magenta':'#BC66FF',
        'button-blue':'#2178C9',
        'button-purple':"#8F02C0",
      },
      gridTemplateColumns: {
        '5': 'repeat(5, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
};
