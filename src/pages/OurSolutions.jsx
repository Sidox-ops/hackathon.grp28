import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextContentMiddle from "../components/TextContentMiddle";
import BlocContent from "../components/BlocContent";
import TextContentLeft from "../components/TextContentLeft";
import parse from "html-react-parser";

import { HashLink as Linked } from "react-router-hash-link";

import exemple from "../assets/images/exempleImage.png";
import modele from "../assets/images/modele.png";


class OurSolutions extends React.Component {
  render() {
    return (
      <>
        <Navbar
          content1={
            <>
              <Box
                as="h1"
                fontSize={["1rem", "2rem", "3rem"]}
                margin="0 0 1em 0"
              >
                SmartData X Skincare
              </Box>
              <Box fontSize={["1rem", "1.5rem", "2rem"]} fontWeight="light">
                <Box as="h2">
                  <Linked smooth to="#nomadic">
                    + A portable lab device
                  </Linked>
                </Box>
                <Box as="h2">
                  <Linked smooth to="#dataSkincare">
                    + A mobile app
                  </Linked>
                </Box>
                <Box as="h2">
                  <Linked smooth to="#algo">
                    + Smart single-use peel-off patches
                  </Linked>
                </Box>
                <Box as="h2">
                  <Linked smooth to="#algo">
                    + European data center
                  </Linked>
                </Box>
              </Box>
            </>
          }
          bold2="bold"
          textDeco2="underline"
        />

        <Box backgroundColor="#fff" color="white">
          <Box width="100vw" padding="0 10vw 10vh 10vw" margin="-7rem 0 0 0">
            <TextContentMiddle
              title="Nomadic labgrade IOT device & smart app"
              text="WIRED BEAUTY is a French beauty-tech market research company which invested 1,3M€ to develop a non invasive, portable lab connected device to deliver labgrade and real time measurements of skin markers to dermocosmetic lab as well as a smart app in order to also harvest consumer perception."
              textAlign="center"
              id="nomadic"
            />

            <>
              <Box
                textAlign="center"
                color="lightblue"
                fontWeight="bold"
                fontSize={["2rem", "2rem", "2.5rem"]}
              >
                Wired Beauty is ...
              </Box>
              <Box display="flex" justifyContent="space-around" flexWrap="wrap">
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
                  text="Real World Evidence (linked with pollution, UV  and lifestyle) of skincare efficiency on large statistical basis (ex 1000 testers)."
                />
              </Box>
            </>

            <TextContentMiddle
              title="Datas and skincare"
              text={parse(`Our measurements range from:
              <br>- targeted markers such as Ascorbic acid, Alpha Tocopherol and squalen/sebum to,
              <br>- non targeted measurements of the barrier function or the antioxydative capacity of the skin.
              <br>
              <br>Our scientific partners (APHP and CRO : lien en page scientific ) have established that our measurement of TEWL is statistically orrelated to that of  chromatography which is the reference methodology as opposed to corneometry. Our technology is complementary to imagery.`)}
              textAlign="center"
              id="dataSkincare"
            />

            <TextContentLeft
              title={
                "OUR INSANELY FAST ALGORITHM!"
              }
              text={parse(`Thanks to its IOT, its mobile consumer app and its standardized single-use patches, Wired Beauty can decifer within seconds skin antioxydative and mosterizing reactions. Artificial intelligence improves repeatability of process.`)}
              content={<Image src={modele} alt="Photo of the device"/>}
              id="algo"
            />

            <Image
              src={exemple}
              alt="productImage"
              width="100%"
              height="200px"
            />
          </Box>
        </Box>
        <Footer />
      </>
    );
  }
}

export default OurSolutions;
