import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { HashLink as Linked } from "react-router-hash-link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextContentLeft from "../components/TextContentLeft";
import TextContentRight from "../components/TextContentRight";
import BlocContent from "../components/BlocContent";

import parse from "html-react-parser";

import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";

class WhatWeDo extends React.Component {
  render() {
    return (
      <>
        <Navbar
          content1={
            <Box flex="3">
              <Box fontSize="5xl" margin="0 0 1em 0">
                BeautyTech X Skincare
              </Box>
              <Box fontSize="2xl" fontWeight="light">
                <Box>
                  <Linked to="#research">+ We research skincare</Linked>
                </Box>
                <Box>
                  <Linked to="#dataTech">+ We rely on data & technology</Linked>
                </Box>
                <Box>
                  <Linked to="#vitality">
                    + We measure skin vitality response & consumer
                  </Linked>
                  perception simultanously
                </Box>
                <Box>
                  <Linked to="#labs">
                    + We work for labs and marketing teams
                  </Linked>
                </Box>
                <Box>
                  <Linked to="#help">+ We help</Linked>
                </Box>
              </Box>
            </Box>
          }
          content2={<Box flex="3"></Box>}
          bold1="bold"
          textDeco1="underline"
        />

        <Box>
          <Box backgroundColor="#fff" color="white">
            <Box width="100vw" padding="0 10vw 10vh 10vw">
              <TextContentLeft
                title={"We research skincare"}
                text={`WIRED BEAUTY is a new datadriven market research company dedicated to cosmetic laboratories.<br>
                  We help our clients evaluate and develop skincare formulae by comparing cosmetics on statistically viable samples of men & women (1000 people): <br>
                  the antioxydative and moisterizing effect of formulae (in vivo) the antioxydative and moisterizing effect of ingredients (in vitro)  (cf Reach) consumer feedback after product use environmental conditions (UV pollution) surronding the consumer’s lifestyle skincare performance after 1 day – 8 days – 15 days - X days.`}
                content={<Image src={photo1} />}
                id="research"
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
                content={<Image src={photo2} />}
                id="dataTech"
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
                content={<Image src={photo3} />}
                id="vitality"
              />

              <TextContentRight
                title={"We work for labs and marketing teams"}
                text={
                  "Combining efforts with countries usual CRO’s. In all countries, even in China where anonymized data is key."
                }
                id="labs"
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
                id="help"
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
