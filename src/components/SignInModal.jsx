import {
  Box,
  Button,
  FormControl,
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
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import { useTranslation } from "react-i18next";

export default function SignInModal() {
  const navigate = useNavigate();
  const toast = useToast();
  const { t } = useTranslation();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { signIn } = useContext(UserContext);

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { currentRoles } = useContext(UserContext);

  const handleClick = () => setShowPassword(!showPassword);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      if (currentRoles.includes("admin")) navigate("/admin/dashboard");
      onClose();
    } catch {
      toast({
        title: "Email or password invalid",
        description: "please retry",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box onClick={onOpen} margin="auto" cursor="pointer">
        {t("navbarSignIn")}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent top="25vh" backgroundColor="#18222E" padding="1rem">
          <ModalHeader textAlign="center" color="#fff">
            Login
          </ModalHeader>
          <ModalCloseButton color="#fff" />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="email" color="#fff">
                Email address
              </FormLabel>
              <Input
                id="emailSignIn"
                type="email"
                placeholder="Enter email address"
                onChange={(e) => setEmail(e.target.value)}
                backgroundColor="#fff"
              />

              <Box marginTop="20px" position="relative">
                <Box display="flex" justifyContent="space-between">
                  <FormLabel htmlFor="email" color="#fff">
                    Password
                  </FormLabel>
                  <Button
                    zIndex="1"
                    h="1.75rem"
                    size="sm"
                    color="#18222E"
                    onClick={handleClick}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </Box>
                <Input
                  id="passwordSignIn"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  backgroundColor="#fff"
                />
              </Box>
            </FormControl>
            <SignUpModal />
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
