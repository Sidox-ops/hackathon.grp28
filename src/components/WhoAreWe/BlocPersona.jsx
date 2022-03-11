import React, { Component } from "react";
import { Box } from "@chakra-ui/react";

export default class BlocPersona extends Component {
  render() {
    return (
      <>
        <Box>
          <Box backgroundColor="#426080" display="flex" justifyContent="space-between" borderRadius="20" padding="1rem" margin={["0", "0 2rem 2rem 2rem"]} maxWidth={["0","35vw"]} minHeight="20vh">

            <Box backgroundColor="#18222E" borderRadius="20" flex="1" minHeight="100%" width="100%" margin="0 1rem 0 0"></Box>
            <Box color="#fff" flex="3" margin="0 0 0 1rem">
              <Box fontSize="2xl" fontFamily="Poppins" fontWeight="bold">
                {this.props.title}
              </Box>
              <Box fontSize="1xl" fontFamily="Poppins">{this.props.txt}</Box>
            </Box>

          </Box>
        </Box>
      </>
    );
  }
}
