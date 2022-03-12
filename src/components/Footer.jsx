import React from "react";
import { Box, Link } from "@chakra-ui/react";
import Waves from "../components/Footer/Wave";

import ChatBotCustom from "../components/ChatBotCustom";

const listContact = [
  {
    text1: "Privacy polic",
    text2: "Legal Notice",
    text3: "Term of Sales",
  },

  {
    text1: "Press contact",
    text2: "press@wired-beauty.com",
    text3: "06.83.72.60.50",
  },

  {
    text1: "Contact sales",
    text2: "Stan@WBT.com",
    text3: "Sophie@WBT.com",
  },

  {
    text1: "Contact investor",
    text2: "Sophie@WBT.com",
    text3: "",
  },
];

class Footer extends React.Component {
  render() {
    return (
      <>
        <ChatBotCustom />
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
            as="h1"
            color="#fff"
            textAlign="center"
            backgroundColor="#18222E"
            fontWeight="bold"
            paddingBottom="5rem"
            marginTop="-7rem"
            fontSize={["1.7rem", "2rem", "2.5rem"]}
          >
            Contact US
          </Box>
          <Box
            color="#fff"
            display="flex"
            padding="0 4rem 8rem 4rem"
            justifyContent="space-around"
            flexWrap="wrap"
            backgroundColor="#18222E"
          >
            {listContact.map(({ text1, text2, text3 }, index) => (
              <Box
                key={index}
                margin="1rem"
                // borderRight="2px solid"
              >
                <Box
                  marginBottom="1.5rem"
                  fontSize={[".7rem", "1rem", "1.5rem"]}
                >
                  {text1}
                </Box>
                <Box
                  marginBottom="1.5rem"
                  fontSize={[".7rem", "1rem", "1.5rem"]}
                >
                  {text2}
                </Box>
                <Box
                  marginBottom="1.5rem"
                  fontSize={[".7rem", "1rem", "1.5rem"]}
                >
                  {text3}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </>
    );
  }
}

export default Footer;
