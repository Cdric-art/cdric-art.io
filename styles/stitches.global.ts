import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  "html, body": {
    height: "100%",
    margin: 0,
  },
  body: {
    fontFamily: "Overpass",
    backgroundColor: "$dark75",
    lineHeight: 1.5,
    color: "$white",
    webkitFontSmoothing: "antialiased",
  },
  html: {
    scrollBehavior: "smooth",
  },
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },
  "input, button, textarea, select": {
    font: "inherit",
  },
  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },
  "#root, #__next": {
    isolation: "isolate",
  },
  "h3, h4": {
    margin: 0,
  },
  a: {
    textDecoration: "none",
    color: "inherit",
  },
  ul: {
    listStyle: "none",
    padding: 0,
  },
  "::-webkit-scrollbar": {
    width: 4,
    height: 5,
  },
  "::-webkit-scrollbar-track": {
    background: "$gray50",
    padding: 1,
  },
  "::-webkit-scrollbar-thumb": {
    background: "$contrast",
    borderRadius: 4,
  },
});
