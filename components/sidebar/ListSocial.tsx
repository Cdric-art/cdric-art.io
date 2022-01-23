import React from "react";
import Link from "next/link";
import { styled } from "../../styles/stitches.config";
import { GitHubIcon, TwitterIcon } from "../svg";

export const ListSocial = () => {
  return (
    <List>
      <li>
        <Link href="https://github.com/Cdric-art">
          <a target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com/Cdric_art">
          <a target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
        </Link>
      </li>
    </List>
  );
};

const List = styled("ul", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "50%",
  margin: "80px auto 0 auto",

  "& svg": {
    width: 24,
    transition: "all .3s",

    "&:hover": {
      color: "$contrast",
    },
  },
});
