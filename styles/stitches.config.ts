import { createStitches } from "@stitches/react";

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      white: "#FFF",

      dark100: "#181818",
      dark75: "#1d1d1d",
      dark50: "#282828",
      dark25: "#373737",

      gray100: "#515152",
      gray75: "#8d8d8d",
      gray50: "#909096",

      contrast: "#08fdd8",
      red: "rgb(255, 34, 83)",
      purple: "rgb(210, 108, 213)",
      yellow: "#fdb808",
    },
    fonts: {
      "*": "Overpass",
    },
    space: {
      space1: "4px",
      space2: "8px",
      space3: "12px",
      space4: "16px",
      space5: "20px",
      space6: "24px",
      space7: "28px",
      space8: "32px",
    },
  },
  media: {
    tablet: "(min-width: 480px)",
    desktop: "(min-width: 820px)",
    full: "(min-width: 1080px)",
  },
});
