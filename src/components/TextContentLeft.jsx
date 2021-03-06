import React from "react";
import { Box } from "@chakra-ui/react";

class TextContentLeft extends React.Component {
  render() {
    return (
      <>
        <Box
          width="100%"
          display="flex"
          marginBottom="10rem"
          id={this.props.id}
        >
          <Box flex="1">
            <Box
              as="h1"
              color="lightblue"
              fontWeight="bold"
              fontSize={["2rem", "2rem", "2.5rem"]}
            >
              {this.props.title}
            </Box>
            <Box color="black">{this.props.text}</Box>
          </Box>

          <Box flex="1">{this.props.content}</Box>
        </Box>
      </>
    );
  }
}

export default TextContentLeft;
