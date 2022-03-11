import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextContentLeft from "../components/TextContentLeft";
import TextContentRight from "../components/TextContentRight";

class StudiesServices extends React.Component {
  render() {
    return (
      <>
        <Navbar
          content1={
            <Box flex="3">
              <Box fontSize="5xl" fontFamily="Poppins" margin="0 0 1em 0">
                TITLE
              </Box>
              <Box fontSize="2xl" fontFamily="Poppins" fontWeight="light">
                <Box>+ Exemple</Box>
                <Box>+ Exemple</Box>
                <Box>+ Exemple</Box>
                <Box>+ Exemple</Box>
                <Box>+ Exemple</Box>
              </Box>
            </Box>
          }
          content2={<Box flex="3"></Box>}
          bold5="bold"
          textDeco5="underline"
        />

        <Box backgroundColor="#fff" color="white">
          <Box width="100vw" padding="0 10vw 10vh 10vw">
            <TextContentLeft
              title={"We research skincare"}
              text={
                "WIRED BEAUTY is a new datadriven market research company dedicated to cosmetic laboratories. We help our clients evaluate and develop skincare formulae by comparing cosmetics on statistically viable samples of men & women (1000 people): the antioxydative and moisterizing effect of formulae (in vivo) the antioxydative and moisterizing effect of ingredients (in vitro)  (cf Reach) consumer feedback after product use environmental conditions (UV pollution) surronding the consumer’s lifestyle skincare performance after 1 day – 8 days – 15 days - X days."
              }
            />

            <TextContentRight
              title={"We rely on data & technology"}
              text={`- Proprietary nomadic lab device & patented skin patches to decipher skin reactions and ingredient presence 
                                - Easy multi-lingual smartphone app and customer feedback
                                - Geolocalisation and exposome data (UV - pollution temperature)
                                - Repeatability of protocols in real life conditions (ie bathrooms)
                                - Large cohorts it needed 
                                - Saas and European data center
                            `}
            />
          </Box>
        </Box>

        <Footer />
      </>
    );
  }
}

export default StudiesServices;
