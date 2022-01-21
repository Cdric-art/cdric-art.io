import { styled } from "../../styles/stitches.config";

export const WrapperParagraphe = styled("div", {
  position: "relative",
  zIndex: 10,

  "&::before": {
    position: "absolute",
    content: "<p>",
    fontFamily: "La Belle Aurore",
    fontSize: "1.2rem",
    fontStyle: "italic",
    color: "$gray100",
    fontWeight: 400,
    letterSpacing: 1,
    top: -15,
    left: -25,
    "@desktop": {
      left: -30,
    },
  },

  "&::after": {
    position: "absolute",
    content: "</p>",
    fontFamily: "La Belle Aurore",
    fontSize: "1.2rem",
    fontStyle: "italic",
    color: "$gray100",
    fontWeight: 400,
    letterSpacing: 1,
    bottom: -20,
    left: -25,
    "@desktop": {
      left: -30,
      bottom: -30,
    },
  },
});
