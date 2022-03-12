import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextContentLeft from "../components/TextContentLeft";
import TextContentRight from "../components/TextContentRight";
import TextContentMiddle from "../components/TextContentMiddle";

import table from "../assets/images/table.png";
import shanghailProtocol from "../assets/images/shanghailProtocol.png";

import { HashLink as Linked } from "react-router-hash-link";

class StudiesServices extends React.Component {
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
                Our studies and services
              </Box>
              <Box fontSize={["1rem", "1.5rem", "2rem"]} fontWeight="light">
                <Box as="h2">
                  <Linked smooth to="#studServ">
                    + Studies and services
                  </Linked>
                </Box>
                <Box as="h2">
                  <Linked smooth to="#shanghaiProtocol">
                    + Shangail protocol
                  </Linked>
                </Box>
              </Box>
            </>
          }
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
            <Image src={table} width="100%" alt="Image of a table" />
          </Box>
          <Box padding="5rem 0" marginBottom="-4rem">
            <TextContentMiddle
              title="Shanghai protocol"
              textAlign="center"
              moreContent={
                <Image
                  src={shanghailProtocol}
                  margin="auto"
                  alt="Shanghai project"
                />
              }
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
