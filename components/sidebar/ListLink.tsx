import React from "react";
import Link from "next/link";
import { styled } from "../../styles/stitches.config";

export const ListLink = () => {
  return (
    <List>
      <li>
        <Link href="#about">
          <a>A propos</a>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <a>Mes compétences</a>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <a>Mes projets</a>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <a>Contact</a>
        </Link>
      </li>
    </List>
  );
};

const List = styled("ul", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "80px",

  "& li": {
    width: "100%",
    textAlign: "center",
    borderTop: "1px solid rgba(255, 255, 255, 0.05)",

    "& a": {
      display: "block",
      fontSize: "1rem",
      fontWeight: "600",
      transition: "all .3s",
      paddingInline: "$space3",
      paddingBlock: "$space4",

      "&:hover": {
        color: "$contrast",
      },
    },
  },
});
