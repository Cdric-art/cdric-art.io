import React from "react";
import { TitleModal } from "./modal/TitleModal";
import { WrapperImages } from "./modal/WrapperImages";
import { Text } from "../common/Text";
import { ModalBody } from "./modal/ModalBody";
import { ModalDescription } from "./modal/ModalDescription";
import { ModalInfo } from "./modal/ModalInfo";
import { LinkProject } from "./modal/LinkProject";
import { Pills } from "./modal/Pills";

import MoviesApp1 from "../../public/assets/images/movies-app1.png";
import MoviesApp2 from "../../public/assets/images/movies-app2.png";
import MoviesApp3 from "../../public/assets/images/movies-app3.png";

export const MoviesProject = () => {
  return (
    <article>
      <TitleModal name={"Movies App"} />
      <div style={{ padding: 20 }}>
        <WrapperImages>
          <img src={MoviesApp1.src} alt="MoviesApp 1" />
          <img src={MoviesApp2.src} alt="MoviesApp 2" />
          <img className={"img"} src={MoviesApp3.src} alt="MoviesApp3 3" />
        </WrapperImages>
        <ModalBody>
          <ModalDescription>
            <Text>
              Pas simple de trouver une équipe prête à vous donner une chance
              quand vous êtes développeur junior et encore plus par ces temps de
              Covid...
            </Text>
            <Text>
              J'ai crée ce projet pour :
              <ul>
                <li>M'exercer sur React et Stitches</li>
                <li>
                  Avoir un projet supplémentaire à présenter aux recruteurs
                </li>
              </ul>
            </Text>
          </ModalDescription>
          <ModalInfo>
            <Text>Année 2022</Text>
            <LinkProject href={"http://movies-app.cdric-art.me/"} />
            <p>
              <Pills name={"react"}>REACT</Pills>
              <Pills name={"native"}>STITCHES</Pills>
            </p>
          </ModalInfo>
        </ModalBody>
      </div>
    </article>
  );
};
