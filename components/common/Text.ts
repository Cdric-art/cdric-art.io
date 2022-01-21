import { styled } from "../../styles/stitches.config";

export const Text = styled("article", {
  fontSize: ".8rem",
  fontWeight: 400,
  lineHeight: 1.8,
  paddingBlock: "$space3",

  "& span, & span a": {
    color: "$contrast",
  },

  "& span a": {
    textDecoration: "underline",
  },

  "@tablet": {
    fontSize: ".95rem",
  },
});
