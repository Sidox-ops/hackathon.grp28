import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextContentLeft from "../components/TextContentLeft";
import TextContentRight from "../components/TextContentRight";
import TextContentMiddle from "../components/TextContentMiddle";

import logoDark from "../assets/logoDark.png";

class ScientistValidation extends React.Component {
  render() {
    return (
      <>
        <Navbar
          content1={
            <Box flex="3">
              <Box fontSize="5xl" fontFamily="Poppins" margin="0 0 1em 0">
                Science behinds Wired Beauty
              </Box>
              <Box fontSize="2xl" fontFamily="Poppins" fontWeight="light">
                <Box>+ Our trusted parteners</Box>
                <Box>+ Similiraties with medicament protocols</Box>
                <Box>+ What makes Wired Beauty different ?</Box>
              </Box>
            </Box>
          }
          content2={<Box flex="3"></Box>}
          bold4="bold"
          textDeco4="underline"
        />

        <Box backgroundColor="#fff" color="white">
          <Box width="100vw" padding="0 10vw" margin="-7rem 0 0 0">
            <TextContentMiddle
              title={"Our trusted partners"}
              moreContent={<Image src={logoDark} margin="0 auto" />}
            />
          </Box>
        </Box>

        <Footer />
      </>
    );
  }
}

export default ScientistValidation;
