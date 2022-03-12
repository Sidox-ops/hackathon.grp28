import React from "react";
import { Box } from "@chakra-ui/react";

class BlocContent extends React.Component {
  render() {
    return (
      <>
        <Box
          width="20rem"
          // margin="5rem 2rem 10rem 2rem"
          margin="5px"
          // margin="auto"
          padding="2rem"
          backgroundColor="#18222E"
          borderRadius="20"
        >
          <Box
            as="h1"
            color="#fff"
            fontWeight="bold"
            fontSize={["1rem", "1.7rem", "2rem"]}
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
