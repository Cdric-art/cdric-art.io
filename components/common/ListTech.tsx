import React from "react";
import { styled } from "../../styles/stitches.config";
import { keyframes } from "@stitches/react";

export const ListTech = () => {
  return (
    <Wrapper>
      <Item>SCSS</Item>
      <Item>CssInJS</Item>
      <Item>JavaScript</Item>
      <Item>React Js</Item>
      <Item>Vite Js</Item>
      <Item>Pnpm</Item>
      <Item>Git</Item>
      <Item>Insomnia</Item>
      <Item>PhpStorm</Item>
    </Wrapper>
  );
};

const animate = keyframes({
  "0%": {
    transform: "rotateY(0deg) rotateX(0deg) rotateZ(0deg)",
  },
  "50%": {
    transform: "rotateY(360deg) rotateX(360deg) rotateZ(360deg)",
  },
  "100%": {
    transform: "rotateY(720deg) rotateX(720deg) rotateZ(720deg)",
  },
});

const Wrapper = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  placeItems: "center",
  width: "85%",
  height: "85%",
  transformStyle: "preserve-3d",
  animationName: `${animate}`,
  animationDuration: "40s",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
});

const Item = styled("li", {
  border: "1px solid $contrast",
  padding: "$space2",
  transformStyle: "preserve-3d",
  animationName: `${animate}`,
  animationDuration: "20s",
  animationIterationCount: "infinite",
  animationTimingFunction: "ease-in-out",
  boxShadow: "1px 1px 3px 0 $contrast",
  fontSize: ".85rem",

  "@desktop": {
    fontSize: "1rem",
  },
});
