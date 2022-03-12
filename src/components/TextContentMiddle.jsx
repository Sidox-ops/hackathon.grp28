import React from "react";
import { Box } from "@chakra-ui/react";

class TextContentMiddle extends React.Component {
  render() {
    return (
      <>
        <Box width="100%" margin="1rem 2rem 7rem 2rem" id={this.props.id}>
          <Box
            as="h1"
            color="lightblue"
            fontWeight="bold"
            fontSize={["1.7rem", "2rem", "2.5rem"]}
            textAlign={this.props.textAlign}
            marginBottom="3rem"
          >
            {this.props.title}
          </Box>
          <Box
            color="black"
            textAlign="left"
            fontSize={[".4rem", ".7rem", "1rem"]}
          >
            {this.props.text}
            {this.props.moreContent}
          </Box>
        </Box>
      </>
    );
  }
}

export default TextContentMiddle;
