/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{html,js,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'webblue': '#547CEF',
        'textblue': '#1254FF',
        'webpink': '#FF00E5',
        'webgray': '#F4F4F4',
        'gradblue': '#456CD4',
        'gradlightblue': '#6F96FF',
      },
      fontFamily: {
        'satoshi': "Satoshi-Variable",
        'DMSans': "DMSans",
        'poppins': "Poppins",
        'steelfish': 'SteelfishRg',
      },
    },
  },
  plugins: [],
});