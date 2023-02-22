import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import AppNavbar from "./AppNavbar";

const HomePage = () => {
  return (
    <Box>
      {/* <AppNavbar /> */}
      <Box p={7}>
        <Text align={"center"} fontSize={14}>
          Have a question? We can help
        </Text>
      </Box>
      <Box pos={"relative"}>
        <Image
          w={1440}
          src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0214_hp_w_img0_text.jpg"
        />
        <Box pos={"absolute"} right={0} bottom={0} w={"50%"} h={200}>
          <Box align={"center"} color={"white"} pt={"5"}>
            <Text>The Spring 2023</Text>
            <Text fontWeight={"bold"} fontSize={35}>
              Lookbook Is Here
            </Text>
            <Text>
              <a href="#">Shop The Look</a>
            </Text>
            <Box w={20} h={1} bg={"white"} borderRadius={"md"} mt={1} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
