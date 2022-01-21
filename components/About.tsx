import React from "react";
import { Container } from "./common/Container";
import { Strong } from "./common/Strong";
import { ScrollDown } from "./common/ScrollDown";
import { WrapperParagraphe } from "./common/WrapperParagraphe";
import { ContainerText } from "./common/ContainerText";
import { TitleSection } from "./common/TitleSection";
import { Text } from "./common/Text";
import { styled } from "../styles/stitches.config";
import { ListTech } from "./common/ListTech";

export const About = () => {
  return (
    <Container id="about">
      <ContainerText>
        <TitleSection>Me, Myself and I</TitleSection>
        <WrapperParagraphe>
          <Text>
            Je suis un jeune développeur web de 30 ans, habitant à Paris. Je
            suis <span>autodidacte depuis plus de deux ans</span> dans ce
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            domaine, et j'ai également obtenu une <span>
              licence en 2021
            </span>{" "}
            suite à une formation IFOCOP.
          </Text>
          <Text>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Avant de me lancer dans le développement Web, j'étais
            Manager/Barman. En 2009, j’ai obtenu un Bac Technologique Hôtelier à
            Gérardmer. Cela fait aujourd’hui 12 ans que j’exerce ce métier. J’ai
            eu la chance d’avoir beaucoup d’expériences et de statuts
            différents. J’ai été salarié en CDI, CDD, Extra, Saisonnier mais
            également gérant d’une SARL.
            <span>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              &nbsp;N'hésitez pas à visiter ma page&nbsp;
              <a
                href="https://www.whire.me/@cdricart"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whire
              </a>
            </span>{" "}
            où vous en apprendrez plus sur moi.
          </Text>
        </WrapperParagraphe>
      </ContainerText>
      <Wrapper>
        <Scene>
          <ListTech />
        </Scene>
      </Wrapper>
      <Strong text="Skills" />
      <ScrollDown position="left" />
      <ScrollDown position="right" />
    </Container>
  );
};

const Wrapper = styled("section", {
  width: "80%",
  height: "80%",
});

const Scene = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  color: "$contrast",
});
