import React from "react";
import { Box } from "@chakra-ui/react";

class TextContentMiddle extends React.Component {
  render() {
    return (
      <>
        <Box width="100%" margin="0 2rem 7rem 2rem">
          <Box
            color="lightblue"
            fontFamily="Poppins"
            fontWeight="bold"
            fontSize="3xl"
            textAlign={this.props.textAlign}
            marginBottom="3rem"
          >
            {this.props.title}
          </Box>
          <Box color="black" fontFamily="Poppins" textAlign="left">
            {this.props.text}
            {this.props.moreContent}
          </Box>
        </Box>
      </>
    );
  }
}

export default TextContentMiddle;
