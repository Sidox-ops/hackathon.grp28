import { Image } from "@chakra-ui/react";
import notFoundLogo from "../assets/images/404.png";
import React from "react";

function NotFound() {
  return (
    <Image
      width="60vw"
      maxWidth="500px"
      margin="32vh auto"
      objectFit="cover"
      src={notFoundLogo}
      alt="Dan Abramov"
    />
  );
}

export default NotFound;
