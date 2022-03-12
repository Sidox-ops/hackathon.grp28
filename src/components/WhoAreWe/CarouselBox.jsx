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
          minHeight="100%"
          padding="2rem 5rem"
          fontSize={["1rem", "1.5rem", "2rem"]}
        >
          <Box minHeight="100%" fontSize={[".4rem", ".7rem", "1rem"]}>
            {this.props.text}
          </Box>
        </Box>
      </>
    );
  }
}

export default CarouselBox;
