import React from "react";

import { styled } from "../../styles/stitches.config";
import { keyframes } from "@stitches/react";

export const TitleAnimated = () => {
  return (
    <Title>
      <span>H</span>
      <span>i</span>
      <span>,</span>
      <br />
      <span>I</span>
      <span>'</span>
      <span>m&nbsp;</span>
      <span>C</span>
      <span>é</span>
      <span>d</span>
      <span>r</span>
      <span>i</span>
      <span>c</span>
      <br />
      <span>w</span>
      <span>e</span>
      <span>b&nbsp;</span>
      <span>d</span>
      <span>e</span>
      <span>v</span>
      <span>e</span>
      <span>l</span>
      <span>o</span>
      <span>p</span>
      <span>e</span>
      <span className="test">r</span>
    </Title>
  );
};

const bounce = keyframes({
  "0%": {
    transform: "scale(1, 1)",
  },
  "25%": {
    transform: "scale(1.3, 0.6)",
  },

  "50%": {
    transform: "scale(1.2, 0.8)",
    color: "$contrast",
  },
  "100%": {
    transform: "scale(1, 1)",
  },
});
const bounceLight = keyframes({
  "0%": {
    transform: "scale(1, 1)",
  },
  "50%": {
    transform: "scale(1.3, 0.7)",
  },
  "100%": {
    transform: "scale(1, 1)",
  },
});

const Title = styled("h1", {
  position: "relative",
  fontSize: "3.1rem",
  letterSpacing: "-1px",
  fontWeight: 900,
  lineHeight: 1,
  margin: 0,
  color: "transparent",
  backgroundImage: "linear-gradient(120deg, #fab387, #cba6f7)",
  backgroundClip: "text",
  "@tablet": {
    fontSize: "4.5rem",
  },

  "& span": {
    display: "inline-block",
    transition: "all .3s",
    animationName: bounce,
    animationDelay: ".5s",
    animationDuration: ".8s",
    animationTimingFunction: "linear",
  },

  "& span:hover": {
    color: "$contrast",
    animationName: bounceLight,
    animationDuration: ".3s",
    animationTimingFunction: "linear",
  },

  "&::before": {
    position: "absolute",
    content: "<h1>",
    fontFamily: "La Belle Aurore",
    fontSize: "1.1rem",
    fontStyle: "italic",
    color: "$gray100",
    fontWeight: 400,
    letterSpacing: 1,
    top: -25,
    left: -10,
    "@desktop": {
      fontSize: "1.3rem",
      left: -30,
    },
  },
  "&::after": {
    position: "absolute",
    content: "</h1>",
    fontFamily: "La Belle Aurore",
    fontSize: "1.1rem",
    color: "$gray100",
    fontWeight: 400,
    letterSpacing: 1,
    bottom: -25,
    left: -10,
    "@tablet": {
      bottom: -20,
    },
    "@desktop": {
      fontSize: "1.3rem",
      left: -30,
    },
  },
});
