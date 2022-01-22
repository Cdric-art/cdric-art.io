import React from "react";
import { styled } from "../../styles/stitches.config";
import { keyframes, VariantProps } from "@stitches/react";
import { ArrowIcon } from "../svg";

type ScrollDownProps = {
  position: VariantProps<HTMLDivElement>;
};

export const ScrollDown = ({ position }: ScrollDownProps) => {
  return (
    <Wrapper position={position}>
      <span>scroll down</span>
      <ArrowIcon />
    </Wrapper>
  );
};

const animation = keyframes({
  "0%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(-15px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
});

const Wrapper = styled("div", {
  position: "absolute",
  top: "85vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 14,
  opacity: 0,

  "& span": {
    color: "$white",
    writingMode: "vertical-rl",
    paddingLeft: 2,
    animationName: animation,
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
  },

  "& svg": {
    fill: "$white",
    width: 10,
    marginTop: 10,
  },

  variants: {
    position: {
      left: {
        left: 5,
      },
      right: {
        right: 5,
      },
    },
  },

  "@tablet": {
    opacity: 1,
  },
});
