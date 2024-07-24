import React, { useState } from "react";
import { Container } from "./common/Container";
import { ContainerText } from "./common/ContainerText";
import { TitleSection } from "./common/TitleSection";
import { WrapperParagraphe } from "./common/WrapperParagraphe";
import { Text } from "./common/Text";
import { ScrollDown } from "./common/ScrollDown";
import { Modal } from "./projects/modal/Modal";
import { styled } from "../styles/stitches.config";

import Compte from "../public/assets/images/CompteTaCaisse.png";
import WhireImg from "../public/assets/images/whire.png";
import ArtisteImg from "../public/assets/images/artiste.png";
import WhireCardImg from "../public/assets/images/card-whire.png";
import MoviesApp from "../public/assets/images/movies-app1.png";
import { Strong } from "./common/Strong";

export const Projects = () => {
  const [dataset, setDataset] = useState<number | null>(null);

  return (
    <Container
      position={"direction"}
      css={{ height: "auto" }}
      after={"display"}
      id="projects"
    >
      <ContainerText css={{ alignSelf: "start" }} size={"large"}>
        <TitleSection>My projects</TitleSection>
        <WrapperParagraphe>
          <Text>
            Une petite galerie de projets dont je suis le plus fier. Je continue
            de m'exercer en réalisant d'autres projets, j'ai très hâte de
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
      <Grid>
        <Card onClick={() => setDataset(5)}>
          <img src={Compte.src} alt="Project Compte Ta Caisse" />
          <h3>Compte Ta Caisse</h3>
          <SpanGreen />
          <p>Swift - Swift Ui</p>
        </Card>
        <Card onClick={() => setDataset(1)}>
          <img src={WhireImg.src} alt="Project Whire" />
          <h3>Whire</h3>
          <SpanGreen />
          <p>React JS</p>
        </Card>
        <Card onClick={() => setDataset(2)}>
          <img src={MoviesApp.src} alt="Project MoviesApp" />
          <h3>Movies App</h3>
          <SpanGreen />
          <p>React JS - Stitches</p>
        </Card>
        <Card onClick={() => setDataset(3)}>
          <img src={ArtisteImg.src} alt="Project Artiste" />
          <h3>Artiste</h3>
          <SpanGreen />
          <p>React JS - WordPress</p>
        </Card>
        <Card onClick={() => setDataset(4)}>
          <img src={WhireCardImg.src} alt="Project Whire Card" />
          <h3>Whire Card</h3>
          <SpanGreen />
          <p>React JS</p>
        </Card>
      </Grid>

      {dataset && <Modal dataset={dataset} toggle={setDataset} />}

      <Strong text="Proj." />
      <ScrollDown position="left" />
      <ScrollDown position="right" />
    </Container>
  );
};

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$space8",
  marginTop: "5vh",
  paddingBottom: 20,
  zIndex: 10,

  "@tablet": {
    gridTemplateColumns: "1fr 1fr",
    paddingBottom: 80,
  },

  "@desktop": {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
});

const Card = styled("div", {
  maxWidth: 300,
  border: "1px solid transparent",
  transition: "all .3s",
  cursor: "pointer",
  backgroundColor: "$dark50",
  borderRadius: 12,
  padding: "$space4",

  img: {
    objectFit: "cover",
    maxHeight: 137,
  },

  h3: {
    fontSize: "1.8rem",
    fontWeight: 600,
    padding: "$space1",
    letterSpacing: -1,
  },

  p: {
    fontSize: "1.2rem",
    margin: "$space4 0 0 0",
    padding: "$space1",
    fontWeight: 400,
    lineHeight: 1,
  },

  "&:hover": {
    borderColor: "$contrast",
  },
});

const SpanGreen = styled("span", {
  display: "block",
  width: 40,
  height: 3,
  margin: "$space1",
  borderRadius: 6,
  backgroundColor: "$contrast",
});
