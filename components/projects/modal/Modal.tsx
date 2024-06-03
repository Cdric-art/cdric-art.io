import React, { Dispatch, SetStateAction, useEffect } from "react";
import { WhireProject } from "../WhireProject";
import { MoviesProject } from "../MoviesProject";
import { ArtisteProject } from "../ArtisteProject";
import { CardWhireProject } from "../CardWhireProject";
import { styled } from "../../../styles/stitches.config";
import { CompteProject } from "../CompteTaCaisseProject";

type ModalProps = {
  dataset: number | null;
  toggle: Dispatch<SetStateAction<number | null>>;
};

export const Modal = ({ dataset, toggle }: ModalProps) => {
  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      if (e.key === "escape") toggle(null);
    });
  }, [toggle]);

  return (
    <ModalContainer onClick={() => toggle(null)}>
      {dataset === 5 ? (
        <CompteProject />
      ) : dataset === 1 ? (
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

const ModalContainer = styled("div", {
  position: "absolute",
  top: "25vh!important",
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
