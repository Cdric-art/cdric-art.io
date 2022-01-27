import React from "react";
import { TitleModal } from "./modal/TitleModal";
import { WrapperImages } from "./modal/WrapperImages";
import { Text } from "../common/Text";
import { ModalBody } from "./modal/ModalBody";
import { ModalDescription } from "./modal/ModalDescription";
import { ModalInfo } from "./modal/ModalInfo";
import { LinkProject } from "./modal/LinkProject";
import { Pills } from "./modal/Pills";

import Whire1 from "../../public/assets/images/whire1.png";
import Whire2 from "../../public/assets/images/whire2.png";
import Whire3 from "../../public/assets/images/whire3.png";

export const WhireProject = () => {
  return (
    <article>
      <TitleModal name={"Whire"} />
      <div style={{ padding: 20 }}>
        <WrapperImages>
          <img src={Whire1.src} alt="Whire 1" />
          <img src={Whire2.src} alt="Whire 2" />
          <img className={"img"} src={Whire3.src} alt="Whire 3" />
        </WrapperImages>
        <ModalBody>
          <ModalDescription>
            <Text>
              Après plus de 4 mois passé dans les rangs de la team Whire, je
              reprends la route à la recherche d'une nouvelle équipe avec
              laquelle je continuerai à apprendre et à m'épanouir dans ma
              nouvelle carrière.
            </Text>
            <Text>
              Une immense fierté d'avoir développé le nouveau site Whire,
              d'avoir participé au développement de nouvelles fonctionnalités de
              la plateforme et tant d'autres choses. Une équipe tout au moins
              aussi incroyable que ce que crée Whire... : De belles rencontres !
            </Text>
          </ModalDescription>
          <ModalInfo>
            <Text>Année 2020 - 2021</Text>
            <LinkProject href={"https://www.whire.me"} />
            <p>
              <Pills name={"html"}>HTML</Pills>
              <Pills name={"scss"}>SCSS</Pills>
              <Pills name={"react"}>REACT</Pills>
            </p>
          </ModalInfo>
        </ModalBody>
      </div>
    </article>
  );
};
