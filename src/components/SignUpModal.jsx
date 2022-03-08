import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useRef } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function SignUpModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { signUp } = useContext(UserContext);
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = () => setShowPassword(!showPassword);

  const inputs = useRef([]);
  const formRef = useRef();
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const credentials = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      );
      console.log(
        "%cSignUpModal.jsx line:44 credentials",
        "color: #007acc;",
        credentials
      );
      navigate("/private/private-home");
      onClose();
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        console.log("todo: alert invalid email");
      }
      if (error.code === "auth/email-already-in-use") {
        console.log("todo: alert email also used");
      }
    }
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" variant="outline">
        Sign up
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl ref={formRef}>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input id="email" type="email" ref={addInputs} />
              <FormHelperText>We'll never share your email.</FormHelperText>

              <Box marginTop="10px" position="relative">
                <Input
                  id="password"
                  ref={addInputs}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                />
                <Button
                  zIndex="1"
                  position="absolute"
                  right="6px"
                  top="6px"
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={onSubmit}>
              Send
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
