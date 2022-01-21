import { styled } from "../../styles/stitches.config";

export const Container = styled("section", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",

  "@desktop": {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
