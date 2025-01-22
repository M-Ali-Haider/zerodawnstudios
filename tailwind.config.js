/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    transitionTimingFunction: {
      "olivier-ease": "cubic-bezier(0.76,0,0.24,1)",
    },
    screens: {
      ml: "420px",
      xs: "550px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        suisseIntl: ["var(--font-suisseIntl)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        testimonialBorder:
          "linear-gradient(292.19deg, rgba(186, 186, 186, 0.3) 0%, rgba(62, 62, 62, 0.3) 100%)",
      },
    },
  },
  plugins: [],
};
