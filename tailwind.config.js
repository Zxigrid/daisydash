/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'grey-steel': '#979797',
        'graphite': 'oklch(var(--graphite) / <alpha-value>)'
      },
      boxShadow: {
        'default': '0 0 15px',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        dashLight: {
          primary: "#3661EB",
          secondary: "#D24FCE",
          accent: "#FF589D",
          neutral: "#FFFFFF",
          "base-100": "#F4F4FF",
          info: "#0CD0C4",
          success: "#1CE50B",
          warning: "#E5B60B",
          error: "#E41212",
          '--graphite': "#303030",
        },
        dashDark: {
          primary: "#325ADB",
          secondary: "#D24FCE",
          accent: "#FF589D",
          neutral: "#222127",
          "base-100": "#2E2C39",
          info: "#0CD0C4",
          success: "#1CE50B",
          warning: "#E5B60B",
          error: "#E41212",
          '--graphite': "#D6D6D6",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
