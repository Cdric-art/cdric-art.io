import React from "react";
import { Container } from "./common/Container";
import { ContainerText } from "./common/ContainerText";
import { TitleSection } from "./common/TitleSection";
import { WrapperParagraphe } from "./common/WrapperParagraphe";
import { Text } from "./common/Text";
import { ScrollDown } from "./common/ScrollDown";
import { Carousel } from "./common/Carousel";

export const Projects = () => {
  return (
    <Container position={"direction"} id="projects">
      <ContainerText css={{ alignSelf: "start" }} size={"large"}>
        <TitleSection>My projects</TitleSection>
        <WrapperParagraphe>
          <Text>
            Une petite galerie de projets dont je suis le plus fier. Je continue
            de m'exercer en réalisant d'autres projets, j'ai trés hâte de
            pouvoir bientôt les ajouter ci-dessous !
          </Text>
          <Text>
            N'hésitez pas à consulter mon <span>GitHub</span>&nbsp;en
            cliquant&nbsp;
            <span>
              <a
                href="https://github.com/Cdric-art"
                target="_blank"
                rel="noopener noreferrer"
              >
                ici
              </a>
            </span>
            .
          </Text>
        </WrapperParagraphe>
      </ContainerText>
      <Carousel />
      <ScrollDown position="left" />
      <ScrollDown position="right" />
    </Container>
  );
};
