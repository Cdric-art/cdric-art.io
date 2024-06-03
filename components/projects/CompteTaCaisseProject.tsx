import React from "react";
import { TitleModal } from "./modal/TitleModal";
import { WrapperImages } from "./modal/WrapperImages";
import { Text } from "../common/Text";
import { ModalBody } from "./modal/ModalBody";
import { ModalDescription } from "./modal/ModalDescription";
import { ModalInfo } from "./modal/ModalInfo";
import { LinkProject } from "./modal/LinkProject";
import { Pills } from "./modal/Pills";

import Compte1 from "../../public/assets/images/CompteTaCaisse.png";
import Compte2 from "../../public/assets/images/CompteTaCaisse-White.png";
import Compte3 from "../../public/assets/images/CompteTaCaisse-Dark.png";

export const CompteProject = () => {
  return (
    <article>
      <TitleModal name={"Compte Ta Caisse"} />
      <div style={{ padding: 20 }}>
        <WrapperImages>
          <img src={Compte1.src} alt="Compte 1" />
          <img src={Compte2.src} alt="Compte 2" />
          <img className={"img"} src={Compte3.src} alt="Compte 3" />
        </WrapperImages>
        <ModalBody>
          <ModalDescription>
            <Text>
              Cette année j'ai décidé d'en apprendre un peu plus sur le développement
              d'application mobile, notamment sur Ios.
              Après avoir appris les bases du Swift et SwiftUI, quoi de mieux qu'un vrai projet pour se perfectionner ?
              Étant dans les métiers de la restauration depuis toujours,
              j'ai réfléchi à une application qui pourrait m'être utile dans mon métier
              et qui serait également intéressante à developper. Voici comment est née ma toute première application Ios !
            </Text>
            <Text>
              Comptez votre caisse plus facilement et rapidement !
              Compte Ta Caisse est une petite application utilitaire
              qui vous permet de faire votre fond de caisse et de compter votre caisse
              plus rapidement et facilement, le tout en minimisant les erreurs de calculs.
              Cette application est principalement destinée aux professionnels du CHR et aux petits commerçants.
            </Text>
          </ModalDescription>
          <ModalInfo>
            <Text>2023</Text>
            <LinkProject href={"https://apps.apple.com/fr/app/compte-ta-caisse/id6450926212?platform=iphone"} />
            <p>
              <Pills name={"html"}>SWIFT</Pills>
              <Pills name={"scss"}>SWIFT UI</Pills>
            </p>
          </ModalInfo>
        </ModalBody>
      </div>
    </article>
  );
};
