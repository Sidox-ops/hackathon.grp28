import React from "react";
import { Box, Button } from "@chakra-ui/react";

class ProductHomeBloc extends React.Component {
  render() {
    return (
      <>
        <Box
          width="30vw"
          minWidth="300px"
          minHeight="5vh"
          padding="2rem 3rem"
          backgroundColor="#18222E"
          margin="2rem 15px 5rem 15px"
          borderRadius="20"
          boxShadow="15px 10px 35px black"
        >
          <Box
            textAlign="center"
            fontSize={["5px", "20px", "30px"]}
            fontFamily="Poppins"
            marginBottom="2rem"
            height="20%"
          >
            {this.props.title}
          </Box>
          <Box fontSize="auto" fontFamily="Poppins" marginBottom="1rem">
            {this.props.text}
          </Box>
          <Box float="right">
            <Button fontSize="1xl" fontFamily="Poppins" color="black">
              Learn more
            </Button>
          </Box>
        </Box>
      </>
    );
  }
}

export default ProductHomeBloc;
