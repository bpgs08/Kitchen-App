import { css } from "styled-components";

export const space = [
  "0px",
  "5px",
  "10px",
  "15px",
  "20px",
  "25px",
  "30px",
  "35px",
  "45px",
  "50px",
  "55px",
  "60px",
  "65px",
];

export const fontSizes = ["12px", "15px", "20px", "25px", "40px"];

export const sizes = {
  reallySmall: ["max", 380],
  phoneLandscape: ["min", 576],
  tablet: ["min", 768],
  desktop: ["min", 992],
  large: ["min", 1200],
  larger: ["min", 1440],
  fullscreen: ["min", 1600],
  fullHd: ["min", 1920],
  ultrawide: ["min", 2560],
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (${sizes[label][0]}-width: ${sizes[label][1]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const theme = {
  colors: {
    buttonBackground: "#FBFBFB",
    buttonBorder: "#F0EDED",
    blue: "#23408A",
    black: "#222222",
    green: "#3B8448",
    grey: "#9B9B9B;",
    grey2: "#666666",
    grey3: "#CCCCCC",
    grey4: "#F5F5F5",
    white: "#FFFFFF",
  },
};

export const colors = theme.colors;
export default theme;
