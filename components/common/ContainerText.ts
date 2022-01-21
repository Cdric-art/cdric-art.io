import { styled } from "../../styles/stitches.config";

export const ContainerText = styled("article", {
  paddingLeft: "7vw",
  paddingRight: "7vw",
  maxWidth: "100%",

  "@desktop": {
    maxWidth: "45%",
    paddingRight: 0,
    marginTop: 0,
  },

  variants: {
    size: {
      large: {
        "@desktop": {
          maxWidth: "80%",
        },
      },
    },
  },
});
