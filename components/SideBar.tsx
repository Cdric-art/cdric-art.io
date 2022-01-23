import React from "react";
import { styled } from "../styles/stitches.config";

import { ListLink } from "./sidebar/ListLink";
import { ListSocial } from "./sidebar/ListSocial";

import LogoImage from "../public/assets/icons/LogoC.png";

export const SideBar = () => {
  return (
    <Side_Bar>
      <Logo_container href="/">
        <img src={LogoImage.src} alt="logo" />
        <h3>Cédric</h3>
        <h4>Développeur Web</h4>
      </Logo_container>
      <ListLink />
      <ListSocial />
    </Side_Bar>
  );
};

const Side_Bar = styled("nav", {
  display: "none",
  "@desktop": {
    display: "initial",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    backgroundColor: "$dark100",
  },
});

const Logo_container = styled("a", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "black",
  "& img": {
    height: 120,
    width: 50,
    marginTop: "$space3!important",
    objectFit: "contain",
  },
  "& h3": {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "white",
  },
  "& h4": {
    fontSize: ".8rem",
    fontWeight: "600",
    color: "$gray50",
    padding: "$space3",
  },
});
