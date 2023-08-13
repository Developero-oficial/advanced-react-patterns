import { DefaultTheme } from "styled-components";

export const appTheme: DefaultTheme = {
  fonts: {
    primary: "'Roboto', sans-serif",
    secondary: "'Source Code Pro', monospace",
  },
  colors: {
    primary: "#FF79C6", // Pink
    secondary: "#8BE9FD", // Cyan
    tertiary: "#BD93F9", // Purple
    quaternary: "#50FA7B", // Green
    text: "#F8F8F2", // Light Gray
    comment: "#6272A4", // Grayish Blue
    highlight: "#44475A", // Darker Grayish Blue
  },
  backgrounds: {
    primary: "#282A36", // Background
    secondary: "#383A59", // Darker Background
    tertiary: "#3B3D63", // Even Darker Background
    quaternary: "#1D1F27", // Darkest Background
  },
  buttons: {
    primary: "#50FA7B",
    hover: "#5AF881",
    active: "#41E06B",
    disabled: "#306430",
  },
};
