import { Box, Image } from "@chakra-ui/react";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselBoxImage from "./CarouselBoxImage";

import whiteSquare from "../../assets/images/whiteSquare.png";

import parse from "html-react-parser";

import photoPeople1 from "../../assets/images/photoPeople1.png";
import photoPeople2 from "../../assets/images/photoPeople2.png";
import photoPeople3 from "../../assets/images/photoPeople3.png";
import photoPeople4 from "../../assets/images/photoPeople4.png";
import photoPeople5 from "../../assets/images/photoPeople5.png";
import photoPeople6 from "../../assets/images/photoPeople6.png";

const carrImg = [
  {
    imgSource: photoPeople1,
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
    imgSource: photoPeople2,
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
    imgSource: photoPeople3,
    text: `NICOLAS AMALRIC<br>
    Scientific Director of QIMA Life Sciences and former CEO of Synelvia
    QIMA Life Sciences (formerly Bioalternatives & Synelvia) offre des services d’analyses adaptés à la biologie cutanée. L’offre de tests s’étend du screening virtuel in silico à la bioanalyse d’échantillons cliniques non invasifs, en passant par les tests in vitro et ex vivo.
    <br>
    La société QIMA Life Sciences aide les départements marketing et recherche et développement des grands groupes cosmétique et pharmaceutique européens et américains à innover dans la conceptualisation de leurs projets et à substancier et soutenir leurs allégations produits.
    <br>
    A passion for innovation in skin science.`,
  },
  {
    imgSource: photoPeople4,
    text: `William RICHARD<br>
    Directeur d'étudesQIMA Life Sciences Toulouse France since 2018 - Développement de capteurs<br>
    - Responsable département électrochimie<br>
    - Gestion de projets<br>
    - Capteurs<br>
    - Matériaux<br>
    - Chimie analytique<br>
    - Qualité<br>
    A passion for biology and tech`,
  },
  {
    imgSource: photoPeople5,
    text: `TU-ANH DUONG<br>
    Dermatologist, APHP, Hôpital Henri Mondor<br>
    <br>
    TELDERM<br>
    <br>
    Ecole Centrale Paris , Interne des hopitaux de Paris, PhD<br>
    <br>
    A passion for trans-disciplinary innovation

`,
  },
  {
    imgSource: photoPeople6,
    text: `MELISSA EVEILLARD<br>
    Trainee at APHP (May’ 21) as a data scientist for the Wired beauty project and SKINBIOSENSE clinical trial and  efficiency vs chromatography.<br>
    Master in Engineering, Mathematics, and Biostatistics track @ Paris Universty<br>
    A passion for new technologies, data exploration and communication based on deep analysis.<br>
    `,
  },
];

class CarouselContentImage extends React.Component {
  render() {
    return (
      <>
        {/* Carrousel 2 */}
        <Box
          as="h1"
          backgroundColor="#18222E"
          color="#fff"
          width="100vw"
          textAlign="center"
          fontSize={["2rem", "2rem", "2.5rem"]}
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
            <CarouselBoxImage key={index} img={imgSource} text={parse(text)} />
          ))}
        </Carousel>
      </>
    );
  }
}

export default CarouselContentImage;
