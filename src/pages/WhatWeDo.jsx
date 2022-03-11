import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextContentLeft from "../components/TextContentLeft";
import TextContentRight from "../components/TextContentRight";
import BlocContent from "../components/BlocContent";

import parse from "html-react-parser";

class WhatWeDo extends React.Component {
  render() {
    return (
      <>
        <Navbar
          content1={
            <Box flex="3">
              <Box fontSize="5xl" fontFamily="Poppins" margin="0 0 1em 0">
                BeautyTech X Skincare
              </Box>
              <Box fontSize="2xl" fontFamily="Poppins" fontWeight="light">
                <Box>+ We research skincare</Box>
                <Box>+ We rely on data & technology</Box>
                <Box>
                  + We measure skin vitality response & consumer perception
                  simultanously
                </Box>
                <Box>+ We work for labs and marketing teams</Box>
                <Box>+ We help</Box>
              </Box>
            </Box>
          }
          content2={<Box flex="3"></Box>}
          bold1="bold"
          textDeco1="underline"
        />

        <Box>
          {/* <Box>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#FFF"
                fillOpacity="1"
                d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,53.3C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </Box> */}

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
                text={parse(`
                        <br>- Proprietary nomadic lab device & patented skin patches to decipher skin reactions and ingredient presence
                        <br>- Easy multi-lingual smartphone app and customer feedback
                        <br>- Geolocalisation and exposome data (UV - pollution temperature)
                        <br>- Repeatability of protocols in real life conditions (ie bathrooms)
                        <br>- Large cohorts it needed 
                        <br>- Saas and European data center
                `)}
              />

              <TextContentLeft
                title={
                  "We measure skin vitality response & consumer perception simultanously"
                }
                text={parse(`Our clients evaluate and develop skincare formulae by comparing cosmetics on statistically viable samples of men & women (1000 people) :
                        <br>- The antioxydative and moisterizing effect of formulae (in vivo)
                        <br>- The antioxydative and moisterizing effect of ingredients (in vitro) see REACH
                        <br>- The consumer feedback after product use
                        <br>- The environmental conditions (UV pollution) surronding the consumer’s lifestyle
                        <br>- The skincare performance after 1 day – 8 days – 15 days - X days.
                `)}
              />

              <TextContentRight
                title={"We work for labs and marketing teams"}
                text={
                  "Combining efforts with countries usual CRO’s. In all countries, even in China where anonymized data is key."
                }
              />

              <TextContentLeft
                title={"We help"}
                text={parse(`
                        <br>- DISCOVER new claims on large skin type cohorts
                        <br>- PROVE claims through large data intelligence
                        <br>- TRULY UNDERSTAND skin reactions in absence of product
                        <br>- COMPARE performance on a long-term basis (Cohorts follow-up)
                        <br>- UNDERSTAND exposome and skin
                        <br>- SAVE TIME vs chromatography and IMROVE results vs TWEL. 
                        <br>- READ SIMULTANOUSLY skin response & consumer feed-back
                `)}
              />
            </Box>
          </Box>
        </Box>
        <Footer />
      </>
    );
  }
}

export default WhatWeDo;
