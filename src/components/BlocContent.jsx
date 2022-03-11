import React from "react";
import { Box } from "@chakra-ui/react";

class BlocContent extends React.Component {
  render() {
    return (
      <>
        <Box
          width="100%"
          margin="5rem 2rem 10rem 2rem"
          padding="2rem"
          backgroundColor="#18222E"
          borderRadius="20"
        >
          <Box
            color="#fff"
            fontWeight="bold"
            fontSize="3xl"
            textAlign="center"
            marginBottom="1rem"
          >
            {this.props.title}
          </Box>
          <Box color="#fff" textAlign="left">
            {this.props.text}
          </Box>
        </Box>
      </>
    );
  }
}

export default BlocContent;
