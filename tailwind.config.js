module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ['Barlow Semi Condensed', 'sans-serif'],
      },
      colors: {
        primary: {
          violet: 'hsl(263, 55%, 52%)',
          dark_grayish_blue: 'hsl(217, 19%, 35%)',
          dark_blackish_blue: 'hsl(219, 29%, 14%)',
        },
        neutral: {
          Light_gray: ' hsl(0, 0%, 81%)',
          Light_grayish_blue: 'hsl(210, 46%, 95%)',
        },
      },
    },
  },
  plugins: [],
};
