import { Box, Image } from "@chakra-ui/react";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselBoxImage from "./CarouselBoxImage";

import whiteSquare from "../../assets/whiteSquare.png";

import parse from "html-react-parser";

const carrImg = [
  {
    imgSource: { whiteSquare },
    text: `SOPHIE LE TANNEUR
        <br>
        <br>
        An FMCG corporate life of over 20 years at Colgate-Palmolive & L’Oréal in marketing and general management positions in Europe.
        <br>
        <br>
        An entrepreneurial life with  turn-arounds of a luxury brands backed by Private equity  funds for followed by 7 years of consulting @Lucinda which she founded. lien linked in
        <br>
        <br>
        A passion for entrepreneurship as an impact investor and mentor (@ 50 Partners lien)`,
  },
  {
    imgSource: { whiteSquare },
    text: `STANISLAS VANDIER
    <br>
    <br>
    10 years at L’Oréal in marketing and general management positions in Europe.
    <br>
    <br>
    An entrepreneurial life in Europe and Asia in dermo-cosmetics (product development and alternative retail models) and data / AI. lien linked in
    <br>
    <br>
    A passion for innovation and team ventures.`,
  },
  {
    imgSource: { whiteSquare },
    text: `NICOLAS AMALRIC<br>
    Scientific Director of QIMA Life Sciences and former CEO of Synelvia
    QIMA Life Sciences (formerly Bioalternatives & Synelvia) offre des services d’analyses adaptés à la biologie cutanée. L’offre de tests s’étend du screening virtuel in silico à la bioanalyse d’échantillons cliniques non invasifs, en passant par les tests in vitro et ex vivo.
    <br>
    La société QIMA Life Sciences aide les départements marketing et recherche et développement des grands groupes cosmétique et pharmaceutique européens et américains à innover dans la conceptualisation de leurs projets et à substancier et soutenir leurs allégations produits.
    <br>
    A passion for innovation in skin science.`,
  },
  {
    imgSource: { whiteSquare },
    text: `William RICHARD<br>
    Directeur d'étudesQIMA Life Sciences Toulouse France since 2018 - Développement de capteurs<br>
    - Responsable département électrochimie<br>
    - Gestion de projets<br>
    - Capteurs<br>
    - Matériaux<br>
    - Chimie analytique<br>
    - Qualité<br>
    A passion for biology and tech<br>`,
  },
];

class CarouselContentImage extends React.Component {
  render() {
    return (
      <>
        <Box>
          {/* Carrousel 2 */}
          <Box
            backgroundColor="#18222E"
            color="#fff"
            width="100vw"
            textAlign="center"
            fontFamily="Poppins"
            fontSize="3xl"
            fontWeight="bold"
            padding="2rem 0"
          >
            Meet the team
          </Box>
          <Carousel
            showStatus={false}
            interval={3000}
            infiniteLoop
            autoPlay={true}
            showThumbs={false}
          >
            {carrImg.map(({ imgSource, text }, index) => (
              <CarouselBoxImage
                key={index}
                img={imgSource}
                text={parse(text)}
              />
            ))}
          </Carousel>
        </Box>
      </>
    );
  }
}

export default CarouselContentImage;
