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
  Flex,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  useToast,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Heading,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { SlHandbag } from "react-icons/sl";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineRight,
} from "react-icons/ai";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaSearch, FaUser } from "react-icons/fa";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../Config/firebase";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import AuthContext from "../Hooks/authContext";
import store from "store";
import {
  LoginUser,
  logout,
  useAuthDispatch,
  useAuthState,
  useCartState,
} from "../Hooks";

const AppNavbar = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [show, setShow] = useState(false);
  const handleShowPassword = () => setShow(!show);

  const dispatch = useAuthDispatch();
  const { loading, user, errorMessage } = useAuthState();
  const { cart } = useCartState();

  const navigate = useNavigate();
  const btnRef = useRef();
  const toast = useToast();

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

  const handleCheckbox = () => {
    setRememberMe(!rememberMe);
    console.log(rememberMe, "ini checkbox");
  };

  const handleSignup = async () => {
    const displayName = name;
    if (email === "" && password === "" && name === "") {
      toast({
        title: "Something Wrong",
        description: "check your email, password, data",
        status: "error",
        duration: 10000,
        isClosable: true,
        position: "top",
      });
    }

    if (email !== "" && password !== "" && name !== "") {
      try {
        console.log(email, name, password, "ini data");
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            await updateProfile(auth.currentUser, {
              displayName,
            });

            const user = auth.currentUser;
            console.log(auth.currentUser);

            await setDoc(doc(db, "users", user.uid), {
              name: displayName,
              email: user.email,
              uid_user: user.uid,
              createdAt: new Date(),
            });

            toast({
              title: "Signup Success",
              description: `Please Login to continue shopping`,
              status: "success",
              duration: 10000,
              isClosable: true,
              position: "top",
            });

            window.location.reload();
          })

          .catch((error) => {
            console.log(error, "ini error");
            toast({
              title: "Something Wrong",
              description: `It looks like you don't have account in your browser, please signup and reload this page / ${error.message}`,
              status: "error",
              duration: 10000,
              isClosable: true,
              position: "top",
            });
          });
      } catch (error) {
        console.log(errorMessage);

        toast({
          title: "Something Wrong",
          description: error,
          status: "error",
          duration: 10000,
          isClosable: true,
          position: "top",
        });
      }
    } else {
      console.log(errorMessage);
      toast({
        title: "Something Wrong",
        description: "check your data",
        status: "error",
        duration: 10000,
        isClosable: true,
        position: "top",
      });
    }
  };

  //loginFunction
  const handleLogin = async (e) => {
    let payload = {
      email,
      password,
    };

    try {
      let response = await LoginUser(dispatch, payload);
      if (response === undefined) {
        toast({
          position: "top",
          title: "Wearing Klamby",
          description:
            "Gagal Login, pastikan Email/Password yang dimasukkan benar ",
          status: "error",
          duration: 2000,
        });
      } else if (response.user.uid !== undefined) {
        window.location.href = "/";

        toast({
          position: "top",
          title: "Wearing Klamby",
          description: "Login Success",
          status: "success",
          duration: 2000,
        });
      }
    } catch (error) {
      toast({
        position: "top",
        title: "Wearing Klamby",
        description:
          "Gagal Login, pastikan Email/Password yang dimasukkan benar ",
        status: "error",
        duration: 2000,
      });
    }
  };

  //signout function
  const handleSignout = () => {
    try {
      logout(dispatch);

      toast({
        position: "top",
        title: "Wearing Klamby",
        description: "Logout Success",
        status: "success",
        duration: 1000,
      });

      window.location.href = "/";
    } catch (error) {
      console.log(error, "ini error");
    }
  };

  // useEffect(() => {
  //   return cart.cart;
  // }, []);

  return (
    <Box
      px={10}
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
              <Box onClick={onNavOpen} px={2}>
                <HamburgerIcon />
              </Box>
              <HStack onClick={setShowSearch}>
                <FiSearch size={20} color="gray.300" />
              </HStack>
            </HStack>
            <Stack onClick={() => navigate("/")} cursor="pointer">
              <Image
                w={100}
                src="https://cdn.shopify.com/s/files/1/0608/6724/8340/files/Logo_klamby_baru_banget_140x@2x.png?v=1643345083"
              />
            </Stack>
            <HStack
              pos={"relative"}
              onClick={() => navigate("/cart")}
              cursor="pointer"
              spacing={-0.5}
            >
              <SlHandbag size={20} />
              {cart?.cart?.length > 0 ? (
                <Box
                  pos={"absolute"}
                  bg={"blue.500"}
                  color={"white"}
                  borderRadius={"full"}
                  w={5}
                  h={5}
                  left={"100%"}
                  bottom={"35%"}
                  fontSize={[12, null, 10]}
                  align={"center"}
                >
                  <Text fontWeight={"semibold"}>{cart?.cart?.length}</Text>
                </Box>
              ) : null}
            </HStack>
          </HStack>
        </>
      ) : (
        <HStack justifyContent={"space-between"}>
          <HStack spacing={10}>
            <Stack onClick={() => navigate("/")} cursor="pointer">
              <Image
                w={100}
                src="https://cdn.shopify.com/s/files/1/0608/6724/8340/files/Logo_klamby_baru_banget_140x@2x.png?v=1643345083"
              />
            </Stack>

            <HStack spacing={5} alignItems="center" justifyContent={"center"}>
              <Stack onClick={() => navigate("/product")} cursor="pointer">
                <Text fontSize={"sm"} color="gray.500">
                  Shop All
                </Text>
              </Stack>

              <Stack onClick={() => navigate("/product")} cursor="pointer">
                <Text fontSize={"sm"} color="gray.500">
                  Daily Blazer Series
                </Text>
              </Stack>

              <Stack onClick={() => navigate("/product")} cursor="pointer">
                <Text fontSize={"sm"} color="gray.500">
                  Kaela Collection
                </Text>
              </Stack>

              <Stack onClick={() => navigate("/product")} cursor="pointer">
                <Text fontSize={"sm"} color="gray.500">
                  Minor Sale
                </Text>
              </Stack>

              <Stack>
                <Popover isLazy trigger="hover">
                  <PopoverTrigger>
                    <Text
                      fontSize={"sm"}
                      color="gray.500"
                      onClick={() => navigate("/product")}
                      cursor="pointer"
                    >
                      Collection
                    </Text>
                  </PopoverTrigger>
                  <PopoverContent w={width} p={10}>
                    {/* <PopoverHeader fontWeight="semibold">
                      Popover placement
                    </PopoverHeader> */}
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Flex justify={"center"} gap={20}>
                        <Heading
                          size={"md"}
                          onClick={() => navigate("/product")}
                          cursor="pointer"
                        >
                          Scarf
                        </Heading>
                        <Stack>
                          <Heading
                            size={"md"}
                            onClick={() => navigate("/product")}
                            cursor="pointer"
                          >
                            Tops
                          </Heading>
                          <Text
                            onClick={() => navigate("/product")}
                            cursor="pointer"
                            color={"blackAlpha.700"}
                          >
                            Blouse
                          </Text>
                          <Text
                            onClick={() => navigate("/product")}
                            cursor="pointer"
                            color={"blackAlpha.700"}
                          >
                            Tunic
                          </Text>
                          <Text
                            onClick={() => navigate("/product")}
                            cursor="pointer"
                            color={"blackAlpha.700"}
                          >
                            T-Shirt
                          </Text>
                          <Text
                            onClick={() => navigate("/product")}
                            cursor="pointer"
                            color={"blackAlpha.700"}
                          >
                            Outer
                          </Text>
                          <Text
                            onClick={() => navigate("/product")}
                            cursor="pointer"
                            color={"blackAlpha.700"}
                          >
                            Inner
                          </Text>
                        </Stack>
                        <Stack>
                          <Heading
                            size={"md"}
                            onClick={() => navigate("/product")}
                            cursor="pointer"
                          >
                            Bottoms
                          </Heading>
                          <Text
                            onClick={() => navigate("/product")}
                            cursor="pointer"
                            color={"blackAlpha.700"}
                          >
                            Pants
                          </Text>
                          <Text
                            onClick={() => navigate("/product")}
                            cursor="pointer"
                            color={"blackAlpha.700"}
                          >
                            Skirt
                          </Text>
                        </Stack>
                        <Stack>
                          <Heading
                            size={"md"}
                            onClick={() => navigate("/product")}
                            cursor="pointer"
                          >
                            Others
                          </Heading>
                          <Text
                            onClick={() => navigate("/product")}
                            cursor="pointer"
                            color={"blackAlpha.700"}
                          >
                            Brooch
                          </Text>
                          <Text
                            onClick={() => navigate("/product")}
                            cursor="pointer"
                            color={"blackAlpha.700"}
                          >
                            Dress
                          </Text>
                          <Text
                            onClick={() => navigate("/product")}
                            cursor="pointer"
                            color={"blackAlpha.700"}
                          >
                            Pajamas
                          </Text>
                          <Text
                            onClick={() => navigate("/product")}
                            cursor="pointer"
                            color={"blackAlpha.700"}
                          >
                            Prayer Set
                          </Text>
                        </Stack>
                        <Stack justifyContent={"center"}>
                          <Image
                            boxSize={200}
                            src="https://www.jcrew.com/s7-img-facade/BJ706_YD3030?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=280&hei=280"
                          />
                          <Heading size={"md"} align={"center"}>
                            Tops
                          </Heading>
                        </Stack>
                        <Stack justifyContent={"center"}>
                          <Image
                            boxSize={200}
                            src="https://www.jcrew.com/s7-img-facade/BP499_PR5699_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
                          />
                          <Heading size={"md"} align={"center"}>
                            Bottoms
                          </Heading>
                        </Stack>
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Stack>

              <Stack onClick={() => navigate("/product")} cursor="pointer">
                <Text fontSize={"sm"} color="gray.500">
                  Journal
                </Text>
              </Stack>

              <Stack onClick={() => navigate("/product")} cursor="pointer">
                <Text fontSize={"sm"} color="gray.500">
                  Store Location
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

          <HStack spacing={7}>
            <Box>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<FiSearch size={20} color="gray.300" />}
                />
                <Input type="text" placeholder="Search" borderRadius={0} />
              </InputGroup>
            </Box>

            {Object.keys(user).length > 0 ? (
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                spacing={0}
                pt={2}
              >
                <FaUser size={20} />
                <Text fontSize={10}>Logged in as {user.email}</Text>
                <Text
                  fontSize={10}
                  onClick={handleSignout}
                  cursor={"pointer"}
                  color={"blue.400"}
                >
                  sign out
                </Text>
              </Stack>
            ) : (
              <Text
                onClick={onLoginOpen}
                cursor={"pointer"}
                _hover={{ borderBottom: "2px" }}
              >
                Sign In
              </Text>
            )}
            <Stack onClick={() => navigate("/cart")} cursor="pointer">
              <SlHandbag size={20} />
              {cart?.cart?.length > 0 ? (
                <Box
                  pos={"absolute"}
                  bg={"blue.500"}
                  color={"white"}
                  borderRadius={"full"}
                  w={5}
                  h={5}
                  right={"1.5%"}
                  bottom={"55%"}
                  fontSize={[12, null, 10]}
                  align={"center"}
                >
                  <Text fontWeight={"semibold"}>{cart?.cart?.length}</Text>
                </Box>
              ) : null}
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
            <Input
              placeholder="Email Address"
              borderRadius={0}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type={"password"}
              placeholder="Password"
              borderRadius={0}
              my={3}
              onChange={(e) => setPassword(e.target.value)}
            />
            <HStack justifyContent={"space-between"}>
              <Checkbox
                size={"sm"}
                checked={rememberMe}
                onChange={(e) => handleCheckbox(e.target.value)}
              >
                Remember me
              </Checkbox>
              <Text
                color={"telegram.900"}
                fontWeight={"semibold"}
                fontSize={13}
              >
                Forgot Password?
              </Text>
            </HStack>
            <Button
              w={"full"}
              colorScheme={"facebook"}
              borderRadius={0}
              my={7}
              onClick={handleLogin}
            >
              SIGN IN
            </Button>
            <Text fontSize={"xs"} color="gray.600">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </Text>
          </ModalBody>
          <ModalFooter mt={10}>
            <Text align={"center"} fontSize={"sm"} color="gray.600">
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
            <Input
              mb={3}
              placeholder="Name"
              borderRadius={0}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Email Address"
              type={"email"}
              borderRadius={0}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputGroup size="md" my={3}>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                borderRadius={0}
                onChange={(e) => setPassword(e.target.value)}
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
              onClick={() => handleSignup()}
            >
              CREATE AN ACCOUNT
            </Button>
            <Text fontSize={"xs"} color="gray.600">
              By clicking "Create an Account", you agree to our Terms of Use and
              Privacy Policy, including the Use of Cookies and the transfer of
              your personal information to the United States, a jurisdiction
              that may not provide an equivalent level of data protection to the
              laws in your home country.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Text align={"center"} fontSize={"sm"} color="gray.600">
              Already Have an Account?{" "}
            </Text>
            <Text
              as={"span"}
              ml={1}
              fontSize={15}
              cursor={"pointer"}
              onClick={loginModal}
              fontWeight="bold"
              color="facebook.600"
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
        <DrawerContent mt={65}>
          <DrawerBody>
            <Stack py={3} px={2}>
              <Box bg={"gray.100"} align={"center"}>
                {user ? (
                  <>
                    <Stack spacing={0} fontWeight={"semibold"} p={2}>
                      <Text>Hi! {user.displayName} Happy Shopping!</Text>
                      <Text
                        fontSize={14}
                        onClick={handleSignout}
                        cursor={"pointer"}
                        color={"blue.400"}
                        py={1}
                      >
                        Sign Out
                      </Text>
                    </Stack>
                  </>
                ) : (
                  <>
                    <Button
                      colorScheme={"green"}
                      m={2}
                      borderRadius={0}
                      w={"90%"}
                      onClick={onMobileLoginOpen}
                    >
                      SIGN IN
                    </Button>
                  </>
                )}
              </Box>
              <Divider my={5} />
              <Stack bg={"white"} spacing={5}>
                <HStack
                  justify={"space-between"}
                  onClick={() => navigate("/product")}
                >
                  <Text>Shop All</Text>
                  <Text>
                    <AiOutlineRight />
                  </Text>
                </HStack>
                <HStack
                  justify={"space-between"}
                  onClick={() => navigate("/product")}
                >
                  <Text>Daily Blazer Series</Text>
                  <Text>
                    <AiOutlineRight />
                  </Text>
                </HStack>
                <HStack
                  justify={"space-between"}
                  onClick={() => navigate("/product")}
                >
                  <Text>Kaela Collection</Text>
                  <Text>
                    <AiOutlineRight />
                  </Text>
                </HStack>
                <HStack
                  justify={"space-between"}
                  onClick={() => navigate("/product")}
                >
                  <Text>Minor Sale</Text>
                  <Text>
                    <AiOutlineRight />
                  </Text>
                </HStack>
                <HStack
                  justify={"space-between"}
                  onClick={() => navigate("/product")}
                >
                  <Text>Collection</Text>
                  <Text>
                    <AiOutlineRight />
                  </Text>
                </HStack>
                <HStack
                  justify={"space-between"}
                  onClick={() => navigate("/product")}
                >
                  <Text>Journal</Text>
                  <Text>
                    <AiOutlineRight />
                  </Text>
                </HStack>
                <HStack
                  justify={"space-between"}
                  onClick={() => navigate("/product")}
                >
                  <Text>Store Location</Text>
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
            <Input
              placeholder="Email Address"
              type={"email"}
              borderRadius={0}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type={"password"}
              placeholder="Password"
              borderRadius={0}
              my={3}
              onChange={(e) => setPassword(e.target.value)}
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
            <Button
              w={"full"}
              colorScheme={"facebook"}
              borderRadius={0}
              my={7}
              onClick={(e) => handleLogin(e.target.value)}
            >
              SIGN IN
            </Button>
            <Text fontSize={"sm"} color="gray.600">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </Text>
            <Divider mt={8} />

            <HStack spacing={1} my={5} justifyContent={"center"}>
              <Text fontSize={"sm"} color="gray.600" as={"span"}>
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
        <DrawerContent>
          <DrawerHeader>SIGN UP</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <Input
              mb={3}
              placeholder="Name"
              borderRadius={0}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Email Address"
              type={"email"}
              borderRadius={0}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputGroup size="md" my={3}>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                borderRadius={0}
                onChange={(e) => setPassword(e.target.value)}
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
              onClick={(e) => handleSignup(e.target.value)}
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
              <Text fontSize={"sm"} color="gray.600">
                Already Have an Account?{" "}
              </Text>
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
