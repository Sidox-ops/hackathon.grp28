import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextContentLeft from "../components/TextContentLeft";
import TextContentRight from "../components/TextContentRight";
import TextContentMiddle from "../components/TextContentMiddle";
import BlocContent from "../components/BlocContent";
import parse from "html-react-parser";

import img from "../assets/404.png";

// var parse = require('html-react-parser');

class OurSolutions extends React.Component {
  render() {
    return (
      <>
        <Navbar
          content1={
            <Box flex="3">
              <Box fontSize="5xl" fontFamily="Poppins" margin="0 0 1em 0">
                SmartData X Skincare
              </Box>
              <Box fontSize="2xl" fontFamily="Poppins" fontWeight="light">
                <Box>+ A portable lab device</Box>
                <Box>+ A mobile app</Box>
                <Box>+ Smart single-use peel-off patches</Box>
                <Box>+ European data center</Box>
              </Box>
            </Box>
          }
          content2={<Box flex="3"></Box>}
          bold2="bold"
          textDeco2="underline"
        />

        <Box backgroundColor="#fff" color="white">
          <Box width="100vw" padding="0 10vw 10vh 10vw" margin="-7rem 0 0 0">
            <TextContentMiddle
              title="Nomadic labgrade IOT device & smart app"
              text="WIRED BEAUTY is a French beauty-tech market research company which invested 1,3M€ to develop a non invasive, portable lab connected device to deliver labgrade and real time measurements of skin markers to dermocosmetic lab as well as a smart app in order to also harvest consumer perception."
            />

            <Box>
              <Box
                textAlign="center"
                color="lightblue"
                fontWeight="bold"
                fontFamily="Poppins"
                fontSize="3xl"
              >
                Wired Beauty is ...
              </Box>
              <Box display="flex" justifyContent="space-around">
                <BlocContent
                  title="New"
                  text="Hybrid studies combining objective clinical results measurements & consumer perception."
                />
                <BlocContent
                  title="Different"
                  text="Proprietary IOT and Algorythm allowing decifering within minutes combined with a consumer app harvesting consumer opinions. "
                />
                <BlocContent
                  title="Better"
                  text="Real World Evidence (link with pollution, UV  and lifestyle) of skincare efficiency on large statistical basis (ex 1000 testers)."
                />
              </Box>
            </Box>

            <TextContentMiddle
              title="Datas and skincare"
              text={parse(`Our measurements range from:
              <br>- targeted markers such as Ascorbic acid, Alpha Tocopherol and squalen/sebum to,
              <br>- non targeted measurements of the barrier function or the antioxydative capacity of the skin.
              <br>
              <br>Our scientific partners (APHP and CRO : lien en page scientific ) have established that our measurement of TEWL is statistically orrelated to that of  chromatography which is the reference methodology as opposed to corneometry. Our technology is complementary to imagery.`)}
            />

            <TextContentMiddle
              title="OUR INSANELY FAST ALGORITHM!"
              text="Thanks to its IOT, its mobile consumer app and its standardized single-use patches, Wired Beauty can decifer within seconds skin antioxydative and mosterizing reactions. Artificial intelligence improves repeatability of process."
            />

            <Image
              src={img} //a changer avec l'illustration
              alt="productImage"
              width="100%"
              height="80px"
            />
          </Box>
        </Box>
        <Footer />
      </>
    );
  }
}

export default OurSolutions;
