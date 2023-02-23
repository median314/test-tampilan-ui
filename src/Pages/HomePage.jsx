import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AppNavbar from "../Components/AppNavbar";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import AppHeader from "../Components/AppHeader";
import { FiMail, FiPhone, FiTwitter } from "react-icons/fi";
import AppFooter from "../Components/AppFooter";

const HomePage = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const moreStories = [
    {
      id: 1,
      name: "Creative Spirit Series: Nicole Wittenberg X J.Crew",
      img: "https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0131_hp_w_img7.jpg",
      link: "Shop the collab",
    },
    {
      id: 2,
      name: "Creative Spirit Series: Nails by Mei X J.Crew",
      img: "https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0214_hp_w_img7.jpg",
      link: "Shop the jewelry collab",
    },
    {
      id: 3,
      name: "Creative Spirit Series: Studio 189 X J.Crew",
      img: "https://www.jcrew.com/brand_creative/homepage2023/01-Jan/2023jan_0104_hp_w_img8.jpg",
      link: "Discover the collab",
    },
    {
      id: 4,
      name: "Olympias Pick",
      img: "https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0124_hp_w_img10.jpg",
      link: "Shop her February faves",
    },
  ];

  const instagramProduct = [
    {
      id: 1,
      img: "https://edge.curalate.com/v1/img/e2dU8SuApH7Cy4WR2aWwS4mstT8uUrADQWQrCoaBVw0=/w/450?typ=webp",
      likes: 1000,
    },
    {
      id: 2,
      img: "https://edge.curalate.com/v1/img/bWeZrqQzA-7NsctVxhp7FpuEydy1oDsqyaf0veH5Hls=/w/450?typ=webp",
      likes: 1000,
    },
    {
      id: 3,
      img: "https://edge.curalate.com/v1/img/QtqvagY4HBXyvvIXc1ZYXNWT1Llp1FB_pTTEZSpRMwo=/w/450?typ=webp",
      likes: 1000,
    },
    {
      id: 4,
      img: "https://edge.curalate.com/v1/img/mqgKeoxwZr_oZgJsvFKLwiX-PhKoijiYSexiN7HBRqA=/w/450?typ=webp",
      likes: 1000,
    },
  ];

  return (
    <Box>
      {/* <AppNavbar /> */}
      <Stack alignItems={"center"} justifyContent="center" mt={75}>
        <Box>
          <Box p={7} >
            <Text align={"center"} color='gray.600' fontSize={14}>
              Have a question? We can help
            </Text>
          </Box>

          <Box pos={"relative"}>
            <Image
              w={"100%"}
              src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0214_hp_w_img0_text.jpg"
            />
            <Box pos={"absolute"} right={0} bottom={"10%"} w={"50%"}>
              <Box align={"center"} color={"white"} pt={"5"}>
                <Text fontSize={[10, 14, 16]}>The Spring 2023</Text>
                <Text fontWeight={"bold"} fontSize={[14, 27, 35]}>
                  Lookbook Is Here
                </Text>
                <Text>
                  <a href="#">Shop The Look</a>
                </Text>
                <Box w={"20%"} h={1} bg={"white"} borderRadius={"md"} mt={1} />
              </Box>
            </Box>
          </Box>
        </Box>

        <Stack alignItems={"center"} justifyContent="center" w={"80%"}>
          <SimpleGrid columns={[1, null, 2]} spacing={"none"}>
            <Box pos={"relative"}>
              <Image
                w="100%"
                src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0214_hp_w_img1.jpg"
              />
              <Box
                pos={"absolute"}
                bottom={"30%"}
                left={"20%"}
                w={"60%"}
                // border={"1px"}
                alignItems={"center"}
              >
                <Box align={"center"} color={"white"}>
                  <Text fontSize={[12, 15, 18]}>Pant spotlight</Text>
                  <Text fontWeight={"bold"} fontSize={[12, 20, 25]}>
                    Introducing the Essential pant
                  </Text>
                  <Text fontSize={[5, 10, 16]}>Shop all pants</Text>
                  <Box
                    w={"20%"}
                    h={1}
                    bg={"white"}
                    borderRadius={"md"}
                    mt={1}
                  />
                </Box>
              </Box>
            </Box>
            <Box pos={"relative"}>
              <Image
                w="100%"
                src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0214_hp_w_img2.jpg"
              />
              <Box
                pos={"absolute"}
                bottom={"30%"}
                left={"20%"}
                w={"60%"}
                // border={"1px"}
                alignItems={"center"}
              >
                <Box align={"center"} color={"white"}>
                  <Text fontWeight={"bold"} fontSize={[15, 20, 35]}>
                    Have Forever Cashmere
                  </Text>
                  <Text>
                    <a href="#">Shop the new palette</a>
                  </Text>
                  <Box
                    w={"20%"}
                    h={1}
                    bg={"white"}
                    borderRadius={"md"}
                    mt={1}
                  />
                </Box>
              </Box>
            </Box>
            <Box pos={"relative"}>
              <Image
                w="100%"
                src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0214_hp_w_img3.jpg"
              />
              <Box
                pos={"absolute"}
                bottom={"2%"}
                left={"20%"}
                w={"60%"}
                border={"1px"}
                alignItems={"center"}
              >
                <Box align={"center"} color={"black"}>
                  <Text fontWeight={"bold"} fontSize={[15, 20, 35]}>
                    The Winona Loafer Lineup
                  </Text>
                  <Text>
                    <a href="#">Shop shoes</a>
                  </Text>
                  <Box
                    w={"20%"}
                    h={1}
                    bg={"black"}
                    borderRadius={"md"}
                    mt={1}
                  />
                </Box>
              </Box>
            </Box>
            <Box pos={"relative"}>
              <Image
                w="100%"
                src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0131_hp_w_img4.jpg"
              />
              <Box
                pos={"absolute"}
                bottom={"2%"}
                left={"20%"}
                w={"60%"}
                border={"1px"}
                alignItems={"center"}
              >
                <Box align={"center"} color={"white"}>
                  <Text fontWeight={"bold"} fontSize={[15, 20, 35]}>
                    Swim time!
                  </Text>
                  <Text>
                    <a href="#">Shop the latest</a>
                  </Text>
                  <Box
                    w={"20%"}
                    h={1}
                    bg={"white"}
                    borderRadius={"md"}
                    mt={1}
                  />
                </Box>
              </Box>
            </Box>
            <Box pos={"relative"}>
              <Image
                w="100%"
                src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0214_hp_w_img5.jpg"
              />
              <Box
                pos={"absolute"}
                bottom={"5%"}
                left={"20%"}
                w={"60%"}
                border={"1px"}
                alignItems={"center"}
              >
                <Box align={"center"} color={"white"}>
                  <Text fontWeight={"bold"} fontSize={[15, 20, 35]}>
                    The Work Remix
                  </Text>
                  <Text>
                    <a href="#">Shop new arrivals</a>
                  </Text>
                  <Box
                    w={"20%"}
                    h={1}
                    bg={"white"}
                    borderRadius={"md"}
                    mt={1}
                  />
                </Box>
              </Box>
            </Box>
            <Box pos={"relative"}>
              <Image
                w="100%"
                src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0214_hp_w_img6_new.jpg"
              />
              <Box
                pos={"absolute"}
                bottom={"5%"}
                left={"20%"}
                w={"60%"}
                border={"1px"}
                alignItems={"center"}
              >
                <Box align={"center"} color={"white"}>
                  <Text fontWeight={"bold"} fontSize={[15, 20, 35]}>
                    New covetable classics
                  </Text>
                  <Text>
                    <a href="#">Shop this month collection</a>
                  </Text>
                  <Box
                    w={"20%"}
                    h={1}
                    bg={"white"}
                    borderRadius={"md"}
                    mt={1}
                  />
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
        </Stack>

        <Box align={"center"} w={"100%"}>
          <HStack gap={5} py={4} mb={5} w={"80%"}>
            <Text fontSize={[14, null, 25]} mx={4} w={"20%"}>
              Shop New Arrivals
            </Text>
            <Button
              border={"1px"}
              borderRadius={0}
              bg={"transparent"}
              p={"3%"}
              w={"20%"}
              align={"center"}
              fontSize={["sm", 14, 16]}
            >
              Shop Women
            </Button>
            <Text
              border={"1px"}
              fontSize={[10, 14, 16]}
              p={2}
              w={"20%"}
              align={"center"}
            >
              Shop Men
            </Text>
            <Text border={"1px"} p={2} w={"20%"} align={"center"}>
              Shop Girls
            </Text>
            <Text border={"1px"} p={2} w={"20%"} align={"center"}>
              Shop Boys
            </Text>
          </HStack>
        </Box>

        <Box bg={"#f8f4ef"}>
          <Box px={40} py={"10em"}>
            <Heading size={"md"} fontSize={35} mb={8}>
              More Stories
            </Heading>
            <SimpleGrid columns={[1, null, 4]} spacing={6}>
              {moreStories.map((x, i) => (
                <Box key={i}>
                  <Image src={x.img} />
                  <Box>
                    <Text fontSize={20} mb={5}>
                      {x.name}
                    </Text>
                    <Text as={"u"} fontWeight={"bold"}>
                      <a href="45">{x.link}</a>
                    </Text>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>

            <Box
              mt={"20%"}
              w={"full"}
              h={1}
              align={"Center"}
              bgColor={"black"}
            />
            <HStack>
              <SimpleGrid columns={[1, null, 3]} w={"50%"} spacing={3}>
                <Image src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0124_hp_w_img11b.jpg" />
                <Image src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0124_hp_w_img12b.jpg" />
                <Image src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0124_hp_w_img13b.jpg" />
                <Image src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0124_hp_w_img14b.jpg" />
                <Image src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0124_hp_w_img15b.jpg" />
                <Image src="https://www.jcrew.com/brand_creative/homepage2023/02-Feb/2023feb_0124_hp_w_img16b.jpg" />
              </SimpleGrid>
              <Box w={"50%"} align={"center"} mx={0}>
                <Image
                  w={200}
                  src="https://www.jcrew.com/brand_creative/2022/202204-Apr/logo_jcrew_collective_20220315_blk.png?imformat=generic"
                />
                <Text fontSize={14} py={2}>
                  Meet our creative community
                </Text>
              </Box>
            </HStack>
          </Box>
        </Box>

        <Box p={20}>
          <Text align={"center"} mb={10} fontSize={30}>
            You'll Also Love
          </Text>
          <HStack>
            <Box pos={"relative"}>
              <Image src="https://www.jcrew.com/s7-img-facade/BO614_SR0696?wid=376" />
              <Box
                pos={"absolute"}
                bottom={"80%"}
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
            <Box pos={"relative"}>
              <Image src="https://www.jcrew.com/s7-img-facade/BF793_WO8694?wid=376" />
              <Box
                pos={"absolute"}
                bottom={"80%"}
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
            <Box pos={"relative"}>
              <Image src="https://www.jcrew.com/s7-img-facade/AR522_EB7521?wid=376" />
              <Box
                pos={"absolute"}
                bottom={"80%"}
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
            <Box pos={"relative"}>
              <Image src="https://www.jcrew.com/s7-img-facade/AN140_BL8818?wid=376" />
              <Box
                pos={"absolute"}
                bottom={"80%"}
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
            <Box pos={"relative"}>
              <Image src="https://www.jcrew.com/s7-img-facade/AW234_EE0530?wid=376" />
              <Box
                pos={"absolute"}
                bottom={"80%"}
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
            <Box pos={"relative"}>
              <Image src="https://www.jcrew.com/s7-img-facade/BA231_EE0759?wid=376" />
              <Box
                pos={"absolute"}
                bottom={"80%"}
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
          </HStack>
        </Box>

        <Box px={20} py={10}>
          <Box align={"center"} mb={10} fontSize={20}>
            <Text>Shop Our Instagram</Text>
            <Text>
              {"("}and join the fun with #injcrew{")"}
            </Text>
          </Box>
          <HStack spacing={10}>
            {instagramProduct.map((x) => (
              <Box>
                <Image src={x.img} />
              </Box>
            ))}
          </HStack>
        </Box>

        <Box p={20}>
          <Heading align={"center"} mb={4}>
            More you need to see
          </Heading>
          <HStack spacing={5}>
            <Box>
              <Image src="https://www.jcrew.com/s7-img-facade/BO175_SR0972_m?wid=416" />
              <Text py={2}>Shop Women's Sweaters</Text>
              <Box w={75} h={0.5} bgColor={"black"} />
            </Box>
            <Box>
              <Image src="https://www.jcrew.com/s7-img-facade/BO175_SR0972_m?wid=416" />
              <Text py={2}>Shop Women's Sweaters</Text>
              <Box w={75} h={0.5} borderRadius={"md"} bgColor={"black"} />
            </Box>
            <Box>
              <Image src="https://www.jcrew.com/s7-img-facade/BO175_SR0972_m?wid=416" />
              <Text py={2}>Shop Women's Sweaters</Text>
              <Box w={75} h={0.5} borderRadius={"md"} bgColor={"black"} />
            </Box>
            <Box>
              <Image src="https://www.jcrew.com/s7-img-facade/BO175_SR0972_m?wid=416" />
              <Text py={2}>Shop Women's Sweaters</Text>
              <Box w={75} h={0.5} borderRadius={"md"} bgColor={"black"} />
            </Box>
            <Box>
              <Image src="https://www.jcrew.com/s7-img-facade/BO175_SR0972_m?wid=416" />
              <Text py={2}>Shop Women's Sweaters</Text>
              <Box w={75} h={0.5} borderRadius={"md"} bgColor={"black"} />
            </Box>
            <Box>
              <Image src="https://www.jcrew.com/s7-img-facade/BO175_SR0972_m?wid=416" />
              <Text py={2}>Shop Women's Sweaters</Text>
              <Box w={75} h={0.5} borderRadius={"md"} bgColor={"black"} />
            </Box>
          </HStack>
        </Box>
      </Stack>
      {/* <AppFooter /> */}
    </Box>
  );
};

export default HomePage;
