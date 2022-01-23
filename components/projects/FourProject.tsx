import React from "react";
import { TitleModal } from "./modal/TitleModal";
import { WrapperImages } from "./modal/WrapperImages";
import { ModalBody } from "./modal/ModalBody";
import { ModalDescription } from "./modal/ModalDescription";
import { Text } from "../common/Text";
import { ModalInfo } from "./modal/ModalInfo";
import { LinkProject } from "./modal/LinkProject";
import { Pills } from "./modal/Pills";

import Calculate1 from "../../public/assets/images/calculate.png";
import Calculate2 from "../../public/assets/images/calculate1.png";
import Calculate3 from "../../public/assets/images/calculate2.png";

export const FourProject = () => {
  return (
    <article>
      <TitleModal name={"Calculate App"} />
      <div style={{ padding: 20 }}>
        <WrapperImages>
          <img src={Calculate1.src} alt="Calculate 1" />
          <img src={Calculate2.src} alt="Calculate 2" />
          <img className={"img"} src={Calculate3.src} alt="Calculate 3" />
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
                <li>Mon apprentissage de React Native</li>
                <li>M'exercer sur React</li>
                <li>
                  Avoir un projet supplémentaire à présenter aux recruteurs
                </li>
              </ul>
            </Text>
          </ModalDescription>
          <ModalInfo>
            <Text>Année 2021</Text>
            <LinkProject href={"https://github.com/Cdric-art/CalculateApp"} />
            <p>
              <Pills name={"native"}>REACT NATIVE</Pills>
            </p>
          </ModalInfo>
        </ModalBody>
      </div>
    </article>
  );
};
