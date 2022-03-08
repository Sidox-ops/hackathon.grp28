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
  const { signIn } = useContext(UserContext);
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
      // await signIn(inputs.current[0].value, inputs.current[1].value);
      // navigate("/private/private-home");
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
            <FormControl ref={formRef}>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input id="emailSignIn" type="email" ref={addInputs} />

              <Box marginTop="10px" position="relative">
                <Input
                  id="passwordSignIn"
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
