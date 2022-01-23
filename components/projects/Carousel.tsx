import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { styled } from "../../styles/stitches.config";

import WhireImg from "../../public/assets/images/whire.png";
import ArtisteImg from "../../public/assets/images/artiste.png";
import WhireCardImg from "../../public/assets/images/card-whire.png";
import CalculateImg from "../../public/assets/images/calculate.png";
import { ArrowVariants } from "../svg";
import { Modal } from "./modal/Modal";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [dataset, setDataset] = useState<number | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Embla ref={emblaRef}>
      <Wrapper>
        <Slide onClick={() => setDataset(1)}>
          <img src={WhireImg.src} alt="Project Whire" />
          <h3>Whire</h3>
          <SpanGreen />
          <p>React JS</p>
        </Slide>
        <Slide onClick={() => setDataset(2)}>
          <img src={ArtisteImg.src} alt="Project Artiste" />
          <h3>Artiste</h3>
          <SpanGreen />
          <p>React JS - WordPress</p>
        </Slide>
        <Slide onClick={() => setDataset(3)}>
          <img src={WhireCardImg.src} alt="Project Whire Card" />
          <h3>Whire Card</h3>
          <SpanGreen />
          <p>React JS</p>
        </Slide>
        <Slide onClick={() => setDataset(4)}>
          <img src={CalculateImg.src} alt="Project Calculate" />
          <h3>Calculate App</h3>
          <SpanGreen />
          <p>React Native</p>
        </Slide>
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={scrollPrev}>
          <ArrowVariants position={"left"} />
        </Button>
        <Button onClick={scrollNext}>
          <ArrowVariants position={"right"} />
        </Button>
      </ButtonWrapper>
      {dataset && <Modal dataset={dataset} toggle={setDataset} />}
    </Embla>
  );
};

const Embla = styled("div", {
  overflow: "hidden",
  marginTop: "5vh",
  paddingBottom: 20,

  "@tablet": {
    paddingBottom: 80,
  },
});

const Wrapper = styled("div", {
  display: "flex",
});

const Slide = styled("div", {
  position: "relative",
  flex: "0 0 100%",
  alignSelf: "center",
  width: "35%",
  maxWidth: 300,
  marginRight: 50,
  border: "1px solid transparent",
  transition: "all .3s",
  cursor: "pointer",
  backgroundColor: "$dark50",
  borderRadius: 12,
  padding: "$space4",

  img: {
    objectFit: "cover",
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

const ButtonWrapper = styled("div", {
  position: "absolute",
  bottom: 5,
  left: "50%",
  transform: "translateX(-50%)",

  "@tablet": {
    bottom: "10vh",
  },
});

const Button = styled("button", {
  marginInline: "$space4",
  border: "1px solid $contrast",
  borderRadius: "50%",
  background: "none",
  outline: "none",
  height: 34,
  width: 34,
  cursor: "pointer",
  transition: "all .3s",

  "&:hover, &:hover svg": {
    borderColor: "$white",
    color: "$white",
  },
});
