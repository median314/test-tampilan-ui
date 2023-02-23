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
} from "@chakra-ui/react";
import React from "react";
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

  return (
    <Stack>
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
        w={width}
        p={[7, null, 20]}
        justifyContent={"space-between"}
        gap={[5, null, 30]}
      >
        <Box>
          <Flex gap={[3, null, "3%"]} flexDir={["column", null, "row"]}>
            <Flex gap={"6%"}>
              <Box w={["50%", null, "50%"]}>
                <Heading pb={2} size={"md"}>
                  Help
                </Heading>
                <Text>Costumer Service</Text>
                <Text>Track Order</Text>
                <Text>Return & Exchange</Text>
                <Text>Shipping</Text>
                <Text>International Orders</Text>
                <Text>Contact Us</Text>
              </Box>
              <Box w={["50%", null, "50%"]}>
                <Heading pb={2} size={"md"}>
                  Quick Links
                </Heading>
                <Text>Find a Store</Text>
                <Text>Size Charts</Text>
                <Text>Refer a Friend</Text>
                <Text>Offers & Promotions</Text>
                <Text>My Favorites</Text>
              </Box>
            </Flex>

            <Box w={["100%", null, "33.3%"]}>
              <Heading pb={2} size={"md"}>
                About J.Crew
              </Heading>
              <Text>Our Story</Text>
              <Text>Careers</Text>
              <Text>Social Responsibility</Text>
              <Text>California Transparency Act/Modern Slavery Act</Text>
              <Text>Investor Relations</Text>
              <Text>Terms of Use</Text>
              <Text>Privacy Policy</Text>
              <Text>California Do Not Sell My Personal Information</Text>
              <Text>Diversity, Equity and Inclusion at J.Crew Group</Text>
            </Box>
          </Flex>
          <Stack py={4}>
            <HStack>
              <FaInstagram size={30} />
              <FaFacebook size={30} />
              <FaTwitter size={30} />
              <FaLinkedin size={30} />
              <FaYoutube size={30} />
            </HStack>

            <Box>
              <Text my={4}>
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
            <Text>Get can't-miss style news, before everybody else.</Text>
            <HStack spacing={"none"}>
              <Input
                borderColor={"black"}
                borderRadius={"none"}
                placeholder="Enter your email"
              />
              <Button bg={"black"} color={"white"} borderRadius={"none"}>
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
