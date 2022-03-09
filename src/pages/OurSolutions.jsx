import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import TextContentLeft from "../components/TextContentLeft";
import TextContentRight from "../components/TextContentRight";

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

        <TextContentLeft title={"Data science serving skincare"} text={""} />

        <TextContentRight />
      </>
    );
  }
}

export default OurSolutions;
