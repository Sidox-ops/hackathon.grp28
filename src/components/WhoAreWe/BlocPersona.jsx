import React, { Component } from "react";
import { Box, Image } from "@chakra-ui/react";

export default class BlocPersona extends Component {
  render() {
    return (
      <>
        <>
          <Box
            backgroundColor="#426080"
            display="flex"
            justifyContent="space-between"
            borderRadius="20"
            padding="1rem"
            margin={["0", "0 2rem 2rem 2rem"]}
            maxWidth="35vw"
            minWidth="400px"
            minHeight="20vh"
          >
            {/* <Box
              backgroundColor="#18222E"
              borderRadius="20"
              flex="1"
              minHeight="100%"
              width="100%"
              margin="0 1rem 0 0"
            ></Box> */}
            <Box flex="1">
              <Image
                minHeight="auto"
                width="100%"
                margin="auto 1rem auto auto"
                src={this.props.img}
              />
            </Box>
            <Box color="#fff" flex="2" margin="0 0 0 1rem">
              <Box
                as="h1"
                fontSize={["1rem", "1.5rem", "2rem"]}
                fontWeight="bold"
              >
                {this.props.title}
              </Box>
              <Box fontSize="1xl">{this.props.txt}</Box>
            </Box>
          </Box>
        </>
      </>
    );
  }
}
