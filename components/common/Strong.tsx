import React from "react";
import { styled } from "../../styles/stitches.config";

type StrongProps = {
  text: string;
};

export const Strong = ({ text }: StrongProps) => {
  return <Text_Strong>{text}</Text_Strong>;
};

const Text_Strong = styled("div", {
  position: "absolute",
  top: "80vh",
  right: "5vw",
  color: "$gray100",
  fontWeight: 700,
  fontSize: "10rem",
  letterSpacing: -15,
  opacity: "0.2",

  "@tablet": {
    fontSize: "20rem",
    top: "60vh",
    letterSpacing: -35,
  },

  "@desktop": {
    fontSize: "28rem",
    top: "50vh",
    letterSpacing: -45,
  },
});
