import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Select,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { womenClothes } from "../dataArray.jsx/WomenCategory";

const ProductSinglePage = () => {
  console.log();
  return (
    <Box mt={75}>
      <Box py={5}>
        <Text align={"center"} fontSize={14}>
          Have a question? We can help
        </Text>
        <Divider mt={8} />
      </Box>
      <Box px={10}>
        <Text>
          <a href="#">Home</a> / <a href="#">Women</a> / <a>Blazers</a>
        </Text>

        <Box py={10}>
          <Text>Similiar items</Text>
          <HStack spacing={5} w={"100%"} justify={"center"}>
            <Image
              w={"12.5%"}
              src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0124_hp_w_img11b.jpg"
            />
            <Image
              w={"12.5%"}
              src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0124_hp_w_img12b.jpg"
            />
            <Image
              w={"12.5%"}
              src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0124_hp_w_img13b.jpg"
            />
            <Image
              w={"12.5%"}
              src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0124_hp_w_img14b.jpg"
            />
            <Image
              w={"12.5%"}
              src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0124_hp_w_img15b.jpg"
            />
            <Image
              w={"12.5%"}
              src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0124_hp_w_img16b.jpg"
            />
          </HStack>
        </Box>
        <Divider mb={4} />
        <Box>
          <Flex gap={3} justifyContent={"center"} px={70}>
            <Box w={"75%"} border={"1px"}>
              <Flex gap={2}>
                <Stack>
                  <Image src="https://www.jcrew.com/s7-img-facade/AD753_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=160&hei=160" />
                  <Image src="https://www.jcrew.com/s7-img-facade/AD753_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=160&hei=160" />
                  <Image src="https://www.jcrew.com/s7-img-facade/AD753_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=160&hei=160" />
                  <Image src="https://www.jcrew.com/s7-img-facade/AD753_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=160&hei=160" />
                </Stack>
                <Box>
                  <Image src="https://www.jcrew.com/s7-img-facade/AD753_BK0001_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=850&hei=850" />
                </Box>
              </Flex>
            </Box>

            <Stack border={"1px"} w={"25%"}>
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

                <HStack mt={3}>
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

                <Box>
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
              </Stack>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductSinglePage;
