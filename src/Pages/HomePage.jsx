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
import { moreYouNeed } from "../dataArray.jsx/moreYouNeed";
import { youAlsoLove } from "../dataArray.jsx/youAlsoLove";

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
    <Stack>
      {/* <AppNavbar /> */}
      <Stack alignItems={"center"} justifyContent="center" mt={75}>
        <Stack alignItems={"center"} justifyContent="center">
          <Box p={[3, null, 7]}>
            <Text align={"center"} color="gray.600" fontSize={14}>
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
        </Stack>

        <Stack
          alignItems={"center"}
          justifyContent="center"
          w={["100%", null, "80%"]}
          py={[null, null, 10]}
        >
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

        <Stack align={"center"} w={"100%"}>
          <Stack direction={["column", null, "row"]}>
            <Text mx={4} py={2} align={"center"} fontWeight={"semibold"}>
              Shop New Arrivals
            </Text>
            <SimpleGrid
              spacing={5}
              columns={[2, null, 4]}
              pb={5}
              minW={[300, null, null]}
            >
              <Button
                border={"1px"}
                borderRadius={0}
                bg={"transparent"}
                p={"3%"}
                // w={"20%"}
                align={"center"}
                fontSize={["sm", 14, 16]}
              >
                Shop Women
              </Button>
              <Button
                border={"1px"}
                borderRadius={0}
                bg={"transparent"}
                p={"3%"}
                // w={"20%"}
                align={"center"}
                fontSize={["sm", 14, 16]}
              >
                Shop Men
              </Button>
              <Button
                border={"1px"}
                borderRadius={0}
                bg={"transparent"}
                p={"3%"}
                // w={"20%"}
                align={"center"}
                fontSize={["sm", 14, 16]}
              >
                Shop Girls
              </Button>
              <Button
                border={"1px"}
                borderRadius={0}
                bg={"transparent"}
                p={"3%"}
                // w={"20%"}
                align={"center"}
                fontSize={["sm", 14, 16]}
              >
                Shop Boys
              </Button>
            </SimpleGrid>
          </Stack>
        </Stack>

        <Stack bg={"#f8f4ef"}>
          <Stack px={[10, null, 40]} py={10}>
            <Heading size={"md"} fontSize={35} mb={8}>
              More Stories
            </Heading>
            <SimpleGrid columns={[1, null, 4]} spacing={6}>
              {moreStories.map((x, i) => (
                <Box key={i}>
                  <Image src={x.img} />
                  <Box>
                    <Text
                      fontSize={20}
                      mb={[2, null, 5]}
                      align={["center", null, null]}
                    >
                      {x.name}
                    </Text>
                    <Box align={"center"}>
                      <Text
                        as={"u"}
                        fontWeight={"bold"}
                        align={["center", null, null]}
                      >
                        {x.link}
                      </Text>
                    </Box>
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
            <Stack
              direction={["column-reverse", null, "row"]}
              alignItems={"center"}
            >
              <SimpleGrid
                columns={[1, null, 3]}
                w={["80%", null, "50%"]}
                spacing={3}
              >
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
            </Stack>
          </Stack>
        </Stack>

        <Stack p={[4, null, 20]}>
          <Text align={"center"} mb={10} fontSize={30}>
            You'll Also Love
          </Text>
          <Flex gap={2} overflowX={"auto"} flexWrap="nowrap">
            <HStack pos={"relative"} overflowX={"auto"}>
              {youAlsoLove.map((x, i) => (
                <>
                  <Image w={"100%"} src={x.img} />
                  <Box
                    pos={"absolute"}
                    bottom={"80%"}
                    left={"60%"}
                    w={"60%"}
                    //   border={"1px"}
                    alignItems={"center"}
                  >
                    <Box align={"center"}>
                      <MdOutlineFavorite size={"20%"} />
                      {/* <Box w={20} h={1} bg={"white"} borderRadius={"md"} mt={1} /> */}
                    </Box>
                  </Box>
                </>
              ))}
            </HStack>
          </Flex>
        </Stack>

        <Box px={20} py={10}>
          <Box align={"center"} mb={10} fontSize={20}>
            <Text>Shop Our Instagram</Text>
            <Text>
              {"("}and join the fun with #injcrew{")"}
            </Text>
          </Box>
          <HStack spacing={10}>
            <Flex flexWrap={"nowrap"} overflowX={"auto"} gap={2}>
              {instagramProduct.map((x) => (
                <>
                  <Image src={x.img} />
                </>
              ))}
            </Flex>
          </HStack>
        </Box>

        <Heading align={"center"} mb={4}>
          More you need to see
        </Heading>

        <Stack
          // alignItems={"center"}
          justifyContent="center"
          w={"100%"}
          h={"100%"}
          mx={"3em"}
          overflow={["auto"]}
          // px={[4, null, 20]}
        >
          <Stack spacing={5} px={3} py={4}>
            <Flex flexDir={"column"} flexWrap={"nowrap"} overflow={"auto"}>
              <HStack>
                {moreYouNeed.map((cloth, i) => (
                  <>
                    {/* <Flex flexDir={"column"}> */}
                    <Image w={"100%"} src={cloth.img} />
                    {/* <Text py={2}>{cloth.name}</Text> */}
                    <Box w={"80%"} h={"1%"} bgColor={"black"} />
                    {/* </Flex> */}
                  </>
                ))}
              </HStack>
            </Flex>
          </Stack>
        </Stack>
      </Stack>
      {/* <AppFooter /> */}
    </Stack>
  );
};

export default HomePage;
