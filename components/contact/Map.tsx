import React from "react";
import { Text } from "../common/Text";

import MapImage from "../../public/assets/images/map.png";
import { styled } from "../../styles/stitches.config";

export const Map = () => {
  return (
    <Wrapper>
      <img src={MapImage.src} alt={"Map"} />
      <Info>
        <Text css={{ padding: 0 }}>Evrard Cédric</Text>
        <Text css={{ padding: 0 }}>75006, Paris</Text>
        <Text css={{ padding: 0 }}>
          <span>@ : </span>cdric.art@gmail.com
        </Text>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  position: "relative",
  marginTop: 50,
  alignSelf: "flex-end",

  img: {
    maxHeight: 300,
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },

  "@tablet": {
    img: {
      maxHeight: 500,
    },
  },

  "@desktop": {
    marginTop: 0,
    img: {
      maxHeight: "100%",
    },
  },
});

const Info = styled("div", {
  position: "absolute",
  top: "30%",
  left: 10,
  padding: "$space2",
  backgroundColor: "$dark100",
  border: "1px solid $contrast",

  "@tablet": {
    left: 50,
  },
});
