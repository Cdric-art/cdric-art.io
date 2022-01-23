import React from "react";
import { TitleModal } from "./modal/TitleModal";
import { WrapperImages } from "./modal/WrapperImages";
import { ModalBody } from "./modal/ModalBody";
import { ModalDescription } from "./modal/ModalDescription";
import { Text } from "../common/Text";
import { ModalInfo } from "./modal/ModalInfo";
import { LinkProject } from "./modal/LinkProject";
import { Pills } from "./modal/Pills";

import CardWhire1 from "../../public/assets/images/card-whire.png";
import CardWhire2 from "../../public/assets/images/card-whire1.png";
import CardWhire3 from "../../public/assets/images/card-whire2.png";

export const ThirdProject = () => {
  return (
    <article>
      <TitleModal name={"Card Whire"} />
      <div style={{ padding: 20 }}>
        <WrapperImages>
          <img src={CardWhire1.src} alt="CardWhire1" />
          <img src={CardWhire2.src} alt="CardWhire1" />
          <img className={"img"} src={CardWhire3.src} alt="CardWhire1" />
        </WrapperImages>
        <ModalBody>
          <ModalDescription>
            <Text>
              Whire propose aux candidats de créer leurs cartes de visite afin
              de partager plus efficacement et simplement son profil.
            </Text>
            <Text>
              Mais utiliser Google Slide pour créer sa carte n'est pas très
              pratique ni rapide. J'ai donc pensé et crée cette application qui
              permet de le faire très facilement avec des options de
              personnalisation. Une fois terminée, le candidat peut imprimer et
              télécharger sa carte d'un simple clic.
            </Text>
          </ModalDescription>
          <ModalInfo>
            <Text>Année 2021</Text>
            <LinkProject href={"http://card-whire.cdric-art.me/"} />
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
