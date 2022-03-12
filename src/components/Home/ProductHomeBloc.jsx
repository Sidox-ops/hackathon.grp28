import React from "react";
import { Box, Button } from "@chakra-ui/react";
// import { Link, useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

class ProductHomeBloc extends React.Component {
  render() {
    return (
      <>
        <Box
          width="30vw"
          maxWidth="35vw"
          minWidth="400px"
          minHeight="30vh"
          padding="2rem 3rem"
          backgroundColor="#18222E"
          margin="2rem 15px 5rem 15px"
          borderRadius="20"
          boxShadow="15px 10px 35px black"
        >
          <Box
            as="h1"
            textAlign="center"
            fontSize={["1rem", "1.5rem", "2rem"]}
            marginBottom="2rem"
            // height="20%"
          >
            {this.props.title}
          </Box>
          <Box fontSize={[".2rem", ".8rem", "1rem"]} marginBottom="1rem">
            {this.props.text}
          </Box>
          <Box float="right">
            <Button fontSize="1xl" color="black">
              <Link to={this.props.anchor}>Learn more</Link>
            </Button>
          </Box>
        </Box>
      </>
    );
  }
}

export default ProductHomeBloc;
