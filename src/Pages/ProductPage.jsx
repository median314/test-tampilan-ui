import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Img,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { collection, getDocs, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { db } from "../Config/firebase";
import { shopStoriesMore } from "../DataArray/shopStoriesMore";
import useProduct from "../Hooks/CustomHooks/useProduct";

const ProductPage = () => {
  const width = window.innerWidth;

  const [products, setProducts] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("");

  const getProductsData = async () => {
    try {
      const q = query(collection(db, "products"));
      const querySnapshot = await getDocs(q);
      const arrProduct = [];

      querySnapshot.forEach((doc) => {
        let forData = doc.data();
        forData.id = doc.id;
        arrProduct.push(forData);
      });

      console.log(arrProduct);
      setProducts(arrProduct);
    } catch (error) {
      console.log(error, "ini error");
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const handleSelectedChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSortByChange = (e) => {
    setSelectedSortBy(e.target.value);
  };

  const sortedData = selectedSortBy
    ? products.sort((a, b) => (a[selectedSortBy] > b[selectedSortBy] ? 1 : -1))
    : products;

  console.log(sortedData);

  return (
    <Box mt={75} w={width} justifyContent={"center"}>
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

        <Flex my={5} justifyContent={"space-between"} flexWrap={"wrap"}>
          <HStack py={[2, null, 0]}>
            <Stack>
              <Select placeholder="Show Filter" borderRadius={0}></Select>
            </Stack>
            <Stack>
              <Select
                value={selectedSortBy}
                placeholder="Featured"
                borderRadius={0}
                onChange={handleSortByChange}
              >
                <option value={"title"}>Alphabet Name</option>
                <option value={"price"}>Price</option>
              </Select>
            </Stack>
          </HStack>
          <HStack>
            <Stack>
              <Select placeholder="1" borderRadius={0}>
                <option value={"2"}>2</option>
              </Select>
            </Stack>
            <Text>of 2</Text>
            <Box borderLeft={"1px"} px={3}>
              <Text>View All</Text>
            </Box>
          </HStack>
        </Flex>

        <SimpleGrid columns={[2, null, 3]} spacing={[2, null, 10]}>
          {sortedData?.map((product, i) => (
            <Link key={i} to={`/product/${product?.id}`}>
              <Box
                pos={"relative"}
                p={2}
                _hover={{
                  bg: "white",
                  boxShadow: "md",
                  transform: "scale(1.05)",
                }}
              >
                <Image src={product.image} />
                <Text py={3}>{product?.title}</Text>
                <Text fontWeight={"semibold"}>
                  IDR{" "}
                  {Intl.NumberFormat("en-ID", {
                    maximumSignificantDigits: 3,
                  }).format(product?.price)}
                </Text>
                <Stack
                  pos={"absolute"}
                  bottom={["87%", null, "88%"]}
                  left={["55%", null, "62%"]}
                  w={["60%", null, "45%"]}
                  //   border={"1px"}
                  alignItems={"center"}
                >
                  <Box align={"center"}>
                    <MdOutlineFavorite size={"20%"} />
                    {/* <Box w={20} h={1} bg={"white"} borderRadius={"md"} mt={1} /> */}
                  </Box>
                </Stack>
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
          <Flex flexWrap={"nowrap"}>
            <HStack overflowX={"auto"}>
              {shopStoriesMore.map((x, i) => (
                <Box key={i}>
                  <Img
                    w={["80%", null, 350]}
                    h={["80%", null, 450]}
                    src={x.img}
                  />
                  {/* <Text
                    align={"center"}
                    py={3}
                    fontWeight={"semibold"}
                    fontSize={18}
                  >
                    {x.name}
                  </Text> */}
                </Box>
              ))}
            </HStack>
          </Flex>
        </Box>
        <Box border={"2px"} borderColor={"maroon"} p={5} my={"10"}>
          <Text
            align={"center"}
            fontWeight={"semibold"}
            fontSize={18}
            color={"maroon"}
          >
            Also Check Out Our Sale
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
