import React from "react";
import { styled } from "../../styles/stitches.config";
import { Text } from "../common/Text";

export const WorkExperience = () => {
  return (
    <Wrapper>
      <Work>
        <a
          href="https://www.whire.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <header>Développeur React JS</header>
          <div className="time">
            <span>Whire</span>
            <time>Sept 2020 - Fév 2021</time>
          </div>
          <footer>
            <Text size={"small"} color={"light"}>
              Développement du nouveau site vitrine
            </Text>
            <Text size={"small"} color={"light"}>
              Participation au développement de nouvelles fonctionnalités de
              l'application. Maintenance et correctifs de bugs.
            </Text>
          </footer>
        </a>
      </Work>
      <Work>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <header>Développeur React JS</header>
          <div className="time">
            <span>Whire - Side Project</span>
            <time>Mars 2021 - Avr 2021</time>
          </div>
          <footer>
            <Text size={"small"} color={"light"}>
              Carte de visite Whire
            </Text>
            <Text size={"small"} color={"light"}>
              Site permettant de créer sa carte de visite Whire dynamiquement.
            </Text>
          </footer>
        </a>
      </Work>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "$space5",
  marginTop: 10,
  zIndex: 1,

  "@desktop": {
    marginTop: 50,
  },
});

const Work = styled("article", {
  padding: "$space3",
  cursor: "pointer",
  backgroundColor: "$dark25",
  border: "1px solid transparent",
  transition: "all .3s",

  "&:hover": {
    borderColor: "$contrast",
  },

  header: {
    fontSize: ".9rem",
    fontWeight: 600,
    letterSpacing: -1,

    "@tablet": {
      fontSize: "1.2rem",
    },
  },

  ".time": {
    paddingBlock: "$space2",

    "span, time": {
      display: "block",
      fontFamily: "La Belle Aurore",
      fontSize: ".7rem",
      lineHeight: 1,
      color: "$contrast",
    },

    "@tablet": {
      paddingBlock: "$space4",

      "span, time": {
        fontSize: "1rem",
      },
    },
  },
});
