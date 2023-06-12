/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {colors: {
      'card-color': '#EAEDED',
      'btn-color':'#1b58de4d',
      'head-color':'#2f75f5',
      'top-banner':'#1d1d37',
      'line-color':"#1615157a"
    },
    screens: {
      'xsm':{'min':'240px','max':'400px'},
     
    },}
   
  },
  plugins: [require('flowbite/plugin') ],
}

