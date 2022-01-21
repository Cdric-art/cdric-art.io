import React from "react";
import { styled } from "../../styles/stitches.config";
import { keyframes } from "@stitches/react";

type ScrollDownProps = {
  position: string;
};

export const ScrollDown = ({ position }: ScrollDownProps) => {
  return (
    // @ts-ignore
    <Wrapper position={position}>
      <span>scroll down</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
        <path d="M52.8 311.3a32.592 32.592 0 0 1 0-46.2c6.4-6.4 14.7-9.6 23.1-9.6s16.7 3.2 23.1 9.6l113.4 113.4V32.7c0-18 14.6-32.7 32.7-32.7 18 0 32.7 14.6 32.7 32.7v345.8L391 265.1c12.8-12.8 33.4-12.8 46.2 0 12.8 12.8 12.8 33.4 0 46.2L268.1 480.4c-6.1 6.1-14.4 9.6-23.1 9.6-8.7 0-17-3.4-23.1-9.6L52.8 311.3z" />
      </svg>
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
