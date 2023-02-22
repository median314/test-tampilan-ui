import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";
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
          <Flex gap={3}>
            <Box>
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
            <Box>
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
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductSinglePage;
