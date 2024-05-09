import { createStitches } from "@stitches/react";

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      white: "#cdd6f4",
      subtext: "#a6adc8",

      dark100: "#181825",
      dark75: "#1e1e2e",
      dark50: "#313244",
      dark25: "#45475a",

      gray100: "#6c7086",
      gray75: "#7f849c",
      gray50: "#9399b2",

      contrast: "#94e2d5",
      red: "#f38ba8",
      purple: "#cba6f7",
      yellow: "#f9e2af",
    },
    fonts: {
      "*": "Inter",
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
