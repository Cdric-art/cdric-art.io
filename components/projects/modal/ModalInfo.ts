import { styled } from "../../../styles/stitches.config";

export const ModalInfo = styled("div", {
  alignSelf: "center",
  justifySelf: "center",
  textAlign: "center",

  p: {
    maxWidth: 250,
  },

  "@tablet": {
    marginLeft: "$space8",
  },
});
