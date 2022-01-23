import React from "react";
import { Container } from "./common/Container";
import { ContainerText } from "./common/ContainerText";
import { TitleSection } from "./common/TitleSection";
import { WrapperParagraphe } from "./common/WrapperParagraphe";
import { Text } from "./common/Text";
import { Strong } from "./common/Strong";
import { ScrollDown } from "./common/ScrollDown";
import { styled } from "../styles/stitches.config";
import { SkillsLevel } from "./skills/SkillsLevel";
import { WorkExperience } from "./skills/WorkExperience";

export const Skills = () => {
  return (
    <Container css={{ marginTop: -50 }} id="skills">
      <ContainerText>
        <TitleSection>Skills & Experience</TitleSection>
        <WrapperParagraphe>
          <Text>
            Je suis un jeune homme, plein de <span>motivation</span> et de{" "}
            <span>curiosité</span> !{" "}
            <span>J'ai fait le choix du changement et de l'apprentissage.</span>{" "}
            J'ai découvert il y a peu que rien n'est impossible quand on est
            passionné !
          </Text>
          <Text>
            N'hésitez pas à consulter mon <span>CV</span>&nbsp;en cliquant&nbsp;
            <span>
              <a
                href="/assets/files/CV-EVRARDCedric.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                ici
              </a>
            </span>
          </Text>
        </WrapperParagraphe>
      </ContainerText>
      <Wrapper_Skills_Work>
        <SkillsLevel />
        <WorkExperience />
      </Wrapper_Skills_Work>
      <Strong text="Work" />
      <ScrollDown position="left" />
      <ScrollDown position="right" />
    </Container>
  );
};

const Wrapper_Skills_Work = styled("section", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  paddingInline: 20,
  marginTop: 30,

  "@tablet": {
    paddingInline: 50,
  },
  "@desktop": {
    marginTop: 0,
  },
});
