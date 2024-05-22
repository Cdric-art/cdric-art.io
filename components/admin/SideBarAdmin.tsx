import React from "react";
import { styled } from "@stitches/react";
import LogoImage from "../../public/assets/icons/LogoC.png";

export const SideBarAdmin = () => {
  return (
    <Side_Bar>
      <Logo_container href="/">
        <img src={LogoImage.src} alt="Logo Cdric_art" />
        <h3>Cédric</h3>
        <h4>Développeur Web</h4>
      </Logo_container>
    </Side_Bar>
  );
};

const Side_Bar = styled("nav", {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100dvh",
  width: "180px",
  backgroundColor: "$dark100",
});

const Logo_container = styled("a", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& img": {
    height: "120px",
    width: "60px",
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
