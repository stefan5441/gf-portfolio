module.exports = {
  theme: {
    extend: {
      keyframes: {
        spinOnce: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spinOnce: "spinOnce 0.7s ease-in-out",
      },
    },
  },
};
