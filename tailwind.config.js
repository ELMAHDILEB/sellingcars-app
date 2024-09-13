/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },

    extend: {
      backgroundImage: {
        'hero-pattern' : "url('../images/road.png')",
        'bg-bla' : "url('../khamsat/images/bg-bla.png')",
      },
      transitionProperty: {
        'width': 'width',

      },
      boxShadow: {
        'custom': '0px 0px 6px 0px rgba(0, 0, 0, 0.1)',
      },
   
      
    },
  },
  plugins: [],
}