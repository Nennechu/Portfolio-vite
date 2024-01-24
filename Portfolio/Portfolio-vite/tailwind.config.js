
/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
 ],
 theme: {
    extend: {
      backgroundColor: {
        'neon': '#A1CCA5',
        'neon1': '#8FB996',
        'neon2': '#709775',
        'neon3': '#415D43',
        'neon4': '#111D13',
        'neon5': '#273c2f',
        'neon6': '#efeaa5',
      },
      textColor: {
        'neon': '#f1f8e9',
        'neon6': '#efeaa5',
        'tangerine': '#F28500',
      },
      fontFamily:{
        'josefin':['Josefin','sans-serif'],
        'open':['Open','sans-serif'],
      },
    },
 },
 plugins: [],
}