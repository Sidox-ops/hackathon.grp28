import { Box, Image } from "@chakra-ui/react";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselBox from "./CarouselBox";

import parse from "html-react-parser";

class CarouselContent extends React.Component {
  render() {
    return (
      <>
        <Box id={this.props.id}>
          {/* Carrousel */}
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
            Market insights
          </Box>
          <Carousel
            showStatus={false}
            interval={3000}
            infiniteLoop
            autoPlay={true}
            showThumbs={false}
          >
            <CarouselBox
              text={parse(
                `<b>Consumer demand transparency</b> on formulae performance. In their eyes, clinical tests done on samples of 30/40 people are not good enough! This is the reason why peer-to-peer recommendation and non-scientific influencers info gain share of voice . Brands need to recover credibility.`
              )}
            />
            <CarouselBox text="Consumer and brands demand seek for personalized solutions that only big data can understand." />
            <CarouselBox text="Data helps discover of new frontiers and claims, especially in the exposome field where hman skin self-defends against aggressions and naturally produces NMF or antioxidants. Can cosmetic beat natural skin self-defense  ? Yes!  but how much ?" />
            <CarouselBox text="Trends like clean beauty or legislation (Reach especially) impose frequent and costly ingredient changes. Can we know up-front which will perform best ? At what dosage ?" />
          </Carousel>
        </Box>
      </>
    );
  }
}

export default CarouselContent;
