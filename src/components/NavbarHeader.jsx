import { Box, Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { UserContext } from "../context/userContext";
import logo from "../assets/logo.png";

export default function Navbar(props) {
  const navigate = useNavigate();
  // const [displayed, setDisplayed] = useState("none");

  return (
    <>
      <Box width="100vw" height="4vh" backgroundColor="#1C2834"></Box>
      <Box
        padding="4rem 3rem 3rem 3rem"
        width="100vw"
        minHeight="11rem"
        fontFamily="poppins"
      >
        <Box display="flex">
          <Box
            cursor="pointer"
            height="7rem"
            width="7rem"
            // onClick={()=>{displayed === 'block' ? setDisplayed('none') : setDisplayed('block')}}
          >
            <Box width="100%" height="20%" backgroundColor="#fff"></Box>
            <Box width="100%" height="20%"></Box>
            <Box width="100%" height="20%" backgroundColor="#fff"></Box>
            <Box width="100%" height="20%"></Box>
            <Box width="100%" height="20%" backgroundColor="#fff"></Box>
          </Box>

          <Box textColor="#fff">
            <Text textAlign="center">
              <Link to="/">
                <img src={logo} style={{ height: "7rem" }} />
              </Link>
            </Text>
          </Box>

          <Box flex="1"></Box>

          <Box flex="18">
            {/* <Image src='https://via.placeholder.com/850x100'/> */}
          </Box>
          <Box flex="auto">
            <Box display="flex" justifyContent="space-between" color="white">
              <Box margin="auto">
                <Link to="/">Become a panelist</Link>
              </Box>
              <Box margin="auto">
                <Link to="/">Contact us</Link>
              </Box>
              <Box margin="auto">
                <Link to="/">Sign in</Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* display of the Menu McBurger */}
      <Box>
        <Box display="flex" margin="0 3rem 4rem 3rem" textColor="white">
          <Box flex="2">
            <Box width="100%">
              <Box textColor="white" fontFamily="Poppins" fontSize="2xl">
                <Box
                  padding="1em 0"
                  fontWeight={props.bold1}
                  textDecoration={props.textDeco1}
                >
                  <Link to="/WhatWeDo">What we do</Link>
                </Box>
                <Box
                  padding="1em 0"
                  fontWeight={props.bold2}
                  textDecoration={props.textDeco2}
                >
                  <Link to="/OurSolutions">Our solutions</Link>
                </Box>
                <Box
                  padding="1em 0"
                  fontWeight={props.bold3}
                  textDecoration={props.textDeco3}
                >
                  <Link to="/WhoAreWe">Who are we</Link>
                </Box>
                <Box
                  padding="1em 0"
                  fontWeight={props.bold4}
                  textDecoration={props.textDeco4}
                >
                  <Link to="/ScientistValidation">Scientist validation</Link>
                </Box>
                <Box
                  padding="1em 0"
                  fontWeight={props.bold5}
                  textDecoration={props.textDeco5}
                >
                  <Link to="/StudiesServices">Studies and services</Link>
                </Box>
              </Box>
            </Box>
          </Box>
          {props.content1}
          {props.content2}
        </Box>
      </Box>
    </>
  );
}
