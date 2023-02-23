import {
  AspectRatio,
  Box,
  Divider,
  Heading,
  HStack,
  Image,
  Img,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { womenClothes } from "../dataArray.jsx/WomenCategory";

const ProductPage = () => {
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
          <a href="#">Home</a> / <a href="#">Women</a>
        </Text>
        <Heading align={"center"} my={8}>
          Women's Sweaters
        </Heading>

        <HStack my={5} justifyContent={"space-between"}>
          <HStack>
            <Box>
              <Select placeholder="Show Filter" borderRadius={0}></Select>
            </Box>
            <Box>
              <Select placeholder="Featured" borderRadius={0}>
                <option value={"Featured"}>Featured</option>
                <option value={"priceAsc"}>Price: Low - High</option>
                <option value={"priceDesc"}>Price: High - Low</option>
                <option value={"topRated"}>Top Rated</option>
                <option value={"newArrival"}>New Arrival</option>
              </Select>
            </Box>
          </HStack>
          <HStack>
            <Box>
              <Select placeholder="1" borderRadius={0}>
                <option value={"2"}>2</option>
              </Select>
            </Box>
            <Text>of 2</Text>
            <Box borderLeft={"1px"} px={3}>
              <Text>View All</Text>
            </Box>
          </HStack>
        </HStack>

        <SimpleGrid columns={[1, null, 3]} spacing={10}>
          {womenClothes.map((x, i) => (
            <Link key={i} to={`/product/${x.id}`}>
              <Box
                pos={"relative"}
                p={2}
                _hover={{ bg: "white", boxShadow: "md" }}
              >
                <Image h={450} src={x.img} />
                <Text py={3}>{x.name}</Text>
                <Text fontWeight={"semibold"}>
                  IDR{" "}
                  {Intl.NumberFormat("en-ID", {
                    maximumSignificantDigits: 3,
                  }).format(x.price)}
                </Text>
                <Box
                  pos={"absolute"}
                  bottom={"90%"}
                  left={"60%"}
                  w={"60%"}
                  //   border={"1px"}
                  alignItems={"center"}
                >
                  <Box align={"center"}>
                    <MdOutlineFavorite size={30} />
                    {/* <Box w={20} h={1} bg={"white"} borderRadius={"md"} mt={1} /> */}
                  </Box>
                </Box>
              </Box>
            </Link>
          ))}
        </SimpleGrid>

        <Divider mt={10} />

        <Box py={5}>
          <Text fontSize={13}>
            Looking for sweaters for women? J.Crew has an outstanding selection
            at the best price points. Check out our filters for additional
            options like brand, color, material, and much more. Select from
            choices like pullovers, sweater blazers, and cardigan, and don't
            miss out on our current offers & sales. Shop J.Crew.com for
            best-selling, of-the-moment sweaters for women you'll love right now
            and for years to come. Curious about J.Crew Credit Card rewards?
            Learn more and receive more at j.crew.com. Gain access to a few of
            our favorite things: free alterations, birthday surprises, and
            exclusive offers. Receive double points for every dollar spent at
            J.Crew. Plus, free shipping!
          </Text>
        </Box>

        <Box my={10}>
          <Heading size={"md"} py={5}>
            Shop, Stories, & More
          </Heading>
          <HStack>
            <Box>
              <Img
                w={[250, null, 350]}
                h={[300, null, 450]}
                src="https://www.jcrew.com/brand_creative/2023/202302-Feb/flyout/2023feb_0214_w_flyouts_img0.jpg"
              />
              <Text
                align={"center"}
                py={3}
                fontWeight={"semibold"}
                fontSize={18}
              >
                Spring 2023 Lookbook
              </Text>
            </Box>
            <Box>
              <Img
                w={[250, 350, 350]}
                h={[300, 450, 450]}
                src="https://www.jcrew.com/brand_creative/2023/202302-Feb/flyout/2023feb_0214_w_flyouts_img1.jpg"
              />
              <Text
                align={"center"}
                py={3}
                fontWeight={"semibold"}
                fontSize={18}
              >
                The Essential Pant
              </Text>
            </Box>
            <Box>
              <Img
                w={[250, 350, 350]}
                h={[300, 450, 450]}
                src="https://www.jcrew.com/brand_creative/2023/202302-Feb/flyout/2023feb_0214_w_flyouts_img2.jpg"
              />
              <Text
                align={"center"}
                py={3}
                fontWeight={"semibold"}
                fontSize={18}
              >
                The Winona Loafer Lineup
              </Text>
            </Box>
            <Box>
              <Img
                w={[250, 350, 350]}
                h={[300, 450, 450]}
                src="https://www.jcrew.com/brand_creative/2023/202302-Feb/flyout/2023feb_0214_w_flyouts_img3.jpg"
              />
              <Text
                align={"center"}
                py={3}
                fontWeight={"semibold"}
                fontSize={18}
              >
                The Work Remix
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box border={"2px"} borderColor={"maroon"} p={5} my={"10"}>
          <Text
            align={"center"}
            fontWeight={"semibold"}
            fontSize={18}
            color={"red"}
          >
            Also Check Out Our Sale
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
