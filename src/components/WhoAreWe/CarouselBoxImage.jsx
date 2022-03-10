import { Box, Image } from "@chakra-ui/react";
import React from "react";

class CarouselBoxImage extends React.Component {
  render() {
    return (
      <>
        <Box
          className="demo-item"
          backgroundColor="#18222E"
          color="#fff"
          width="100vw"
          min-height="25vh"
          display="flex"
          padding="2rem 5rem"
          fontFamily="Poppins"
          fontSize="2xl"
        >
          <Box flex="1">
            <Image height="400px" width="400px" src={this.props.img} />
          </Box>
          <Box flex="1">{this.props.text}</Box>
        </Box>
      </>
    );
  }
}

export default CarouselBoxImage;
