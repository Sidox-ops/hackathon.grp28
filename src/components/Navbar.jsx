import { Breadcrumb, BreadcrumbItem, Button } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import { signOut, getAuth } from "firebase/auth";
import { auth } from "../firebase.config";

export default function Navbar() {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      // await signOut(auth);
      // navigate("/");
      const auth2 = getAuth();
      signOut(auth2)
        .then(() => {
          // Sign-out successful.
          navigate("/");
        })
        .catch((error) => {
          // An error happened.
        });
    } catch (error) {
      alert("we cant sign out");
    }
  };
  return (
    <Breadcrumb display="flex" separator="" justifyContent="space-around">
      <BreadcrumbItem>
        <Link to="/">AuthJs</Link>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <SignInModal />
        <SignUpModal />
        <Button colorScheme="teal" variant="ghost" onClick={() => logout()}>
          Log out
        </Button>
        <Button colorScheme="teal" variant="link">
          Button
        </Button>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
