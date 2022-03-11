import React, { Component } from "react";
import { Box } from "@chakra-ui/react";
import CookieConsent from "react-cookie-consent";

const styleCookies={
    marginY:"auto",
    background: "#2B373B",
}

export default class Cookies extends Component {

  render() {
    return (
      <>
        <Box>
          <CookieConsent
            location="bottom"
            buttonText="Sure !!"
            cookieName="acceptCookies"
            style={styleCookies}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
          >
            This website uses cookies to enhance the user experience.{" "}
            <span style={{ fontSize: "10px" }}>Please accept it o:)</span>
          </CookieConsent>
        </Box>
      </>
    );
  }
}
