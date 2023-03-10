import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  ListItem,
  Select,
  SimpleGrid,
  Spacer,
  Spinner,
  Stack,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import {
  FaEye,
  FaFacebook,
  FaHeart,
  FaStar,
  FaTumblr,
  FaTwitter,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { arrayUnion, doc, getDoc, setDoc } from "firebase/firestore";
import AuthContext from "../Hooks/authContext";
import { db } from "../Config/firebase";
import { similiarItems } from "../DataArray/similiarItems";
import {
  useAuthState,
  useCartDispatch,
  useCartState,
  useWishlistDispatch,
} from "../Hooks/context";
import { addToCart, addToWishlist } from "../Hooks/actions";

const ProductSinglePage = () => {
  const [product, setProduct] = useState([]);
  const { cart } = useCartState();
  const { user } = useAuthState();
  const dispatch = useCartDispatch();
  const dispatchWishlist = useWishlistDispatch();

  const params = useParams();

  const toast = useToast();

  const getSingleProduct = async () => {
    try {
      const docRef = doc(db, `products`, params.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error.message, "ini error");
    }
  };

  const handleCart = async (e) => {
    console.log(cart);

    try {
      let cartData = {};
      cartData = { ...product };

      const getCart = localStorage.getItem("cart");

      if (user) {
        if (getCart === null || cart.cart?.length === 0) {
          let payloadCart = {
            cart: [{ ...e, quantity: 1 }],
          };

          addToCart(dispatch, payloadCart);

          const ref = doc(db, "cart", user.uid);
          await setDoc(
            ref,
            {
              uid: user.uid,
              data: arrayUnion({ ...cartData, quantity: 1 }),
              createdAt: new Date(),
            },
            { merge: true }
          );

          cartData = {};

          toast({
            position: "top",
            title: "Wearing Klamby",
            description: "Product added to your cart",
            status: "success",
            duration: 10000,
          });
        } else {
          // if (getCart !== null || cart.cart?.length > 0) {
          const getCart = localStorage.getItem("cart");
          const cartArr = JSON.parse(getCart);
          const newArr = cartArr.cart;
          console.log(cartArr.cart);

          const find = newArr.findIndex((x) => x.title === e.title);
          console.log(find, "ini result find");

          if (find >= 0) {
            toast({
              position: "top",
              title: "Wearing Klamby",
              description: "This product is already added to your cart",
              status: "info",
              duration: 10000,
            });
          } else {
            newArr.push({ ...e, quantity: 1 });

            let payloadCart = {
              cart: [...newArr],
            };

            addToCart(dispatch, payloadCart);

            const ref = doc(db, "cart", user.uid);
            await setDoc(
              ref,
              {
                uid: user.uid,
                data: arrayUnion({ ...cartData, quantity: 1 }),
                createdAt: new Date(),
              },
              { merge: true }
            );

            cartData = {};

            toast({
              position: "top",
              title: "Wearing Klamby",
              description: "Product added to your cart",
              status: "success",
              duration: 10000,
            });
          }
        }
      } else {
        toast({
          position: "top",
          title: "Wearing Klamby",
          description: "Please login first",
          status: "error",
          duration: 10000,
        });
      }
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

  const handleSaved = async (data) => {
    let savedData = {};
    savedData = { ...data };

    console.log(savedData, "ini wishlist");

    const getWishlist = localStorage.getItem("wishlist");
    const wishlistArr = JSON.parse(getWishlist);

    try {
      if (user) {
        if (wishlistArr === null || getWishlist === null) {
          let payloadWishlist = {
            wishlist: [{ ...data }],
          };

          addToWishlist(dispatchWishlist, payloadWishlist);

          //to firebase
          const ref = doc(db, "wishlist", user.uid);
          await setDoc(
            ref,
            {
              uid: user.uid,
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
        }
        if (getWishlist !== null || wishlistArr?.wishlist.length > 0) {
          const newWishlistArr = wishlistArr.wishlist;
          console.log(newWishlistArr, "ini wishlist");

          const find = newWishlistArr.findIndex((x) => x.title === data.title);
          console.log(find, "ini result find");

          if (find >= 0) {
            toast({
              position: "top",
              title: "Wearing Klamby",
              description: "This product is already added to your wishlist",
              status: "info",
              duration: 10000,
            });
          } else {
            newWishlistArr.push(savedData);

            let payloadWishlist = {
              wishlist: newWishlistArr,
            };

            addToWishlist(dispatchWishlist, payloadWishlist);

            //to firebase
            const ref = doc(db, "wishlist", user.uid);
            await setDoc(
              ref,
              {
                uid: user.uid,
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
          }
        }
      } else {
        toast({
          position: "top",
          title: "Wearing Klamby",
          description: "Please login first",
          status: "error",
          duration: 10000,
        });
      }
    } catch (error) {
      toast({
        position: "top",
        title: "Wearing Klamby",
        description: error.message,
        status: "error",
      });
    }
  };

  useEffect(() => {
    getSingleProduct();

    return () => {};
  }, []);

  const customersLove = [
    {
      id: 1,
      name: "Louisa lady jacket in Italian ponte",
      img: "https://edge.curalate.com/v1/img/e2dU8SuApH7Cy4WR2aWwS4mstT8uUrADQWQrCoaBVw0=/w/450?typ=webp",
      price: 7132386,
    },
    {
      id: 2,
      name: "Louisa lady jacket in Italian ponte",
      img: "https://edge.curalate.com/v1/img/bWeZrqQzA-7NsctVxhp7FpuEydy1oDsqyaf0veH5Hls=/w/450?typ=webp",
      price: 7132386,
    },
    {
      id: 3,
      name: "Louisa lady jacket in Italian ponte",
      img: "https://edge.curalate.com/v1/img/QtqvagY4HBXyvvIXc1ZYXNWT1Llp1FB_pTTEZSpRMwo=/w/450?typ=webp",
      price: 4367801,
    },
    {
      id: 4,
      name: "Louisa lady jacket in Italian ponte",
      img: "https://edge.curalate.com/v1/img/mqgKeoxwZr_oZgJsvFKLwiX-PhKoijiYSexiN7HBRqA=/w/450?typ=webp",
      price: 9766207,
    },
    {
      id: 5,
      name: "Louisa lady jacket in Italian ponte",
      img: "https://edge.curalate.com/v1/img/e2dU8SuApH7Cy4WR2aWwS4mstT8uUrADQWQrCoaBVw0=/w/450?typ=webp",
      price: 4367801,
    },
  ];

  return (
    <Box mt={75}>
      <Box py={5}>
        <Text align={"center"} fontSize={14}>
          Have a question? We can help
        </Text>
        <Divider mt={8} />
      </Box>
      <Box px={[0, null, 10]}>
        <Text px={[3, null, 0]}>
          <a href="#">Home</a> / <a href="#">Women</a> / <a>Blazers</a>
        </Text>

        <Box py={10}>
          <Text
            align={"center"}
            px={[3, null, 0]}
            py={5}
            fontWeight={"bold"}
            fontSize={20}
          >
            Similiar items
          </Text>
          <Flex
            gap={3}
            w={"100%"}
            overflowX={"auto"}
            px={[3, null, 0]}
            mx={2}
            justifyContent={"center"}
          >
            {similiarItems.map((x, i) => (
              <>
                <Image w={["40%", null, "12.5%"]} src={x.img} />
              </>
            ))}
          </Flex>
        </Box>
        <Divider mb={4} />

        <Box>
          {product ? (
            <>
              <Flex
                gap={4}
                justifyContent={"center"}
                px={[0, null, 70]}
                flexWrap={["wrap", null, "nowrap"]}
              >
                <Stack w={["100%", null, "70%"]}>
                  <Flex
                    gap={2}
                    flexWrap={["wrap-reverse", null, "nowrap"]}
                    justifyContent={"center"}
                  >
                    <Flex
                      flexDir={["row", null, "column"]}
                      overflowX={["scroll", null, "auto"]}
                      gap={3}
                      mx={[2, null, 0]}
                    >
                      <Image boxSize={[100, null, null]} src={product.image} />
                      <Image boxSize={[100, null, null]} src={product.image} />
                      <Image boxSize={[100, null, null]} src={product.image} />
                      <Image boxSize={[100, null, null]} src={product.image} />
                    </Flex>
                    <Box>
                      <Image
                        boxSize={[null, null, "2xl"]}
                        src={product.image}
                      />
                    </Box>
                  </Flex>
                </Stack>

                <Stack w={["100%", null, "30%"]} p={[3, null, 0]}>
                  <Text fontWeight={"semibold"}>{product.title}</Text>
                  <Text fontSize={"sm"}>Item AD753</Text>
                  <HStack mt={3}>
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    <Text fontSize={10} as={"u"}>
                      196 REVIEWS
                    </Text>
                  </HStack>

                  <Text fontWeight={"bold"} py={5}>
                    IDR{" "}
                    {Intl.NumberFormat("en-ID", {
                      maximumSignificantDigits: 3,
                    }).format(product.price)}
                  </Text>

                  <Stack my={4}>
                    <Text fontSize={14}>Color: Black</Text>

                    <HStack>
                      <Box
                        w={30}
                        h={30}
                        bg="black"
                        borderRadius={"full"}
                        cursor={"pointer"}
                      />
                      <Box
                        w={30}
                        h={30}
                        bg="red"
                        borderRadius={"full"}
                        cursor={"pointer"}
                      />
                      <Box
                        w={30}
                        h={30}
                        bg="blue"
                        borderRadius={"full"}
                        cursor={"pointer"}
                      />
                    </HStack>

                    <Spacer />

                    <Stack spacing={0}>
                      <HStack justifyContent={"space-between"} pt={10}>
                        <Box fontSize={12} w={"40%"}>
                          <Text as={"span"}>Size:</Text>
                          <Text as={"span"} fontWeight={"semibold"} ml={1}>
                            Select a Size
                          </Text>
                        </Box>
                        <Box>
                          <Text color={"blackAlpha.800"} fontSize={12}>
                            Size Charts
                          </Text>
                        </Box>
                      </HStack>
                      <Text fontWeight={"semibold"} fontSize={12}>
                        All Size Are US Size
                      </Text>
                    </Stack>

                    <SimpleGrid columns={4} spacing={2}>
                      <Box
                        p={2}
                        align={"center"}
                        border={"1px"}
                        fontSize={14}
                        bg={"blackAlpha.100"}
                      >
                        XS
                      </Box>
                      <Box
                        p={2}
                        align={"center"}
                        border={"1px"}
                        fontSize={14}
                        bg={"blackAlpha.100"}
                      >
                        M
                      </Box>
                      <Box
                        p={2}
                        align={"center"}
                        border={"1px"}
                        fontSize={14}
                        bg={"blackAlpha.100"}
                      >
                        L
                      </Box>
                      <Box
                        p={2}
                        align={"center"}
                        border={"1px"}
                        fontSize={14}
                        bg={"blackAlpha.100"}
                      >
                        XL
                      </Box>
                      <Box
                        p={2}
                        align={"center"}
                        border={"1px"}
                        fontSize={14}
                        bg={"blackAlpha.100"}
                      >
                        2XL
                      </Box>
                      <Box
                        p={2}
                        align={"center"}
                        border={"1px"}
                        fontSize={14}
                        bg={"blackAlpha.100"}
                      >
                        3XL
                      </Box>
                      <Box
                        p={2}
                        align={"center"}
                        border={"1px"}
                        fontSize={14}
                        bg={"blackAlpha.100"}
                      >
                        4XL
                      </Box>
                    </SimpleGrid>

                    <HStack py={5}>
                      <Text fontSize={14} fontWeight={"semibold"}>
                        Quantity:
                      </Text>
                      <Select size={"xs"} borderRadius={"none"} w={50}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                      </Select>
                    </HStack>

                    <Box py={5}>
                      <Text as={"i"} fontSize={14} fontWeight={"semibold"}>
                        Price include duties and taxes
                      </Text>
                      <HStack>
                        <Button
                          bg={"black"}
                          color={"white"}
                          borderRadius={0}
                          my={1}
                          w={"full"}
                          onClick={() => handleCart(product)}
                        >
                          ADD TO BAG
                        </Button>
                        <Button
                          border={"1px"}
                          borderRadius={0}
                          bg={"transparent"}
                          p={2}
                          onClick={() => handleSaved(product)}
                        >
                          <FaHeart size={25} />
                        </Button>
                      </HStack>
                    </Box>

                    <HStack spacing={1} justify={"center"} my={3}>
                      <FaEye size={12} />
                      <Text fontWeight={"semibold"} fontSize={12}>
                        311 people
                      </Text>
                      <Text fontSize={12} as={"span"}>
                        looked at this item in the last hour.
                      </Text>
                    </HStack>

                    <Divider py={3} />

                    <Box py={5} fontSize={14}>
                      <Heading size={"sm"}>Size & Fit</Heading>
                      <UnorderedList>
                        <ListItem>Relaxed Fit</ListItem>
                        <ListItem>Hits at hip</ListItem>
                        <ListItem>Body length: 19"</ListItem>
                        <ListItem>Sleeve length: 29 1/2"</ListItem>
                      </UnorderedList>
                    </Box>

                    <Divider my={10} />

                    <Stack pt={5}>
                      <Heading size={"sm"}>Product Details</Heading>
                      <Text fontSize={14}>
                        Meet the Emilie sweater lady jacket, an elevated new
                        style that you can wear on its own or over your favorite
                        cashmere tee. Featuring a cute, cropped silhouette,
                        polished gold buttons down the front and patch pockets,
                        this lightweight layer transitions easily from spring to
                        summer, and beyond. By buying cotton products from
                        J.Crew, you're supporting our investment in Better
                        Cotton's mission to help cotton communities survive and
                        thrive while protecting and restoring the environment.
                        This product is sourced through a system of mass balance
                        and therefore may not contain Better Cotton.
                      </Text>
                      <Box>
                        <UnorderedList fontSize={14} pb={5}>
                          <ListItem>100% Cotton</ListItem>
                          <ListItem>Machine Wash</ListItem>
                          <ListItem>Import</ListItem>
                          <ListItem>Item BQ17</ListItem>
                        </UnorderedList>
                      </Box>

                      <Divider />

                      <HStack py={5} justifyContent={"center"} spacing={5}>
                        <Heading size="md">Share</Heading>
                        <FaFacebook size={20} />
                        <FaTwitter size={20} />
                        <FaTumblr size={20} />
                      </HStack>
                    </Stack>
                  </Stack>
                </Stack>
              </Flex>
            </>
          ) : (
            <Spinner />
          )}
        </Box>

        <Divider />

        <Box my={4} mx={[3, null, 0]}>
          <Heading size="md" align={"center"} py={5}>
            Costumers Also Love
          </Heading>
          <Flex
            justify={"center"}
            gap={5}
            flexWrap={"nowrap"}
            // overflowWrap={"normal"}
          >
            <HStack overflowX={"auto"} pb={5}>
              {customersLove.map((x) => (
                <>
                  <Image w={"40%"} src={x.img} />
                  {/* <Button
                    bg={"transparent"}
                    borderRadius={0}
                    w={"full"}
                    border={"1px"}
                    my={1}
                  >
                    QUICK SHOP
                  </Button>
                  <Text>{x.name}</Text>
                  <Text>
                    IDR{" "}
                    {Intl.NumberFormat("en-ID", {
                      maximumSignificantDigits: 3,
                    }).format(x.price)}
                  </Text> */}
                </>
              ))}
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductSinglePage;
