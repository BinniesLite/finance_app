/** @type {import('tailwindcss').Config} */

const labelsClasses = ['indigo', 'gray', 'green', 'blue', 'red', 'purple'];

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './public/index.html',
  ],
  //Because we made a dynamic class with the label we need to add those clases
  // to the safe list so the purge does not remove that
  safelist: [
    ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
    ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
    ...labelsClasses.map((lbl) => `text-${lbl}-400`),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans'],
      },
      gridTemplateColumns: {
        '1/5': '1fr 5fr',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
