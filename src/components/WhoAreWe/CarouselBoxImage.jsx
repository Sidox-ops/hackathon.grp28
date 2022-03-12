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
          minHeight="100%"
          display="flex"
          // justifyContent="space-between"
          padding="2rem 5rem"
          fontSize={["1rem", "1.5rem", "2rem"]}
        >
          <Box flex="3">
            <Image
              height="auto"
              width="auto"
              src={this.props.img}
              alt="Photo of a person"
            />
          </Box>
          <Box flex="1"></Box>
          <Box flex="9" minHeight="100%" fontSize={[".4rem", ".7rem", "1rem"]} textAlign="left">
            {this.props.text}
          </Box>
        </Box>
      </>
    );
  }
}

export default CarouselBoxImage;
