import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiMail, FiPhone, FiTwitter } from "react-icons/fi";

const AppFooter = () => {
  const width = window.innerWidth;

  const toast = useToast();

  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log(email, "ini mau subscribe");

    toast({
      position: "top",
      title: "Wearing Klamby",
      description: "You Subscribed",
      status: "success",
      duration: 1000,
    });
  };

  return (
    <Stack minW={"full"}>
      <HStack
        justifyContent={"center"}
        spacing={4}
        borderTop={"1px"}
        p={4}
        borderColor={"gray.700"}
        w={width}
      >
        <HStack>
          <FiTwitter />
          <Text fontSize={[12, null, null]}>
            <a href="#">@jcrew_help</a>
          </Text>
        </HStack>
        <HStack>
          <FiPhone />
          <Text fontSize={[12, null, null]}>
            <a href="#">+62853523764</a>
          </Text>
        </HStack>
        <HStack>
          <FiMail />
          <Text fontSize={[12, null, null]}>
            <a href="#">Email Us</a>
          </Text>
        </HStack>
      </HStack>

      <Flex
        flexDir={["column-reverse", null, "row"]}
        bg={"#f0f1f2"}
        w={[width, null, width]}
        p={[7, null, 20]}
        justifyContent={"space-between"}
        gap={[5, null, 30]}
      >
        <Box w={["100%", null, "full"]}>
          <Flex gap={[8, null, "2%"]} flexDir={["column", null, "row"]}>
            <Flex gap={"10%"} w={["100", null, "40%"]}>
              <Box w={["50%", null, "80%"]}>
                <Heading pb={2} size={"md"}>
                  Help
                </Heading>
                <Text fontSize={"sm"} color="gray.600">
                  Costumer Service
                </Text>
                <Text fontSize={"sm"} color="gray.600">
                  Track Order
                </Text>
                <Text fontSize={"sm"} color="gray.600">
                  Return & Exchange
                </Text>
                <Text fontSize={"sm"} color="gray.600">
                  Shipping
                </Text>
                <Text fontSize={"sm"} color="gray.600">
                  International Orders
                </Text>
                <Text fontSize={"sm"} color="gray.600">
                  Contact Us
                </Text>
              </Box>
              <Box w={["50%", null, "80%"]}>
                <Heading pb={2} size={"md"}>
                  Quick Links
                </Heading>
                <Text fontSize={"sm"} color="gray.600">
                  Find a Store
                </Text>
                <Text fontSize={"sm"} color="gray.600">
                  Size Charts
                </Text>
                <Text fontSize={"sm"} color="gray.600">
                  Refer a Friend
                </Text>
                <Text fontSize={"sm"} color="gray.600">
                  Offers & Promotions
                </Text>
                <Text fontSize={"sm"} color="gray.600">
                  My Favorites
                </Text>
              </Box>
            </Flex>

            <Box w={["100%", null, "33.3%"]}>
              <Heading pb={2} size={"md"}>
                About J.Crew
              </Heading>
              <Text fontSize={"sm"} color="gray.600">
                Our Story
              </Text>
              <Text fontSize={"sm"} color="gray.600">
                Careers
              </Text>
              <Text fontSize={"sm"} color="gray.600">
                Social Responsibility
              </Text>
              <Text fontSize={"sm"} color="gray.600">
                {" "}
                California Transparency Act/Modern Slavery Act
              </Text>
              <Text fontSize={"sm"} color="gray.600">
                {" "}
                Investor Relations
              </Text>
              <Text fontSize={"sm"} color="gray.600">
                Terms of Use
              </Text>
              <Text fontSize={"sm"} color="gray.600">
                Privacy Policy
              </Text>
              <Text fontSize={"sm"} color="gray.600">
                California Do Not Sell My Personal Information
              </Text>
              <Text fontSize={"sm"} color="gray.600">
                Diversity, Equity and Inclusion at J.Crew Group
              </Text>
            </Box>
          </Flex>
          <Stack py={4} pt={"10%"}>
            <HStack>
              <FaInstagram size={30} />
              <FaFacebook size={30} />
              <FaTwitter size={30} />
              <FaLinkedin size={30} />
              <FaYoutube size={30} />
            </HStack>

            <Box>
              <Text my={4} fontSize={"sm"} fontWeight="bold" color="gray.700">
                <a>Indonesia</a>
              </Text>
              <HStack>
                <Image
                  w={50}
                  src={
                    "https://www.jcrew.com/next-static/images/sidecar-modules/footer/madewell.svg"
                  }
                />
                <Image
                  w={50}
                  src={
                    "https://www.jcrew.com/next-static/images/sidecar-modules/navigation/jcrew-factory-logo-black.svg"
                  }
                />
              </HStack>
            </Box>
          </Stack>
        </Box>

        <Box>
          <Stack>
            <Text fontWeight={"bold"}>Like Being First?</Text>
            <Text fontSize={"sm"} color="gray.600">
              Get can't-miss style news, before everybody else.
            </Text>
            <HStack spacing={"none"}>
              <Input
                borderColor={"black"}
                borderRadius={"none"}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                bg={"black"}
                color={"white"}
                borderRadius={"none"}
                onClick={() => handleSubscribe()}
              >
                SIGN UP
              </Button>
            </HStack>
          </Stack>
        </Box>
      </Flex>
    </Stack>
  );
};

export default AppFooter;
