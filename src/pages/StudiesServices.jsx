import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextContentLeft from "../components/TextContentLeft";
import TextContentRight from "../components/TextContentRight";
import TextContentMiddle from "../components/TextContentMiddle";

import table from "../assets/table.png";
import shanghailProtocol from "../assets/shanghailProtocol.png";

import { HashLink as Linked } from "react-router-hash-link";

class StudiesServices extends React.Component {
  render() {
    return (
      <>
        <Navbar
          content1={
            <Box flex="3">
              <Box fontSize="5xl" margin="0 0 1em 0">
                Our studies and services
              </Box>
              <Box fontSize="2xl" fontWeight="light">
                <Box>
                  <Linked to="#studServ">+ Studies and services</Linked>
                </Box>
                <Box>
                  <Linked to="#shanghaiProtocol">+ Shangail protocol</Linked>
                </Box>
              </Box>
            </Box>
          }
          content2={<Box flex="3"></Box>}
          bold5="bold"
          textDeco5="underline"
        />

        <Box backgroundColor="#fff" color="white">
          <Box width="100vw" padding="0 10vw 10vh 10vw" margin="-7rem 0 0 0">
            <TextContentMiddle
              title="Studies and services"
              text="While Wired Beauty always adapts to its clients' specifications and does custom research, the digitally enabled methodology could in the future allow syndicated studies on very large cohorts.Nevertheless, using our IOT lab device and app, Wired Beauty easily managed the following :"
              textAlign="center"
              id="studServ"
            />
          </Box>
          <Box margin="-7rem 0 0 0">
            <Image src={table} width="100%" />
          </Box>
          <Box padding="5rem 0" marginBottom="-4rem">
            <TextContentMiddle
              title="Shanghai protocol"
              textAlign="center"
              moreContent={<Image src={shanghailProtocol} margin="auto" />}
              id="shanghaiProtocol"
            />
          </Box>
        </Box>

        <Footer />
      </>
    );
  }
}

export default StudiesServices;
