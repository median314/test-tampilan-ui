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
  useToast,
} from "@chakra-ui/react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { db } from "../Config/firebase";
import AuthContext from "../Hooks/authContext";
import { useAuthState, useCartState } from "../Hooks/context";
import { useAuthentication } from "../Hooks/CustomHooks/useAuthentication";

const CheckoutPage = () => {
  const [country, setCountry] = useState();
  const [dataObject, setDataObject] = useState([]);
  const { user } = useAuthState();
  const { cart } = useCartState();
  // const { currentUser } = useContext(AuthContext);

  const toast = useToast();
  const navigate = useNavigate();

  const getCheckoutData = localStorage.getItem("checkout");
  const checkoutData = JSON.parse(getCheckoutData);

  const handleData = (key, value) => {
    let newObject = dataObject;
    newObject[key] = value;
  };

  const handlePayment = async () => {
    let addData = {};

    addData.name = dataObject.name;
    addData.country = country;
    addData.address = dataObject.address;
    addData.city = dataObject.city;
    addData.postalCode = dataObject.postcode;
    addData.province = dataObject.province;
    addData.phone = dataObject.phone;
    addData.email = dataObject.email;

    console.log(addData);

    try {
      await setDoc(doc(db, "checkout", user.uid), {
        addData,
        product: checkoutData,
        uid_user: user.uid,
        createdAt: new Date(),
      });

      toast({
        title: "Klamby.id",
        description: "Redirecting to Payment Page",
        status: "success",
        duration: 2500,
      });
    } catch (error) {
      console.log(error, "ini error");
      toast({
        title: "Klamby.id",
        description: `Error: ${error}`,
        status: "error",
        duration: 2500,
      });
    }
  };

  const changeStatus = (e) => {
    setCountry(e.target.value);
  };

  console.log(country, "ini country");

  if (getCheckoutData === null) {
    window.location.href = "/";
  }

  const cartProduct = checkoutData?.cart;

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
        <Input
          placeholder="Full Name"
          id="name"
          onChange={(e) => handleData(e.target.id, e.target.value)}
        />
        <Select placeholder="Country" value={country} onChange={changeStatus}>
          <option id="Indonesia" value="Indonesia">
            Indonesia
          </option>
          <option id="Malaysia" value="Malaysia">
            Malaysia
          </option>
          <option id="Singapore" value="Singapore">
            Singapore
          </option>
        </Select>
        <Input
          placeholder="Address"
          id="address"
          onChange={(e) => handleData(e.target.id, e.target.value)}
        />
        <HStack>
          <Input
            placeholder="City"
            id="city"
            onChange={(e) => handleData(e.target.id, e.target.value)}
          />
          <Input
            placeholder="PostalCode"
            id="postcode"
            type={"number"}
            onChange={(e) => handleData(e.target.id, e.target.value)}
          />
        </HStack>
        <Input
          placeholder="State/Province/Region"
          id="province"
          onChange={(e) => handleData(e.target.id, e.target.value)}
        />
        <Text>Phone Number</Text>
        <Input
          placeholder="Phone"
          id="phone"
          onChange={(e) => handleData(e.target.id, e.target.value)}
        />
        <Text>Email Address</Text>
        <Input
          placeholder="Email"
          id="email"
          onChange={(e) => handleData(e.target.id, e.target.value)}
        />
        <Flex gap={4}>
          <Checkbox checked={true} size={"lg"} />
          <Text fontSize={12}>
            I have read and consent to ESW processing my information in
            accordance with the Privacy Statement and Cookie Policy.
          </Text>
        </Flex>
        <Button
          colorScheme={"facebook"}
          borderRadius={0}
          onClick={handlePayment}
        >
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
        <Box pt={5} pb={2}>
          {cartProduct?.length > 0 ? (
            cartProduct?.map((x, i) => (
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
                </Stack>
              </Box>
            ))
          ) : (
            <>{navigate("/")}</>
          )}
        </Box>

        <HStack justifyContent={"space-between"} py={3}>
          {checkoutData?.price ? (
            <>
              <Heading size={"md"}>Total Price</Heading>
              <Heading size={"md"}>
                IDR{" "}
                {Intl.NumberFormat("en-ID", {
                  maximumSignificantDigits: 3,
                }).format(checkoutData.price)}
              </Heading>
            </>
          ) : null}
        </HStack>
      </Stack>
    </Flex>
  );
};

export default CheckoutPage;
