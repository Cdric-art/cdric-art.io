import React from "react";
import { styled } from "../../../styles/stitches.config";

type TitleModalProps = {
  name: string;
};

export const TitleModal = ({ name }: TitleModalProps) => {
  return <Title>{name}</Title>;
};

const Title = styled("h3", {
  fontSize: "2rem",
  fontWeight: 600,
  letterSpacing: -1,
  marginLeft: 10,
});
