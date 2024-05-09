import React, { Dispatch, SetStateAction, useEffect } from "react";
import { WhireProject } from "../WhireProject";
import { MoviesProject } from "../MoviesProject";
import { ArtisteProject } from "../ArtisteProject";
import { CardWhireProject } from "../CardWhireProject";
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
        <WhireProject />
      ) : dataset === 2 ? (
        <MoviesProject />
      ) : dataset === 3 ? (
        <ArtisteProject />
      ) : dataset === 4 ? (
        <CardWhireProject />
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
