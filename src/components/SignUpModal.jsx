import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Link,
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

export default function SignUpModal() {
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
      <Box
        role="link"
        width="max-content"
        onClick={onOpen}
        marginTop="10px"
        cursor="pointer"
        color="#fff"
      >
        Create an account
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent top="25vh" backgroundColor="#18222E" padding="1rem">
          <ModalHeader textAlign="center" color="#fff">
            Sign up
          </ModalHeader>
          <ModalCloseButton color="#fff" />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="email" color="#fff">
                Email address
              </FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Enter email address"
                onChange={(e) => setEmail(e.target.value)}
                backgroundColor="#fff"
              />
              <FormHelperText>We'll never share your email.</FormHelperText>

              <Box marginTop="10px" position="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  backgroundColor="#fff"
                />
                <Button
                  zIndex="1"
                  position="absolute"
                  right="6px"
                  top="6px"
                  h="1.75rem"
                  size="sm"
                  color="#18222E"
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
                  backgroundColor="#fff"
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
