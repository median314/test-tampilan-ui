import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Spacer,
  Stack,
  Table,
  TableContainer,
  Td,
  Text,
  Th,
  Thead,
  useToast,
} from "@chakra-ui/react";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../Config/firebase";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../Hooks/CustomHooks/useAuthentication";
import { useAuthState } from "../Hooks/context";

const CartPage = () => {
  const [cart, setCart] = useState();
  const [saved, setSaved] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [isMobile, setIsMobile] = useState();

  // const cart = useCart();
  const currentUser = useAuthentication();
  const { user } = useAuthState();

  const toast = useToast();
  const navigate = useNavigate();

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const width = window.innerWidth;

  useState(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  useEffect(() => {
    if (user == null || user == undefined) {
      navigate("/");

      toast({
        position: "top",
        status: "Wearing Klamby",
        description: "Please Login or Create Account First",
        status: "error",
        duration: 2000,
      });
    }
  }, []);

  const getCart = async () => {
    try {
      onSnapshot(doc(db, "cart", user?.uid), (doc) => {
        setCart(doc.data());
      });
    } catch (error) {
      console.log(error, "ini error");
    }

    return cart;
  };

  const getSavedProduct = async () => {
    try {
      onSnapshot(doc(db, "wishlist", user?.uid), (doc) => {
        setSaved(doc.data());
      });
    } catch (error) {
      console.log(error, "ini error");
    }

    return cart;
  };

  const countTotal = () => {
    // console.log(_.isEmpty(cartList));
    if (_.isEmpty(cart)) {
      setTotalPrice(0);
    } else {
      let total = 0;
      cart?.data?.map((x) => (total += x?.price * x?.quantity));
      setTotalPrice(total);
    }
  };

  const handleFirebase = async (data) => {
    try {
      await setDoc(doc(db, "cart", user.uid), data);
    } catch (error) {
      console.log(error.message, "errorin setdoc cart uid");
    }
  };

  const handleAdd = async (i) => {
    // const data = cartList;
    const newQty = cart.data[i].quantity + 1;
    cart.data[i].quantity = newQty;
    await handleFirebase(cart);
  };

  const handleMinus = async (i) => {
    // const data = cartList;
    if (cart.data[i].quantity - 1 > 0) {
      const newQty = cart.data[i].quantity - 1;
      cart.data[i].quantity = newQty;
    }
    await handleFirebase(cart);
  };

  const handleRemove = async (data) => {
    let cartData = {};
    cartData = { ...data };

    console.log(data, "ini isinya");
    try {
      const ref = doc(db, "cart", user.uid);
      await setDoc(
        ref,
        {
          uid: user.uid,
          data: arrayRemove(cartData),
          createdAt: new Date(),
        },
        { merge: true }
      );
      cartData = {};
      toast({
        position: "top",
        title: "Wearing Klamby",
        description: "Berhasil menghapus product.",
        status: "success",
      });
    } catch (error) {
      toast({
        position: "top",
        title: "Wearing Klamby",
        description: error.message,
        status: "error",
      });
    }
  };

  const handleSaved = async (data) => {
    let savedData = {};
    savedData = { ...data };

    console.log(savedData, "ini wishlist");
    try {
      const ref = doc(db, "wishlist", currentUser.uid);
      await setDoc(
        ref,
        {
          uid: currentUser.uid,
          data: arrayUnion(savedData),
          createdAt: new Date(),
        },
        { merge: true }
      );
      savedData = {};
      toast({
        position: "top",
        title: "Wearing Klamby",
        description: "Berhasil mennyimpan product.",
        status: "success",
      });
      handleRemove(data);
    } catch (error) {
      toast({
        position: "top",
        title: "Wearing Klamby",
        description: error.message,
        status: "error",
      });
    }
  };

  const handleRemoveWishlist = async (data) => {
    let savedData = {};
    savedData = { ...data };

    console.log(savedData, "ini wishlist");
    try {
      const ref = doc(db, "wishlist", currentUser.uid);
      await setDoc(
        ref,
        {
          uid: currentUser.uid,
          data: arrayRemove(savedData),
          createdAt: new Date(),
        },
        { merge: true }
      );
      savedData = {};
      toast({
        position: "top",
        title: "Wearing Klamby",
        description: "Berhasil mennyimpan product.",
        status: "success",
      });
    } catch (error) {
      toast({
        position: "top",
        title: "Wearing Klamby",
        description: error.message,
        status: "error",
      });
    }
  };

  const handleCart = async (item) => {
    let savedProduct = {};
    savedProduct = { ...item };
    console.log(savedProduct, "ini save product");
    try {
      const ref = doc(db, "cart", currentUser.uid);
      await setDoc(
        ref,
        {
          uid: currentUser.uid,
          data: arrayUnion(savedProduct),
          createdAt: new Date(),
        },
        { merge: true }
      );

      savedProduct = {};

      toast({
        position: "top",
        title: "Wearing Klamby",
        description: "Product moved to your cart",
        status: "success",
        duration: 10000,
      });

      handleRemoveWishlist(item);
    } catch (error) {
      console.log(error, "ini error");

      toast({
        position: "top",
        title: "Wearing Klamby",
        description: `Failed to add to cart ${error.message}`,
        status: "error",
        duration: 1000,
      });
    }
  };

  const handleCheckout = async () => {
    const checkout = {
      ...cart,
      price: totalPrice,
      user_uid: auth.currentUser.uid,
    };
    console.log(checkout, "ini yang mau dicheckout");

    try {
      const order = await setDoc(doc(db, "orders", currentUser.uid), checkout);
      console.log(`doc added with id`);

      toast({
        position: "top",
        title: "Wearing Klamby",
        description: "Order Created",
        status: "success",
        duration: 1000,
      });

      navigate("/checkout");
    } catch (error) {
      console.log(error, "ini error");
    }
  };

  // console.log(user, "ini user");

  useEffect(() => {
    countTotal();
    getSavedProduct();

    return () => {};
  }, [cart]);

  useEffect(() => {
    getCart();
    return () => {};
  }, [user]);

  // const width = window.outerWidth;
  return (
    <Stack mt={75} w={width} justifyContent={"center"}>
      <Box p={3}>
        <Text align={"center"} fontSize={14}>
          Have a question? We can help
        </Text>
      </Box>

      <Flex
        gap={2}
        flexDir={["column", null, "row"]}
        bg={"#f0f1f2"}
        borderTop={"1px"}
        px={[0, null, 60]}
        py={[4, null, 10]}
      >
        <Stack spacing={[5, null, 20]} w={["100%", null, "65%"]}>
          <Box
            bg={"white"}
            // w={["100%", null, "100%"]}
            boxShadow={"md"}
          >
            <Heading size={"sm"} p={5}>
              SHOPPING BAG {"("}
              {cart?.data?.length}
              {")"}
            </Heading>
            <Divider mb={2} />

            {!isMobile ? (
              <Box>
                {cart?.data?.length > 0 ? (
                  <Stack>
                    <HStack w={"100%"} justifyContent={"space-between"}>
                      <Text w={"50%"} align={"center"}>
                        Item
                      </Text>
                      <Text w={"20%"} align={"center"}>
                        Qty
                      </Text>
                      <Text w={"30%"} align={"center"}>
                        Price
                      </Text>
                    </HStack>
                    {cart?.data?.map((x, i) => (
                      <Box key={i}>
                        <Flex>
                          <Flex w={"50%"} gap={2}>
                            <Image boxSize={150} src={x.image} />
                            <Stack fontSize={14}>
                              <Text fontWeight={"semibold"}>{x.title}</Text>
                              <Text>Category: {x.category}</Text>
                              <Text color={"red"} fontWeight={"semibold"}>
                                Exclude from promo
                              </Text>
                              <Spacer />
                              <HStack fontSize={12} fontWeight={"semibold"}>
                                <Text
                                  as={"u"}
                                  cursor={"pointer"}
                                  onClick={() => handleRemove(x)}
                                >
                                  Remove
                                </Text>
                                <Text
                                  as={"u"}
                                  onClick={() => handleSaved(x)}
                                  cursor={"pointer"}
                                >
                                  Save for later
                                </Text>
                              </HStack>
                            </Stack>
                          </Flex>
                          <Flex w={"20%"} justifyContent={"center"}>
                            <Button
                              size={"sm"}
                              borderRadius={0}
                              bg={"transparent"}
                              border={"1px"}
                              onClick={() => handleMinus(i)}
                            >
                              -
                            </Button>
                            <Text px={2}>{x.quantity}</Text>
                            <Button
                              size={"sm"}
                              borderRadius={0}
                              bg={"transparent"}
                              border={"1px"}
                              onClick={() => handleAdd(i)}
                            >
                              +
                            </Button>
                          </Flex>
                          <Flex justifyContent={"center"} w={"30%"}>
                            <Text>
                              IDR{" "}
                              {Intl.NumberFormat("en-ID", {
                                maximumSignificantDigits: 3,
                              }).format(x.price)}
                            </Text>
                          </Flex>
                        </Flex>
                        <Divider pt={2} />
                      </Box>
                    ))}
                  </Stack>
                ) : (
                  <>
                    <Text align={"center"} p={10}>
                      Your Shopping Bag is Empty
                    </Text>
                  </>
                )}
              </Box>
            ) : (
              <Stack>
                {cart?.data?.length > 0 ? (
                  <Box>
                    {cart?.data?.map((x, i) => (
                      <Box key={i}>
                        <Flex>
                          <Flex gap={2}>
                            <Stack>
                              <Image boxSize={100} src={x.image} />
                              <Flex justifyContent={"center"}>
                                <Button
                                  size={"sm"}
                                  borderRadius={0}
                                  bg={"transparent"}
                                  border={"1px"}
                                  onClick={() => handleMinus(i)}
                                >
                                  -
                                </Button>
                                <Text px={2}>{x.quantity}</Text>
                                <Button
                                  size={"sm"}
                                  borderRadius={0}
                                  bg={"transparent"}
                                  border={"1px"}
                                  onClick={() => handleAdd(i)}
                                >
                                  +
                                </Button>
                              </Flex>
                            </Stack>
                            <Stack fontSize={14}>
                              <Text fontWeight={"semibold"}>{x.title}</Text>
                              <Text fontWeight={"semibold"}>
                                IDR{" "}
                                {Intl.NumberFormat("en-ID", {
                                  maximumSignificantDigits: 3,
                                }).format(x.price)}
                              </Text>
                              <Text>Category: {x.category}</Text>
                              <Text color={"red"} fontWeight={"semibold"}>
                                Exclude from promo
                              </Text>
                              <Spacer />
                              <HStack fontSize={12} fontWeight={"semibold"}>
                                <Text
                                  as={"u"}
                                  cursor={"pointer"}
                                  onClick={() => handleRemove(x)}
                                >
                                  Remove
                                </Text>
                                <Text
                                  as={"u"}
                                  onClick={() => handleSaved(x)}
                                  cursor={"pointer"}
                                >
                                  Save for later
                                </Text>
                              </HStack>
                            </Stack>
                          </Flex>
                        </Flex>
                        <Divider pt={2} />
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <>
                    <Text align={"center"} p={10}>
                      Your Shopping Bag is Empty
                    </Text>
                  </>
                )}
              </Stack>
            )}
          </Box>
          <Box bg={"white"} boxShadow={"md"}>
            <Heading size={"sm"} p={5}>
              SAVED FOR LATER {saved?.data?.length}
            </Heading>
            <Divider mb={5} />
            {saved?.data?.length > 0 ? (
              saved?.data?.map((x, i) => (
                <Box key={i}>
                  <Flex gap={2}>
                    <Box>
                      <Image boxSize={[100, null, 150]} src={x.image} />
                    </Box>
                    <Box fontSize={14}>
                      <Text fontWeight={"semibold"}>{x.title}</Text>
                      <Text fontWeight={"semibold"}>
                        IDR{" "}
                        {Intl.NumberFormat("en-ID", {
                          maximumSignificantDigits: 3,
                        }).format(x.price)}
                      </Text>
                      <HStack mt={2}>
                        <Button
                          borderRadius={0}
                          size={"xs"}
                          onClick={() => handleRemoveWishlist(x)}
                        >
                          Remove
                        </Button>
                        <Button
                          borderRadius={0}
                          size={"xs"}
                          onClick={() => handleCart(x)}
                        >
                          Add To Bag
                        </Button>
                      </HStack>
                    </Box>
                  </Flex>
                  <Divider my={5} />
                </Box>
              ))
            ) : (
              <Text align={"center"} p={10}>
                Your Shopping Bag is Empty
              </Text>
            )}
          </Box>
        </Stack>

        <Stack w={["100%", null, "28%"]} px={[5, null, 0]} py={[4, null, 0]}>
          <Stack>
            {totalPrice ? (
              <>
                <HStack justifyContent={"space-between"}>
                  <Text>Item Subtotal</Text>
                  <Text>
                    IDR{" "}
                    {Intl.NumberFormat("en-ID", {
                      maximumSignificantDigits: 3,
                    }).format(totalPrice)}
                  </Text>
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <Text>Estimated Total</Text>
                  <Text>
                    IDR{" "}
                    {Intl.NumberFormat("en-ID", {
                      maximumSignificantDigits: 3,
                    }).format(totalPrice)}
                  </Text>
                </HStack>
              </>
            ) : (
              <>
                <HStack justifyContent={"space-between"}>
                  <Text>Item Subtotal</Text>
                  <Text>IDR {0}</Text>
                </HStack>
                <HStack justifyContent={"space-between"}>
                  <Text>Estimated Total</Text>
                  <Text>IDR {0}</Text>
                </HStack>
              </>
            )}
          </Stack>
          <Button
            color={"white"}
            bg={"black"}
            borderRadius={0}
            onClick={handleCheckout}
          >
            CHECKOUT NOW
          </Button>
          <Text fontSize={12} color={"blackAlpha.700"}>
            By clicking ‘Check Out Now’, you will be redirected to the Ipsum et
            quis laboris aute occaecat nulla velit magna dolor sit occaecat
            anim..
          </Text>
          <Divider mt={8} />
          <Box>
            <Text fontSize={14} fontWeight={"semibold"}>
              Add a promo
            </Text>
            <HStack mt={2}>
              <Input bg={"white"} borderRadius={0} placeholder="Promo" />
              <Button borderRadius={0} color="white" bg={"black"}>
                Apply
              </Button>
            </HStack>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default CartPage;
