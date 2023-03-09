export const theme = Object.freeze({
  colors: {
    accent: "#62002f",
    white: "#ffffff",
    grey: "rgba(161, 171, 181, 0.6)",
    light: "#898989",
    dark: "#323232",
    mainBackground: "#DDD0C8",
    tagBackground: ["linear-gradient(to bottom, #FFD194, #D1913C)"],
  },
  fontSizes: {
    small: "14px",
    medium: "18px",
    large: "22px",
  },
  spacing: (value) => `${4 * value}px`,
  shadows: {
    small: "0 5px 7px -1px rgba(51, 51, 51, 0.23)",
    regular: "0px 4px 10px 4px #9e9e9e",
    medium: "0 9px 47px 11px rgba(51, 51, 51, 0.18);",
  },
  animation: {
    cubicBezier: "0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)",
  },
  media: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1280px",
  },
});
