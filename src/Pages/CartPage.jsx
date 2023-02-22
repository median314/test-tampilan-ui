import { Box, Divider, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const CartPage = () => {
  return (
    <Box mt={75}>
      <Box p={3}>
        <Text align={"center"} fontSize={14}>
          Have a question? We can help
        </Text>
      </Box>
      <Stack bg={"#f0f1f2"} spacing={20} py={10} px={60} borderTop={"1px"}>
        <Box bg={"white"} w={700} boxShadow={"md"}>
          <Heading size={"sm"} p={5}>
            SHOPPING BAG {"(0)"}
          </Heading>
          <Divider mb={5} />
          <Text align={"center"} p={10}>
            Your Shopping Bag is Empty
          </Text>
        </Box>
        <Box bg={"white"} w={700} boxShadow={"md"}>
          <Heading size={"sm"} p={5}>
            SAVED FOR LATER {"(0)"}
          </Heading>
          <Divider mb={5} />
          <Text align={"center"} p={10}>
            Your Shopping Bag is Empty
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default CartPage;
