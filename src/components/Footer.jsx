import React from "react";
import { Box, Link } from "@chakra-ui/react";
import Waves from "../components/Footer/Wave";

class Footer extends React.Component {
  render() {
    return (
      <>
        <Box backgroundColor="#fff">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#18222E"
              fillOpacity="1"
              d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,53.3C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
          {/* <Waves/> */}
          <Box
            color="#fff"
            textAlign="center"
            backgroundColor="#18222E"
            fontWeight="bold"
            fontSize="4xl"
            paddingBottom="5rem"
            marginTop="-7rem"
          >
            Contact US
          </Box>
          <Box
            color="#fff"
            display="flex"
            padding="0 4rem 8rem 4rem"
            justifyContent="space-around"
            backgroundColor="#18222E"
          >
            <Box>
              <Box marginBottom="1.5rem" fontSize="2xl">
                <Link to="/">Privacy policy</Link>
              </Box>
              <Box marginBottom="1.5rem" fontSize="2xl">
                <Link to="/">Legal Notice</Link>
              </Box>
              <Box marginBottom="1.5rem" fontSize="2xl">
                <Link to="/">Term of Sales</Link>
              </Box>
            </Box>

            <Box>
              <Box marginBottom="1.5rem" fontSize="2xl">
                <Link to="/">Press contact:</Link>
              </Box>
              <Box marginBottom="1.5rem" fontSize="2xl">
                <Link to="/">press@wired-beauty.com</Link>
              </Box>
              <Box marginBottom="1.5rem" fontSize="2xl">
                <Link to="/">06.83.72.60.50</Link>
              </Box>
            </Box>

            {/* TODO title "Contact us" */}

            <Box>
              <Box marginBottom="1.5rem" fontSize="2xl">
                <Link to="/">Contact sales: </Link>
              </Box>
              <Box marginBottom="1.5rem" fontSize="2xl">
                <Link to="/">Stan@WBT.com</Link>
              </Box>
              <Box marginBottom="1.5rem" fontSize="2xl">
                <Link to="/">Sophie@WBT.com</Link>
              </Box>
            </Box>

            <Box>
              <Box marginBottom="1.5rem" fontSize="2xl">
                <Link to="/">Contact investor: </Link>
              </Box>
              <Box marginBottom="1.5rem" fontSize="2xl">
                <Link to="/">Sophie@WBT.com</Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}

export default Footer;
