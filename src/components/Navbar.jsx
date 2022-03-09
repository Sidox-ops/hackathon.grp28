import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import { Select } from "@chakra-ui/react";

export default function Navbar(props) {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("common");
  // const [displayed, setDisplayed] = useState("none");
  // const logout = async () => {
  //   try {
  //     await signOut(auth);
  //     navigate("/");
  //   } catch (error) {
  //     alert("we cant sign out");
  //   }
  // };
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
                <Link to="/">{t("become_a_panelist")}</Link>
              </Box>
              <Box margin="auto">
                <Link to="/">{t("contact_us")}</Link>
              </Box>
              <Box margin="auto">
                <Link to="/">{t("sign_in")}</Link>
              </Box>
              <Select
                width="70px"
                onChange={(e) => i18n.changeLanguage(e.target.value)}
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </Select>
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
