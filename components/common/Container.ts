import { styled } from "../../styles/stitches.config";

export const Container = styled("section", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  overflow: "hidden",

  "@desktop": {
    flexDirection: "row",
    justifyContent: "space-between",

    "&::before": {
      position: "absolute",
      content: "<section>",
      fontFamily: "La Belle Aurore",
      fontSize: "1.2rem",
      fontStyle: "italic",
      color: "$gray100",
      fontWeight: 400,
      letterSpacing: 1,
      top: 80,
      left: 50,
    },
    "&::after": {
      position: "absolute",
      content: "</section>",
      fontFamily: "La Belle Aurore",
      fontSize: "1.2rem",
      fontStyle: "italic",
      color: "$gray100",
      fontWeight: 400,
      letterSpacing: 1,
      bottom: 80,
      left: 50,
    },
  },

  variants: {
    position: {
      direction: {
        flexDirection: "column",
        justifyContent: "center",
      },
    },
    after: {
      display: {
        "&::after, &::before": {
          display: "none",
        },
      },
    },
  },
});
