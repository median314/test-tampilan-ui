import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const BlogPost = () => {
  return (
    <Stack mt={65} pb={5}>
      <Stack pos={"relative"}>
        <Image
          src="https://chriselle.wpenginepowered.com/wp-content/uploads/2021/12/591A3602-copy-1350x865.jpg"
          objectFit="cover"
        />
        <Box
          pos={"absolute"}
          align={"center"}
          bottom={["20%", null, "50%"]}
          right={["15%", null, "28%"]}
          color={"white"}
          textTransform={"capitalize"}
        >
          <Heading size={["md", null, "2xl"]}>
            Finding your personal style
          </Heading>
          <Heading size={["md", null, "2xl"]}>Everyone Will Love</Heading>
          <Box
            w={[100, null, 400]}
            h={1.5}
            borderRadius={"lg"}
            bg={"white"}
            mt={4}
          />
          <Box
            border={"1px"}
            w={[150]}
            mt={4}
            p={3}
            cursor={"pointer"}
            _hover={{ bg: "white", transition: "0.5s", color: "black" }}
          >
            GO TO ARTICLES
          </Box>
        </Box>
      </Stack>
      <Flex flexDir={["column", null, "row"]} p={10} justify={"center"}>
        <Box p={3}>
          <Image src="https://chriselle.wpenginepowered.com/wp-content/uploads/2022/11/Photo-Nov-19-7-03-45-PM-395x263.jpg" />
          <Box align={"center"} p={"2"}>
            <Heading size={"md"}>Expensive look & a budget</Heading>
            <Text fontSize={14} p={2}>
              Nama Penulis
            </Text>
          </Box>
        </Box>
        <Box p={3}>
          <Image src="https://chriselle.wpenginepowered.com/wp-content/uploads/2022/11/Photo-Nov-19-7-03-45-PM-395x263.jpg" />
          <Box align={"center"} p={"2"}>
            <Heading size={"md"}>A Journey of Scent</Heading>
            <Text fontSize={14} p={2}>
              Nama Penulis
            </Text>
          </Box>
        </Box>
        <Box p={3} align={"center"}>
          <Image src="https://chriselle.wpenginepowered.com/wp-content/uploads/2021/06/ChriselleLim_setlist0011-318x398.jpg" />
          <Box align={"center"} p={"2"}>
            <Heading size={"md"}>
              Wardrobe items that see the least use.
            </Heading>
            <Text fontSize={14} p={2}>
              Nama Penulis
            </Text>
          </Box>
        </Box>
      </Flex>
      <Stack bg={"#f8f4ef"} py={10} px={10}>
        <Heading align={"center"} size={"lg"} py={2}>
          Collection Posts
        </Heading>
        <Flex
          flexDir={["column", null, "row"]}
          justifyContent={["center"]}
          gap={10}
        >
          <Box align={"center"}>
            <Image src="https://chriselle.wpenginepowered.com/wp-content/uploads/2022/05/CHARLES-KEITH-summer-21-Chriselle-Lim-chrisellelim-02-copy-819x524.jpeg" />
            <Heading size={"md"} align={"center"} py={4}>
              Bag Collection
            </Heading>
            <Text w={[null, null, 400]} fontSize={14}>
              Ut ea eiusmod cupidatat excepteur exercitation nisi anim. Sunt ad
              dolor elit ea Lorem est quis. Sunt ad dolor elit ea Lorem est.
            </Text>
          </Box>
          <Box align={"center"}>
            <Image
              boxSize={300}
              src="https://www.grasiemercedes.com/wp-content/uploads/2019/11/ATP-111819-GRASIE-8-560x560.jpg"
            />
            <Heading size={"md"} align={"center"} py={4}>
              Top Collection
            </Heading>
            <Text w={[null, null, 400]} fontSize={14}>
              Ut ea eiusmod cupidatat excepteur exercitation nisi anim. Sunt ad
              dolor elit ea Lorem est quis.
            </Text>
          </Box>
        </Flex>
      </Stack>

      <Flex
        flexDir={["column", null, "row"]}
        justifyContent={"center"}
        py={10}
        px={5}
      >
        <Image src="https://thechrisellefactor.com/wp-content/uploads/2020/01/IMG_4189-564x385.jpg" />
        <Stack align={"center"}>
          <Heading
            size={["md", null, "lg"]}
            w={[null, null, 400]}
            py={3}
            align={"center"}
          >
            My Winter Capsule Wardrobe - Top 10 Pieces
          </Heading>
          <Text w={[null, null, 450]} align={"center"}>
            If you remember this post from December, I did a massive closet
            clean-out recently and when I say massive, I mean I cleared out
            around...
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default BlogPost;
