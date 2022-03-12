import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextContentLeft from "../components/TextContentLeft";
import TextContentRight from "../components/TextContentRight";
import TextContentMiddle from "../components/TextContentMiddle";
import BlocTextDouble from "../components/WhoAreWe/BlocTextDouble";

import logoDark from "../assets/images/logoDark.png";
import qima from "../assets/images/qima.png";
import hopitauxParis from "../assets/images/hopitauxParis.png";
import diagram1 from "../assets/images/schema1.png";
import diagram2 from "../assets/images/schema2.png";

import parse from "html-react-parser";

import { HashLink as Linked } from "react-router-hash-link";

class ScientistValidation extends React.Component {
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
                Science behinds Wired Beauty
              </Box>
              <Box fontSize={["1rem", "1.5rem", "2rem"]} fontWeight="light">
                <Box as="h2">
                  <Linked smooth to="#partners">
                    + Our trusted parteners
                  </Linked>
                </Box>
                <Box as="h2">
                  <Linked smooth to="#schema1">
                    + Similiraties with medicament protocols
                  </Linked>
                </Box>
                <Box as="h2">
                  <Linked smooth to="#schema2">
                    + What makes Wired Beauty different ?
                  </Linked>
                </Box>
              </Box>
            </>
          }
          bold4="bold"
          textDeco4="underline"
        />

        <Box backgroundColor="#fff" color="white">
          <Box
            width="100vw"
            padding="0 10vw"
            margin="-7rem 0 0 0"
            id="OurPartners"
          >
            <TextContentMiddle
              title={"Our trusted partners"}
              textAlign="center"
              moreContent={
                <Image src={logoDark} margin="0 auto" alt="Logo dark version" />
              }
              id="partners"
            />

            <Box display="flex" justifyContent="space-around" flexWrap="wrap">
              <Image src={hopitauxParis} alt="Logo of paris hospital" />
              <Image src={qima} alt="Logo of qima" />
            </Box>
            <TextContentMiddle
              text={parse(`
                The Wired Beauty technology is the fruit of a scientific consortium uniting the founders of Wired Beauty, the APHP (Assistance Publique – Hôpitaux de Paris www.APHP.fr) and the French Contract Research Organization (CRO), QIMA www.qima.fr.
                <br>
                <br>TOGETHER THEY HAVE :  
                <br>- Demonstrated the power of electrochemistry to decifer antioxydative performance on the skin ➢ 
                <br>- Proved that the Wired Beauty IOT nomadic lab can level with traditionnal chromatography test in less than 1 minute (90% correlation) ➢ see results
                <br>- Found that the Wired Beauty IOT nomadic lab device can beat TWELL tests ➢ see results a fournir
                <br>- Miniaturized the Wired Beauty IOT nomadic device
                <br>- Developped the interpretation of the signal algorythm within minutes see.
              `)}
              textAlign="center"
            />
            <TextContentMiddle
              title="What is oxidative stress ?"
              text="Oxidative stress is a rupture of cellular balance, producing a build-up of free radicals responsible for skin premature ageing."
              textAlign="left"
            />
            <TextContentMiddle
              title="How can antioxidants protect the skin?"
              text="One can distinguish two types of antioxidants : enzymatic (for instance : superoxide, catalase, peroxidase, dismutase, peroxidase glutathione) and non enzymatic ones (such as ascorbic acid, glutathione, uric acid, vitamins A, E, C, etc.)"
              textAlign="left"
            />
            <TextContentMiddle
              title="Similarities with medicaments protocols"
              text={parse(`
                Skin care product testing often resembles the protocols of medicament testing. 
                <br>It is a long sequencial process which aims to protect the voluntary testers, measure performance, record side-effects. 
                <br>For the most serious cosmetic labs, it is not rare to spend over 18 months gathering and analyzing the results of the following stages.
              `)}
              textAlign="center"
            />
          </Box>
          {/* <Box backgroundColor="red"> */}
          <Image
            src={diagram1}
            margin="auto"
            id="diagram1"
            alt="Image of a diagram"
          />
          <Box margin="7rem 0 -7rem 0">
            <TextContentMiddle
              title="What makes Wired Beauty different"
              textAlign="center"
            />
          </Box>
          <Image
            src={diagram1}
            margin="auto"
            id="diagram1"
            alt="Image of a diagram"
          />
          {/* </Box> */}
        </Box>

        <Footer />
      </>
    );
  }
}

export default ScientistValidation;
