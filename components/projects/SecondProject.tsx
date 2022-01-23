import React from "react";
import { TitleModal } from "./modal/TitleModal";
import { WrapperImages } from "./modal/WrapperImages";
import { ModalBody } from "./modal/ModalBody";
import { ModalDescription } from "./modal/ModalDescription";
import { Text } from "../common/Text";
import { ModalInfo } from "./modal/ModalInfo";
import { LinkProject } from "./modal/LinkProject";
import { Pills } from "./modal/Pills";
import { Markdown } from "./modal/Markdown";

import Artiste1 from "../../public/assets/images/artiste1.png";
import Artiste2 from "../../public/assets/images/artiste2.png";
import Artiste3 from "../../public/assets/images/artiste3.png";

export const SecondProject = () => {
  return (
    <article>
      <TitleModal name={"Artiste"} />
      <div style={{ padding: 20 }}>
        <WrapperImages>
          <img src={Artiste1.src} alt="Artiste 1" />
          <img src={Artiste2.src} alt="Artiste 2" />
          <img className={"img"} src={Artiste3.src} alt="Artiste 3" />
        </WrapperImages>
        <ModalBody>
          <ModalDescription>
            <Text>
              <cite>
                "Mise en ligne d'une boutique e-commerce sur un sujet libre à
                l'aide de WooCommerce"
              </cite>
            </Text>
            <Text>
              Bon, trouver le sujet n'a pas été le plus compliqué. Par contre,
              trouver la motivation de travailler sur WordPress.. cela a été un
              enfer ! Ce n'est pas que je déteste WordPress (juste un peu) mais
              c'est surtout que je ne prends aucun plaisir à développer sur cet
              outil.
              <span aria-label="emoji" role="img">
                {" "}
                😑
              </span>
            </Text>
            <Text>
              La deadline approche vite et toujours pas de motivation. Je
              commence à chercher à pimenter un peu le projet,{" "}
              <span aria-label="emoji" role="img">
                {" "}
                🤔
              </span>{" "}
              à me lancer un vrai défi histoire de m'amuser un peu malgré
              l'obligation d'utiliser WordPress.
            </Text>
            <Text>
              L'idée est de créer une vitrine et à la fois une boutique pour un
              Street artiste !{" "}
              <span aria-label="emoji" role="img">
                {" "}
                ✨
              </span>
            </Text>
            <Text>
              <Markdown>
                composer create-project --prefer-dist wordplate/wordplate{" "}
              </Markdown>{" "}
              et hop c'est parti !
            </Text>
            <Text>
              Je développe la boutique, un joli petit thème et prépare le
              back-end pour que le (faux) client puisse piloter facilement les
              produits affichés en boutique, mais également ses œuvres qui
              seront mises en avant sur le site vitrine.
            </Text>
            <Text>
              <span aria-label="emoji" role="img">
                🚀{" "}
              </span>{" "}
              Un petit <Markdown>npx create-react-app client</Markdown> et là,
              je commence enfin à m'amuser !{" "}
              <span aria-label="emoji" role="img">
                {" "}
                🚀
              </span>
            </Text>
            <Text>
              Petite préparation de l'environnement pour utiliser l'api REST de
              WordPress et WooCommerce puis le router pour la navigation et
              voilà, je m'éclate !{" "}
              <span aria-label="emoji" role="img">
                {" "}
                🤩
              </span>
            </Text>
          </ModalDescription>
          <ModalInfo>
            <Text>Année 2020 - 2021</Text>
            <LinkProject href={"https://github.com/Cdric-art/wp-react"} />
            <p>
              <Pills name={"html"}>HTML</Pills>
              <Pills name={"scss"}>SCSS</Pills>
              <Pills name={"react"}>REACT</Pills>
              <Pills name={"wordpress"}>WORDPRESS</Pills>
            </p>
          </ModalInfo>
        </ModalBody>
      </div>
    </article>
  );
};
