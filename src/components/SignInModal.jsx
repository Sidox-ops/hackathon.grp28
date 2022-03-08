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
import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function SignUpModal() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { signIn } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => setShowPassword(!showPassword);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/private/private-home");
      onClose();
    } catch {
      alert("email or password invalid");
    }
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" variant="solid">
        Sign in
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign in</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                id="emailSignIn"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Box marginTop="10px" position="relative">
                <Input
                  id="passwordSignIn"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
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
