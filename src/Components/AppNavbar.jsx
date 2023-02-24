import {
  Box,
  Button,
  Checkbox,
  Divider,
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
  Stack,
  Text,
  useDisclosure,
  IconButton,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  BoxProps,
  FlexProps,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { SlHandbag } from "react-icons/sl";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineRight,
} from "react-icons/ai";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaSearch } from "react-icons/fa";

const AppNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [show, setShow] = useState(false);
  const handleShowPassword = () => setShow(!show);

  const navigate = useNavigate();
  const btnRef = useRef();

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const width = window.innerWidth;

  useState(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

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
  const {
    isOpen: isMobileLoginOpen,
    onOpen: onMobileLoginOpen,
    onClose: onMobileLoginClose,
  } = useDisclosure();

  const {
    isOpen: isMobileSignupOpen,
    onOpen: onMobileSignupOpen,
    onClose: onMobileSignupClose,
  } = useDisclosure();
  const {
    isOpen: isNavOpen,
    onOpen: onNavOpen,
    onClose: onNavClose,
  } = useDisclosure();

  const signupModal = () => {
    onSignupOpen();
    onLoginClose();
  };

  const loginModal = () => {
    onLoginOpen();
    onSignupClose();
  };

  const mobileLoginDrawer = () => {
    onMobileLoginOpen();
    onMobileSignupClose();
  };
  const mobileSignupDrawer = () => {
    onMobileSignupOpen();
    onMobileLoginClose();
  };

  return (
    <Box
      px={5}
      py={3}
      bg={"white"}
      borderBottom={"1px"}
      borderColor={"gray.300"}
      position={"fixed"}
      w={width}
      top={0}
      zIndex={1}
    >
      {isMobile ? (
        <>
          <HStack justify={"space-between"}>
            <HStack>
              <Box onClick={onNavOpen}>
                <HamburgerIcon />
              </Box>
              <FiSearch size={20} color="gray.300" />
            </HStack>
            <Stack onClick={() => navigate('/')} cursor='pointer'>
              <Image
                w={100}
                src="https://cdn.shopify.com/s/files/1/0608/6724/8340/files/Logo_klamby_baru_banget_140x@2x.png?v=1643345083"
              />
            </Stack>
            <Stack onClick={() => navigate("/cart")} cursor="pointer">
              <SlHandbag size={20} />
            </Stack>
          </HStack>
        </>
      ) : (
        <HStack justifyContent={"space-between"}>
          <HStack spacing={10}>
            <Stack onClick={() => navigate('/')} cursor='pointer'>
              <Image
                w={100}
                src="https://cdn.shopify.com/s/files/1/0608/6724/8340/files/Logo_klamby_baru_banget_140x@2x.png?v=1643345083"
              />
            </Stack>

            <HStack spacing={5} alignItems="center" justifyContent={"center"}>
              <Stack onClick={() => navigate("/product")} cursor="pointer">
                <Text fontSize={"sm"} color="gray.500">
                  New
                </Text>
              </Stack>

              <Stack onClick={() => navigate("/product")} cursor="pointer">
                <Text fontSize={"sm"} color="gray.500">
                  Women
                </Text>
              </Stack>

              <Stack onClick={() => navigate("/product")} cursor="pointer">
                <Text fontSize={"sm"} color="gray.500">
                  Men
                </Text>
              </Stack>

              <Stack onClick={() => navigate("/product")} cursor="pointer">
                <Text fontSize={"sm"} color="gray.500">
                  Kids
                </Text>
              </Stack>

              <Stack onClick={() => navigate("/product")} cursor="pointer">
                <Text fontSize={"sm"} color="gray.500">
                  Swim
                </Text>
              </Stack>

              <Stack onClick={() => navigate("/product")} cursor="pointer">
                <Text fontSize={"sm"} color="gray.500">
                  Cashmare
                </Text>
              </Stack>

              <Stack onClick={() => navigate("/product")} cursor="pointer">
                <Text fontSize={"sm"} color="gray.500">
                  Home
                </Text>
              </Stack>

              <Stack onClick={() => navigate("/product")} cursor="pointer">
                <Text fontSize={"sm"} color="gray.500">
                  Stories
                </Text>
              </Stack>

              <Stack onClick={() => navigate("/product")} cursor="pointer">
                <Text fontSize={"sm"} color="gray.500">
                  Sales
                </Text>
              </Stack>
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
            <Stack onClick={() => navigate("/cart")} cursor="pointer">
              <SlHandbag size={20} />
            </Stack>
          </HStack>
        </HStack>
      )}

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
            <Text  fontSize={'xs'} color='gray.600'>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </Text>
          </ModalBody>
          <ModalFooter mt={10}>
            <Text align={"center"} fontSize={'sm'} color='gray.600'>
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
            <Text fontSize={'xs'} color='gray.600'>
              By clicking "Create an Account", you agree to our Terms of Use and
              Privacy Policy, including the Use of Cookies and the transfer of
              your personal information to the United States, a jurisdiction
              that may not provide an equivalent level of data protection to the
              laws in your home country.
            </Text>
          </ModalBody>
          <ModalFooter >
            <Text align={"center"} fontSize={'sm'} color='gray.600'>
              Already Have an Account?{" "}
            </Text>
            <Text
              as={"span"}
              ml={1}
              fontSize={15}
              cursor={"pointer"}
              onClick={loginModal}
              fontWeight='bold'
              color='facebook.600'
            >
              {" "}
              Sign In
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Drawer
        isOpen={isNavOpen}
        placement={"left"}
        onClose={onNavClose}
        finalFocusRef={btnRef}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent mt={65}>
          <DrawerBody>
            <Stack py={3} px={2}>
              <Box bg={"gray.400"} align={"center"}>
                <Button
                  colorScheme={"green"}
                  m={2}
                  borderRadius={0}
                  w={"90%"}
                  onClick={onMobileLoginOpen}
                >
                  SIGN IN
                </Button>
              </Box>
              <Stack bg={"white"} spacing={5}>
                <HStack justify={"space-between"}>
                  <Text>New</Text>
                  <Text>
                    <AiOutlineRight />
                  </Text>
                </HStack>
                <HStack justify={"space-between"}>
                  <Text>Women</Text>
                  <Text>
                    <AiOutlineRight />
                  </Text>
                </HStack>
                <HStack justify={"space-between"}>
                  <Text>Men</Text>
                  <Text>
                    <AiOutlineRight />
                  </Text>
                </HStack>
                <HStack justify={"space-between"}>
                  <Text>Girls</Text>
                  <Text>
                    <AiOutlineRight />
                  </Text>
                </HStack>
                <HStack justify={"space-between"}>
                  <Text>Boys</Text>
                  <Text>
                    <AiOutlineRight />
                  </Text>
                </HStack>
                <HStack justify={"space-between"}>
                  <Text>Accessories</Text>
                  <Text>
                    <AiOutlineRight />
                  </Text>
                </HStack>
                <HStack justify={"space-between"}>
                  <Text>Cashmere</Text>
                  <Text>
                    <AiOutlineRight />
                  </Text>
                </HStack>
                <HStack justify={"space-between"}>
                  <Text>Home</Text>
                  <Text>
                    <AiOutlineRight />
                  </Text>
                </HStack>
                <HStack justify={"space-between"}>
                  <Text>Stories</Text>
                  <Text>
                    <AiOutlineRight />
                  </Text>
                </HStack>
                <HStack justify={"space-between"}>
                  <Text>Sale</Text>
                  <Text>
                    <AiOutlineRight />
                  </Text>
                </HStack>
              </Stack>
              <Stack py={5} bg={"white"}>
                <Text>Have a question? We can help.</Text>
                <Text as={"u"}>Details</Text>
              </Stack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Drawer
        isOpen={isMobileLoginOpen}
        size={"full"}
        placement={"bottom"}
        onClose={onMobileLoginClose}
        finalFocusRef={btnRef}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerHeader>SIGN IN</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
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
            <Text fontSize={'sm'} color='gray.600'>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </Text>
            <Divider mt={8} />

            <HStack spacing={1} my={5} justifyContent={"center"}>
              <Text fontSize={'sm'} color='gray.600' as={"span"} >
                Don't Have an Account?{" "}
              </Text>
              <Text
                as={"span"}
                fontSize={14}
                color={"facebook.600"}
                cursor={"pointer"}
                fontWeight="semibold"
                onClick={mobileSignupDrawer}
              >
                {" "}
                Sign Up Now
              </Text>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Drawer
        isOpen={isMobileSignupOpen}
        size={"full"}
        placement={"bottom"}
        onClose={onMobileSignupClose}
        finalFocusRef={btnRef}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerHeader>SIGN IN</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
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
            <Divider mt={8} />
            <HStack my={5} justifyContent={"center"}>
              <Text fontSize={'sm'} color='gray.600'>Already Have an Account? </Text>
              <Text
                as={"span"}
                ml={1}
                fontSize={15}
                cursor={"pointer"}
                onClick={mobileLoginDrawer}
                color={"facebook.600"}
              >
                {" "}
                Sign In
              </Text>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default AppNavbar;
