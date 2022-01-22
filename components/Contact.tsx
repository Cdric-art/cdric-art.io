import React from "react";
import { Container } from "./common/Container";
import { ContainerText } from "./common/ContainerText";
import { TitleSection } from "./common/TitleSection";
import { WrapperParagraphe } from "./common/WrapperParagraphe";
import { Text } from "./common/Text";
import { Map } from "./contact/Map";
import { Form } from "./contact/Form";

export const Contact = () => {
  return (
    <Container id={"contact"}>
      <ContainerText css={{ minWidth: "45%" }}>
        <TitleSection>Contact me</TitleSection>
        <WrapperParagraphe>
          <Text>
            Pour toute demande n'hésitez pas à m'écrire un petit message !
          </Text>
        </WrapperParagraphe>
        <Form />
      </ContainerText>
      <Map />
    </Container>
  );
};
