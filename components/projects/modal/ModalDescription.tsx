import React, { ReactNode } from "react";
import { styled } from "../../../styles/stitches.config";

type ModalDescriptionProps = {
  children: ReactNode;
};

export const ModalDescription = ({ children }: ModalDescriptionProps) => {
  return (
    <div>
      <Title>Description :</Title>
      {children}
    </div>
  );
};

const Title = styled("h3", {
  color: "$contrast",
  fontSize: "1.5rem",
});
