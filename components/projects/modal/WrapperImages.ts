import { styled } from "../../../styles/stitches.config";

export const WrapperImages = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridGap: "$space4",

  "@tablet": {
    gridTemplateColumns: "1fr 1fr",
    "& span:last-child": {
      gridColumn: "span 2!important",
      justifySelf: "center!important",
      width: "50%!important",
    },
  },

  "@desktop": {
    gridGap: "$space8",
  },
});
