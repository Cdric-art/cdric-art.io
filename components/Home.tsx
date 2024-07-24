import React from "react";
import { styled } from "../styles/stitches.config";
import { TitleAnimated } from "./common/TitleAnimated";
import { Strong } from "./common/Strong";
import { LinkTitle } from "./common/LinkTitle";
import { ScrollDown } from "./common/ScrollDown";
import { HomeSvg } from "./svg";

export const Home = () => {
  return (
    <Home_container>
      <Title_Container>
        <TitleAnimated />
        <TitleSecondary>Front End Developer / React</TitleSecondary>
        <LinkTitle text="Contactez moi!" />
      </Title_Container>
      <Svg_Container>
        <HomeSvg />
      </Svg_Container>
      <Strong text="Web" />
      <ScrollDown position="left" />
      <ScrollDown position="right" />
    </Home_container>
  );
};

const Home_container = styled("section", {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$space4",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",

  "@desktop": {
    gridTemplateColumns: "1fr 1fr",
  },
});

const Title_Container = styled("section", {
  paddingLeft: "7vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const Svg_Container = styled("div", {
  display: "none",
  maxHeight: "400px",

  "@desktop": {
    display: "block",
    paddingRight: "$space8",
  },
});

const TitleSecondary = styled("h3", {
  position: "relative",
  color: "$subtext",
  fontSize: "1rem",
  fontWeight: 600,
  marginTop: 50,
  marginLeft: 5,
  letterSpacing: 0,

  "&::before": {
    position: "absolute",
    content: "<h3>",
    fontFamily: "La Belle Aurore",
    fontSize: "1.2rem",
    fontStyle: "italic",
    color: "$gray100",
    fontWeight: 400,
    letterSpacing: 1,
    top: -25,
    left: -10,
    "@desktop": {
      left: -30,
    },
  },
  "&::after": {
    position: "absolute",
    content: "</h3>",
    fontFamily: "La Belle Aurore",
    fontSize: "1.2rem",
    fontStyle: "italic",
    color: "$gray100",
    fontWeight: 400,
    letterSpacing: 1,
    bottom: -25,
    left: -10,
    "@desktop": {
      left: -30,
      bottom: -30,
    },
  },
});
