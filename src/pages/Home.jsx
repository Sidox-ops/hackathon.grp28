import React, { useContext } from "react";
import ProductHomeBloc from "../components/Home/ProductHomeBloc";
import Footer from "../components/Footer";
// import { UserContext } from "../context/userContext";
import { Box, Link } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Wave from "../components/Footer/Wave";

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import ChatBotCustom from "../components/ChatBotCustom";
// const { t } = useTranslation();

const products = [
  {
    title: "BeautyTech X Skincare",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, . ",
    anchor:"/WhatWeDo#",
  },
  {
    title: "Nomadic labgrade IOT device & smart app",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, . ",
    anchor:"/OurSolutions#",
  },
  {
    title: "Our insanely fast algorithm",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, . ",
    anchor:"/#",
  },
  {
    title: "Our partners",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, . ",
    anchor:"/ScientistValidation#OurPartners",
  },
  {
    title: "The science behinds",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, . ",
    anchor:"/#",
  },
  {
    title: "Our values",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, . ",
    anchor:"/WhoAreWe#OurValues",
  },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar
        content1={
          <Box flex="3">
            <Box fontSize="5xl" fontFamily="Poppins" margin="0 0 1em 0">
              Digitally enabled Lab & Consumer skincare testing
            </Box>
            <Box fontSize="2xl" fontFamily="Poppins" fontWeight="light">
              {/* <Box>+ Biology</Box>
              <Box>+ IOT nomadic lab</Box>
              <Box>+ Consumer app</Box>
              <Box>+ Insanely fast algorythm</Box> */}
              <Box>+ Skin Analyze</Box>
              <Box>+ Mobile skin lab</Box>
              <Box>+ Smart Algorithm & app</Box>
              <Box>+ Data</Box>
            </Box>
          </Box>
        }
        content2={<Box flex="3"></Box>}
      />

      <Wave />
      <Box backgroundColor="#fff" color="white">
        <Box width="100vw" padding="0 10vw">
          <Box
            textAlign="center"
            fontSize="5xl"
            fontFamily="Poppins"
            margin="-25rem 0 3rem 0"
            color="#161C27"
          >
            More about us
          </Box>
          <Box display="flex" justifyContent="space-around" flexWrap="wrap">
            {products.map((i, index) => (
              <ProductHomeBloc title={i.title} text={i.text} key={index} anchor={i.anchor}/>
            ))}
          </Box>
        </Box>
        <ChatBotCustom />
        <Footer />
      </Box>
    </>
  );
}
