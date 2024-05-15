import React from "react";
import { ContainerText } from "./common/ContainerText";
import { TitleSection } from "./common/TitleSection";
import { WrapperParagraphe } from "./common/WrapperParagraphe";
import { Text } from "./common/Text";
import { Form } from "./contact/Form";
import { styled } from "../styles/stitches.config";

export const Contact = () => {
  return (
    <ContainerContact id={"contact"}>
      <ContainerText>
        <TitleSection>Contact me</TitleSection>
        <WrapperParagraphe>
          <Text>
            Pour toute demande n'hésitez pas à m'écrire un petit message !
          </Text>
        </WrapperParagraphe>
      </ContainerText>
      <Form />
    </ContainerContact>
  );
};


const ContainerContact = styled("section", {
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  height: "70vh",
  overflow: "hidden",

  "@desktop": {
    height: "100vh",
    justifyContent: "space-around",

    "&::before": {
      position: "absolute",
      content: "<section>",
      fontFamily: "La Belle Aurore",
      fontSize: "1.2rem",
      fontStyle: "italic",
      color: "$gray100",
      fontWeight: 400,
      letterSpacing: 1,
      top: 80,
      left: 50,
    },
    "&::after": {
      position: "absolute",
      content: "</section>",
      fontFamily: "La Belle Aurore",
      fontSize: "1.2rem",
      fontStyle: "italic",
      color: "$gray100",
      fontWeight: 400,
      letterSpacing: 1,
      bottom: 80,
      left: 50,
    },
  },
});
