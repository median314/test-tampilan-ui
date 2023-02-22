import {
  Box,
  Button,
  Checkbox,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { SlHandbag } from "react-icons/sl";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import React, { useState } from "react";

const AppNavbar = () => {
  const [show, setShow] = useState(false);
  const handleShowPassword = () => setShow(!show);

  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    isOpen: isSignupOpen,
    onOpen: onSignupOpen,
    onClose: onSignupClose,
  } = useDisclosure();

  const signupModal = () => {
    onSignupOpen();
    onLoginClose();
  };

  const loginModal = () => {
    onLoginOpen();
    onSignupClose();
  };

  return (
    <Box
      px={"5em"}
      py={3}
      bg={"white"}
      borderBottom={"1px"}
      borderColor={"gray.300"}
      position={"fixed"}
      w={"full"}
      top={0}
      //   maxH={75}
      zIndex={1}
    >
      <HStack justifyContent={"space-between"}>
        <HStack spacing={10}>
          <Image
            w={100}
            src="https://www.jcrew.com/next-static/images/sidecar-modules/navigation/jcrew-logo-fall-21.svg"
          />
          <HStack spacing={4}>
            <a href="#">New</a>
            <a href="12">Women</a>
            <a href="#">Men</a>
            <a href="#">Kids</a>
            <a href="#">Swim</a>
            <a href="#">Cashmere</a>
            <a href="#">Home</a>
            <a href="#">Stories</a>
            <a href="#">Sales</a>
          </HStack>
        </HStack>

        <HStack spacing={8}>
          <Box>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FiSearch size={20} color="gray.300" />}
              />
              <Input type="text" placeholder="Search" borderRadius={0} />
            </InputGroup>
          </Box>

          <Text
            onClick={onLoginOpen}
            cursor={"pointer"}
            _hover={{ borderBottom: "2px" }}
          >
            Sign In
          </Text>
          <SlHandbag size={20} />
        </HStack>
      </HStack>

      <Modal isOpen={isLoginOpen} onClose={onLoginClose} size={"xs"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text align={"center"}>Sign In</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Email Address" borderRadius={0} />
            <Input
              type={"password"}
              placeholder="Password"
              borderRadius={0}
              my={3}
            />
            <HStack justifyContent={"space-between"}>
              <Checkbox size={"sm"}>Remember me</Checkbox>
              <Text
                color={"telegram.900"}
                fontWeight={"semibold"}
                fontSize={13}
              >
                Forgot Password?
              </Text>
            </HStack>
            <Button w={"full"} colorScheme={"facebook"} borderRadius={0} my={7}>
              SIGN IN
            </Button>
            <Text fontSize={12}>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </Text>
          </ModalBody>
          <ModalFooter mt={10}>
            <Text align={"center"} fontSize={14}>
              Don't Have an Account?{" "}
            </Text>
            <Text
              as={"span"}
              ml={1}
              fontSize={14}
              color={"facebook.900"}
              cursor={"pointer"}
              fontWeight="semibold"
              onClick={signupModal}
            >
              {" "}
              Sign Up Now
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isSignupOpen} onClose={onSignupClose} size={"xs"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text align={"center"}>Sign Up</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Email Address" borderRadius={0} />
            <InputGroup size="md" my={3}>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                borderRadius={0}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleShowPassword}
                  borderRadius={0}
                  bg={"transparent"}
                >
                  {show ? (
                    <AiOutlineEye size={20} />
                  ) : (
                    <AiOutlineEyeInvisible size={20} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Checkbox size={"sm"}>Remember me</Checkbox>

            <Button
              w={"full"}
              bg={"black"}
              color={"white"}
              borderRadius={0}
              my={5}
            >
              CREATE AN ACCOUNT
            </Button>
            <Text fontSize={12}>
              By clicking "Create an Account", you agree to our Terms of Use and
              Privacy Policy, including the Use of Cookies and the transfer of
              your personal information to the United States, a jurisdiction
              that may not provide an equivalent level of data protection to the
              laws in your home country.
            </Text>
          </ModalBody>
          <ModalFooter mt={10}>
            <Text align={"center"} fontSize={15}>
              Already Have an Account?{" "}
            </Text>
            <Text
              as={"span"}
              ml={1}
              fontSize={15}
              cursor={"pointer"}
              onClick={loginModal}
            >
              {" "}
              Sign In
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AppNavbar;
