import {
  Alert,
  AlertIcon,
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
  const { signUp } = useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [validation, setValidation] = useState("");
  const handleClick = () => setShowPassword(!showPassword);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !confirmPassword) {
      setValidation("Please fill in all");
      return;
    } else if (!email.match("[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+")) {
      setValidation("Enter a valid email");
      return;
    } else if ((confirmPassword.length || password.length) < 6) {
      setValidation("6 characters min");
      return;
    } else if (confirmPassword !== password) {
      setValidation("Passwords do not match");
      return;
    }
    try {
      await signUp(email, password);
      setValidation("");
      onClose();
      //TODO: redirect in admin or customer
      // navigate("/admin");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setValidation("Email format invalid");
      }
      if (error.code === "auth/invalid-email") {
        setValidation("Email format invalid");
      }
    }
  };

  return (
    <>
      <Button onClick={onOpen} margin="auto" size="sm">
        No account?
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormHelperText>We'll never share your email.</FormHelperText>

              <Box marginTop="10px" position="relative">
                <Input
                  id="password"
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

              <Box marginTop="10px" position="relative">
                <Input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
              {validation && (
                <Alert status="error" marginTop="10px" borderRadius="5px">
                  <AlertIcon />
                  {validation}
                </Alert>
              )}
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
