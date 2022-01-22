import React, { Dispatch, SetStateAction, useEffect } from "react";
import { FirstProject } from "../FirstProject";
import { SecondProject } from "../SecondProject";
import { ThirdProject } from "../ThirdProject";
import { FourProject } from "../FourProject";
import { styled } from "../../../styles/stitches.config";

type ModalProps = {
  dataset: number | null;
  toggle: Dispatch<SetStateAction<number | null>>;
};

export const Modal = ({ dataset, toggle }: ModalProps) => {
  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.key === "Escape") toggle(null);
    });
  }, [toggle]);

  return (
    <ModalContainer onClick={() => toggle(null)}>
      {dataset === 1 ? (
        <FirstProject />
      ) : dataset === 2 ? (
        <SecondProject />
      ) : dataset === 3 ? (
        <ThirdProject />
      ) : dataset === 4 ? (
        <FourProject />
      ) : null}
    </ModalContainer>
  );
};

const ModalContainer = styled("article", {
  position: "absolute",
  top: "5vh",
  bottom: "15vh",
  left: "10vw",
  right: "10vw",
  padding: "$space6",
  backgroundColor: "$dark50",
  borderRadius: 20,
  zIndex: 100,
  overflow: "auto",

  "@tablet": {
    top: "10vh",
  },
});
