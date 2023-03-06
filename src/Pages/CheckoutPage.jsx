import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { db } from "../Config/firebase";
import AuthContext from "../Hooks/authContext";
import { useAuthState } from "../Hooks/context";
import { useAuthentication } from "../Hooks/CustomHooks/useAuthentication";

const CheckoutPage = () => {
  const [order, setOrder] = useState();
  const { user } = useAuthState();
  // const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const getOrdersData = async () => {
    try {
      const docRef = doc(db, "orders", user?.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setOrder(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error, "ini error");
    }
  };

  useEffect(() => {
    getOrdersData();

    return () => {};
  }, []);

  return (
    <Flex
      mt={75}
      bg={"#f0f1f2"}
      gap={4}
      p={[3, null, 10]}
      justifyContent={"center"}
      flexDir={["column", null, "row"]}
    >
      <Stack
        bg={"white"}
        w={["100%", null, "40%"]}
        px={[5, null, 20]}
        py={5}
        gap={2}
      >
        <Text fontWeight={"semibold"}>Delivery Address</Text>
        <Input placeholder="Full Name" />
        <Select placeholder="Country">
          <option>Indonesia</option>
          <option>Malaysia</option>
          <option>Singapore</option>
        </Select>
        <Input placeholder="Address Line 1" />
        <Input placeholder="Address Line 2" />
        <HStack>
          <Input placeholder="City" />
          <Input placeholder="Postal Code" />
        </HStack>
        <Input placeholder="State/Province/Region" />
        <Text>Phone Number</Text>
        <Input placeholder="Phone" />
        <Text>Email Address</Text>
        <Input placeholder="Phone" />
        <Flex gap={4}>
          <Checkbox checked={true} size={"lg"} />
          <Text fontSize={12}>
            I have read and consent to ESW processing my information in
            accordance with the Privacy Statement and Cookie Policy.
          </Text>
        </Flex>
        <Button colorScheme={"facebook"} borderRadius={0}>
          CONTINUE TO PAYMENT
        </Button>
      </Stack>
      <Stack
        bg={"white"}
        w={["100%", null, "30%"]}
        h={["max-content", null, null]}
        p={3}
      >
        <Button
          border={"1px"}
          borderRadius={0}
          bg={"transparent"}
          onClick={() => navigate("/cart")}
        >
          BACK TO CART
        </Button>
        <Box>
          {order?.data?.length > 0
            ? order?.data?.map((x, i) => (
                <Box key={i}>
                  <Text fontWeight={"semibold"} fontSize={14} mb={2}>
                    {x.title}
                  </Text>
                  <Flex gap={3}>
                    <Image boxSize={130} src={x.image} />
                    <Stack
                      alignContent={"space-between"}
                      fontSize={14}
                      fontWeight={"semibold"}
                    >
                      <Text>Quantity: {x.quantity}</Text>
                      <Text>Size: 34</Text>
                      <Text>Color: White</Text>
                      <Text>
                        Price: IDR{" "}
                        {Intl.NumberFormat("en-ID", {
                          maximumSignificantDigits: 3,
                        }).format(x.price)}
                      </Text>
                    </Stack>
                  </Flex>
                  <Stack>
                    <Divider mt={5} />
                    <HStack
                      justifyContent={"space-between"}
                      fontSize={16}
                      fontWeight={"semibold"}
                      py={4}
                    >
                      <Heading size={"md"}>Total Price</Heading>
                      <Heading size={"md"}>
                        IDR{" "}
                        {Intl.NumberFormat("en-ID", {
                          maximumSignificantDigits: 3,
                        }).format(x.price)}
                      </Heading>
                    </HStack>
                  </Stack>
                </Box>
              ))
            : null}
        </Box>
      </Stack>
    </Flex>
  );
};

export default CheckoutPage;
