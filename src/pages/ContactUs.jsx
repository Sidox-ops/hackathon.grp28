import React, { Component } from "react";
import {
  Box,
  Image,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TextContentMiddle from "../components/TextContentMiddle";

const formList = [
  {
    text: "Company",
  },
  {
    text: "Lastanme",
  },
  {
    text: "Name",
  },
  {
    text: "Email",
  },
  {
    text: "Phone number",
  },
  {
    text: "Position held",
  },
  {
    text: "Company location",
  },
];

export default class ContactUs extends Component {
  render() {
    return (
      <>
        <Navbar
          content1={
            <Box flex="3">
              <Box fontSize="5xl" fontFamily="Poppins" margin="0 0 1em 0">
                Want to contact us ?
              </Box>
            </Box>
          }
        />

        <Box
          // backgroundColor="red"
          borderRadius="20"
          // border=" 2px solid #18222E"
          minHeight="100vh"
          width="80vw"
          margin="-10rem auto 5rem auto"
          padding="2rem"
          color="18222E"
          zIndex="auto"
        >
          <FormControl>
            {formList.map(({ text }, index) => (
              <Box key={index} marginBottom="2rem">
                <FormLabel htmlFor="email">{text}</FormLabel>
                <Input id="email" type="email" border="2px solid" />
              </Box>
            ))}
            <Box marginTop="7rem">
              <Button backgroundColor="#18222E" color="#fff" width="100%">
                Submit
              </Button>
            </Box>
          </FormControl>
        </Box>

        <Footer />
      </>
    );
  }
}
