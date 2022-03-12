import { Box, Text, Select, Image, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignInModal from "./SignInModal";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { UserContext } from "../context/userContext";

import logov2 from "../assets/images/logov2.png";
import backgroundURL from "../assets/images/backgroundURL.png";

import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Wave from "./Footer/Wave";

const valueHeightNavBar = "3";

const languages = [
  {
    code: "en",
    name: "English",
    county_code: "gb",
  },
  {
    code: "fr",
    name: "Français",
    county_code: "fr",
  },
  {
    code: "cn",
    name: "中国人",
    county_code: "cn",
  },
];

export default function Navbar(props) {
  const navigate = useNavigate();
  const { currentUser, currentRoles, setCurrentRoles } = useContext(
    UserContext
  );
  const [displayed, setDisplayed] = useState("block");

  const { t } = useTranslation();

  const toast = useToast();

  function toastItLogout() {
    toast({
      title: "Success",
      description: "You have been disconnected",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  }
  const logout = async () => {
    try {
      await signOut(auth)
        .then(() => {
          toastItLogout();
          setCurrentRoles([]);
          navigate("/");
        })
        .catch((error) => {
          alert(error);
        });
    } catch (error) {
      alert("we cant sign out");
    }
  };

  useEffect(() => {
    document.title = t("title");
  }, [t]);

  return (
    <Box backgroundImage={backgroundURL} backgroundSize="cover" id="top">
      <Box padding="4rem 3rem 3rem 3rem" width="100vw" fontFamily="poppins">
        <Box display="flex">
          <Box
            cursor="pointer"
            height={`${valueHeightNavBar}rem`}
            width={`${valueHeightNavBar}rem`}
            marginRight="2rem"
            onClick={() => {
              displayed === "block"
                ? setDisplayed("none")
                : setDisplayed("block");
            }}
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
                <Image src={logov2} height="auto" width="auto" alt="Logo" />
              </Link>
            </Text>
          </Box>

          <Box flex="1"></Box>

          <Box flex="18"></Box>
          <Box flex="auto">
            <Box display="flex" justifyContent="space-around" color="white">
              {Boolean(currentRoles.includes("customer")) && (
                <Box margin="auto 1rem auto auto" role="link">
                  <Link to="/charts">Charts</Link>
                </Box>
              )}
              {!currentUser && (
                <Box margin="auto 1rem auto auto" fontSize={["sm", "md", "lg"]}>
                  <Link to="/ContactUs">{t("navbarBecome")}</Link>
                </Box>
              )}
              {Boolean(currentRoles.includes("admin")) && (
                <Box margin="auto 1rem auto auto" role="link">
                  <Link to="/admin/dashboard">Dashboard</Link>
                </Box>
              )}

              <Box margin="auto 1rem auto auto" fontSize={["sm", "md", "lg"]}>
                <Link to="/ContactUs">{t("navbarContact")}</Link>
              </Box>
              <Box margin="auto 1rem auto auto">
                {currentUser ? (
                  <Box
                    onClick={() => logout()}
                    cursor="pointer"
                    fontSize={["sm", "md", "lg"]}
                  >
                    {t("navbarSignOut")}
                  </Box>
                ) : (
                  <SignInModal />
                )}
              </Box>
              <Select
                width="auto"
                marginLeft="1rem"
                color="dark"
                onChange={(e) => i18next.changeLanguage(e.target.value)}
              >
                {languages.map(({ code, name }, index) => (
                  <option key={index} style={{ color: "#18222E" }} value={code}>
                    {name}
                  </option>
                ))}
              </Select>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* display of the Menu McBurger */}
      <Box>
        <Box
          display="flex"
          margin="0 3rem 4rem 3rem"
          textColor="white"
          justifyContent="space-around"
        >
          <Box flex="2" display={displayed}>
            <Box width="100%">
              <Box
                textColor="white"
                fontFamily="Poppins"
                fontSize={["1rem", "1.2rem", "1.6rem"]}
              >
                <Box
                  as="h2"
                  padding="1em 0"
                  fontWeight={props.bold1}
                  textDecoration={props.textDeco1}
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  <Link to="/WhatWeDo#">{t("whatWeDo")}</Link>
                </Box>
                <Box
                  as="h2"
                  padding="1em 0"
                  fontWeight={props.bold2}
                  textDecoration={props.textDeco2}
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  <Link to="/OurSolutions#">{t("ourSolutions")}</Link>
                </Box>
                <Box
                  as="h2"
                  padding="1em 0"
                  fontWeight={props.bold3}
                  textDecoration={props.textDeco3}
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  <Link to="/WhoAreWe#">{t("whoAreWe")}</Link>
                </Box>
                <Box
                  as="h2"
                  padding="1em 0"
                  fontWeight={props.bold4}
                  textDecoration={props.textDeco4}
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  <Link to="/ScientistValidation#">
                    {t("scientistValidation")}
                  </Link>
                </Box>
                <Box
                  as="h2"
                  padding="1em 0"
                  fontWeight={props.bold5}
                  textDecoration={props.textDeco5}
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  <Link to="/StudiesServices#">{t("studiesAndServices")}</Link>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box flex="1"></Box>

          <Box flex="6">{props.content1}</Box>

          <Box flex="auto"></Box>
        </Box>
      </Box>
      <Wave />
    </Box>
  );
}
