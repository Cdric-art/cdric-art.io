import React from "react";
import { styled } from "../../styles/stitches.config";
import { VariantProps } from "@stitches/react";

export const GitHubIcon = () => {
  return (
    <svg fill="currentColor" viewBox="0 0 26 26">
      <path d="M10.9 2.1c-4.6.5-8.3 4.2-8.8 8.7-.5 4.7 2.2 8.9 6.3 10.5.3.1.6-.1.6-.5v-1.6s-.4.1-.9.1c-1.4 0-2-1.2-2.1-1.9-.1-.4-.3-.7-.6-1-.3-.1-.4-.1-.4-.2 0-.2.3-.2.4-.2.6 0 1.1.7 1.3 1 .5.8 1.1 1 1.4 1 .4 0 .7-.1.9-.2.1-.7.4-1.4 1-1.8-2.3-.5-4-1.8-4-4 0-1.1.5-2.2 1.2-3-.1-.2-.2-.7-.2-1.4 0-.4 0-1 .3-1.6 0 0 1.4 0 2.8 1.3.5-.2 1.2-.3 1.9-.3s1.4.1 2 .3C15.3 6 16.8 6 16.8 6c.2.6.2 1.2.2 1.6 0 .8-.1 1.2-.2 1.4.7.8 1.2 1.8 1.2 3 0 2.2-1.7 3.5-4 4 .6.5 1 1.4 1 2.3v2.6c0 .3.3.6.7.5 3.7-1.5 6.3-5.1 6.3-9.3 0-6-5.1-10.7-11.1-10z" />
    </svg>
  );
};

export const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 490 490"
    >
      <path d="M52.8 311.3a32.592 32.592 0 0 1 0-46.2c6.4-6.4 14.7-9.6 23.1-9.6s16.7 3.2 23.1 9.6l113.4 113.4V32.7c0-18 14.6-32.7 32.7-32.7 18 0 32.7 14.6 32.7 32.7v345.8L391 265.1c12.8-12.8 33.4-12.8 46.2 0 12.8 12.8 12.8 33.4 0 46.2L268.1 480.4c-6.1 6.1-14.4 9.6-23.1 9.6-8.7 0-17-3.4-23.1-9.6L52.8 311.3z" />
    </svg>
  );
};

type ArrowProps = {
  position: VariantProps<SVGElement>;
};

export const ArrowVariants = ({ position }: ArrowProps) => {
  return (
    <Arrow
      position={position}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490 490"
    >
      <path d="M52.8 311.3a32.592 32.592 0 0 1 0-46.2c6.4-6.4 14.7-9.6 23.1-9.6s16.7 3.2 23.1 9.6l113.4 113.4V32.7c0-18 14.6-32.7 32.7-32.7 18 0 32.7 14.6 32.7 32.7v345.8L391 265.1c12.8-12.8 33.4-12.8 46.2 0 12.8 12.8 12.8 33.4 0 46.2L268.1 480.4c-6.1 6.1-14.4 9.6-23.1 9.6-8.7 0-17-3.4-23.1-9.6L52.8 311.3z" />
    </Arrow>
  );
};

export const Arrow = styled("svg", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "$contrast",

  variants: {
    position: {
      left: {
        transform: "rotate(85deg)",
        webkitTransform: "rotate(85deg)",
      },
      right: {
        transform: "rotate(-85deg)",
        webkitTransform: "rotate(-85deg)",
      },
    },
  },
});
