import React from "react";
import { styled } from "../styles/stitches.config";
import { TitleAnimated } from "./common/TitleAnimated";
import { Strong } from "./common/Strong";
import { LinkTitle } from "./common/LinkTitle";
import { ScrollDown } from "./common/ScrollDown";

export const Home = () => {
  return (
    <Home_container>
      <Title_Container>
        <TitleAnimated />
        <TitleSecondary>Front End Developer / React</TitleSecondary>
        <LinkTitle text="Contactez moi!" />
      </Title_Container>
      <Strong text="Web" />
      <ScrollDown position="left" />
      <ScrollDown position="right" />
    </Home_container>
  );
};

const Home_container = styled("section", {
  position: "relative",
});

const Title_Container = styled("section", {
  paddingLeft: "7vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100vh",
});

const TitleSecondary = styled("h3", {
  position: "relative",
  color: "$gray75",
  fontSize: "1rem",
  fontWeight: 400,
  marginTop: 50,
  marginLeft: 5,
  letterSpacing: 1.5,

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
