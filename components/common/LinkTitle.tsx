import React from "react";
import Link from "next/link";
import { styled } from "../../styles/stitches.config";

type LinkProps = {
  text: string;
};

export const LinkTitle = ({ text }: LinkProps) => {
  return (
    <Link_Title>
      <Link href="/#contact">{text}</Link>
    </Link_Title>
  );
};

const Link_Title = styled("div", {
  display: "block",
  marginTop: 50,
  background: "none",
  marginLeft: 5,
  zIndex: 10,

  "& a": {
    position: "relative",
    display: "inline-block",
    fontSize: ".8rem",
    letterSpacing: 4,
    color: "$contrast",
    border: "1px solid $contrast",
    padding: "14px 36px",
    lineHeight: 1,
    transition: "all .3s",
  },

  "& a::after": {
    position: "absolute",
    content: "",
    top: "0",
    left: "0",
    width: "0",
    height: "100%",
    transition: "all .4s",
    backgroundColor: "$contrast",
    zIndex: -1,
  },

  "& a:hover": {
    color: "black",
  },

  "& a:hover::after": {
    width: "100%",
  },
});
