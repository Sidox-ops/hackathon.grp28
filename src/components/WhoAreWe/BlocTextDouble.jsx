import React, { Component } from "react";
import TextContentMiddle from "../TextContentMiddle";
import { Box } from "@chakra-ui/react";
import parse from "html-react-parser";

export default class BlocTextDouble extends Component {
  render() {
    return (
      <>
        <Box display="flex" id={this.props.id}>
          <TextContentMiddle
            title={this.props.title1}
            text={parse(this.props.text1)}
            moreContent={this.props.moreText1}
            textAlign={this.props.textAlign1}
          />
          <TextContentMiddle
            title={this.props.title2}
            text={parse(this.props.text2)}
            moreContent={this.props.moreText2}
            textAlign={this.props.textAlign2}
          />
        </Box>
      </>
    );
  }
}
