import React from "react";
import { styled } from "../../styles/stitches.config";
import { ProgressBar } from "./ProgressBar";

export const SkillsLevel = () => {
  return (
    <>
      <Card className="wrapper-skills_level">
        <header>ReactJS</header>
        <footer>
          <ProgressBar size="75%" color="$contrast" />
        </footer>
      </Card>
      <Card className="wrapper-skills_level">
        <header>Node JS - Adonis JS</header>
        <footer>
          <ProgressBar size="50%" color="$red" />
        </footer>
      </Card>
      <Card className="wrapper-skills_level">
        <header>Php - Laravel</header>
        <footer>
          <ProgressBar size="40%" color="$purple" />
        </footer>
      </Card>
      <Card className="wrapper-skills_level">
        <header>Swift - SwiftUI</header>
        <footer>
          <ProgressBar size="35%" color="$yellow" />
        </footer>
      </Card>
    </>
  );
};

const Card = styled("div", {
  marginBottom: "$space4",

  "@tablet": {
    marginBottom: "$space5",
  },

  "& header": {
    fontSize: ".9rem",
    fontWeight: 600,
    lineHeight: 1,
    marginBottom: "$space1",

    "@tablet": {
      fontSize: "1.125rem",
      lineHeight: 1.5,
      marginBottom: 7,
    },
  },

  "& footer": {
    width: "100%",
    height: 2,
    backgroundColor: "$dark25",
  },
});
