import { styled } from "../../../styles/stitches.config";

export const ModalBody = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  marginTop: 50,

  "@tablet": {
    gridTemplateColumns: "1fr 1fr",
  },
});
