import React from "react";
import { styled } from "../../styles/stitches.config";

type ProgressBarProps = {
  size: string;
  color: string;
};

export const ProgressBar = ({ size, color }: ProgressBarProps) => {
  // @ts-ignore
  return <Progress_Bar css={{ width: size, backgroundColor: color }} />;
};

const Progress_Bar = styled("div", {
  height: 2,
});
