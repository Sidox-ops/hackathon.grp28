import { Box, Image } from "@chakra-ui/react";
import React from "react";

class CarouselBox extends React.Component {
  render() {
    return (
      <>
        <Box
          className="demo-item"
          backgroundColor="#18222E"
          color="#fff"
          width="100vw"
          min-height="25vh"
          padding="2rem 5rem"
          fontSize="2xl"
        >
          <Box>{this.props.text}</Box>
        </Box>
      </>
    );
  }
}

export default CarouselBox;
