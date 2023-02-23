import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Select,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import {
  FaEye,
  FaFacebook,
  FaHeart,
  FaStar,
  FaTumblr,
  FaTwitter,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { similiarItems } from "../dataArray.jsx/similiarItems";
import { womenClothes } from "../dataArray.jsx/WomenCategory";

const ProductSinglePage = () => {
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
          <Text px={[3, null, 0]}>Similiar items</Text>
          <Flex gap={3} w={"100%"} overflowX={"auto"} px={[3, null, 0]}>
            {similiarItems.map((x, i) => (
              <>
                <Image w={["40%", null, "12.5%"]} src={x.img} />
              </>
            ))}
          </Flex>
        </Box>
        <Divider mb={4} />

        <Box>
          <Flex
            gap={3}
            justifyContent={"center"}
            px={[0, null, 70]}
            flexWrap={["wrap", null, "nowrap"]}
          >
            <Stack w={["100%", null, "75%"]}>
              <Flex gap={2} flexWrap={["wrap-reverse", null, "nowrap"]}>
                <Flex
                  flexDir={["row", null, "column"]}
                  overflowX={"auto"}
                  gap={3}
                  mx={[2, null, 0]}
                >
                  <Image src="https://www.jcrew.com/s7-img-facade/AD753_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=160&hei=160" />
                  <Image src="https://www.jcrew.com/s7-img-facade/AD753_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=160&hei=160" />
                  <Image src="https://www.jcrew.com/s7-img-facade/AD753_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=160&hei=160" />
                  <Image src="https://www.jcrew.com/s7-img-facade/AD753_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=160&hei=160" />
                </Flex>
                <Box>
                  <Image src="https://www.jcrew.com/s7-img-facade/AD753_BK0001_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=850&hei=850" />
                </Box>
              </Flex>
            </Stack>

            <Stack w={["100%", null, "25%"]} p={[3, null, 0]}>
              <Text fontWeight={"semibold"}>
                Ella open-front long sweater-blazer
              </Text>
              <Text fontSize={"sm"}>Item AD753</Text>
              <HStack mt={3}>
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                <Text fontSize={10} as={"u"}>
                  196 REVIEWS
                </Text>
              </HStack>

              <Text fontWeight={"bold"} py={5}>
                IDR 4.375.647,00
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
                    >
                      ADD TO BAG
                    </Button>
                    <Button
                      border={"1px"}
                      borderRadius={0}
                      bg={"transparent"}
                      p={2}
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

                <Stack py={10}>
                  <Heading size={"sm"}>Product Details</Heading>
                  <Text fontSize={14}>
                    Meet the Emilie sweater lady jacket, an elevated new style
                    that you can wear on its own or over your favorite cashmere
                    tee. Featuring a cute, cropped silhouette, polished gold
                    buttons down the front and patch pockets, this lightweight
                    layer transitions easily from spring to summer, and beyond.
                    By buying cotton products from J.Crew, you're supporting our
                    investment in Better Cotton's mission to help cotton
                    communities survive and thrive while protecting and
                    restoring the environment. This product is sourced through a
                    system of mass balance and therefore may not contain Better
                    Cotton.
                  </Text>
                  <Box>
                    <UnorderedList fontSize={14}>
                      <ListItem>100% Cotton</ListItem>
                      <ListItem>Machine Wash</ListItem>
                      <ListItem>Import</ListItem>
                      <ListItem>Item BQ17</ListItem>
                    </UnorderedList>
                  </Box>

                  <Divider my={10} />

                  <HStack py={10} justifyContent={"center"} spacing={5}>
                    <Heading size="md">Share</Heading>
                    <FaFacebook size={20} />
                    <FaTwitter size={20} />
                    <FaTumblr size={20} />
                  </HStack>
                </Stack>
              </Stack>
            </Stack>
          </Flex>
        </Box>

        <Divider mt={8} />

        <Box my={10} mx={[3, null, 0]}>
          <Heading size="md" align={"center"} py={5}>
            Costumers Also Love
          </Heading>
          <Flex
            justify={"center"}
            gap={5}
            flexWrap={"nowrap"}
            // overflowWrap={"normal"}
          >
            <HStack overflowX={"auto"}>
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

        <Divider my={8} />
      </Box>
    </Box>
  );
};

export default ProductSinglePage;
