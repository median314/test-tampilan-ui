import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const BlogPostSingle = () => {
  return (
    <Box mt={75} align={"center"} p={5}>
      <HStack justifyContent={"center"} py={5} spacing={[4, null, 8]}>
        <Text>Nama Penulis</Text>
        <Text>29 Februari 2023</Text>
      </HStack>
      <Heading align={"center"} pb={5}>
        A Journey of Scent
      </Heading>

      <Image
        w={("100%", null, "100%")}
        src="https://chriselle.wpenginepowered.com/wp-content/uploads/2022/06/IMG_4523.jpg"
      />

      <Stack w={[null, null, 600]} py={10} spacing={8}>
        <Text align={"center"} fontSize={"xl"}>
          Smell is an unseen element of style.
        </Text>
        <Text align={"justify"}>
          Not only does it tie everything together, in fashion and in your home,
          but scent is also one of your strongest senses and is one of the
          easiest ways to recall memory! Finding luxe scents that transport me
          feels like it’s very own vacation. A moment of reprieve and relaxation
          at any time of the day, anywhere in the world.
        </Text>
        <Text align={"justify"}>
          Which is why I’m so excited to be teaming up with Dr. Vranjes Firenze
          to take you through a journey of scent. Dr. Vranjes Firenze is an
          incredible Italian brand with a rich history… and they know their
          scents! Each scent was created by Doctor Vranjes, a master perfumer.
          Even their diffuser bottles are handcrafted by Florentine artisans,
          the shape inspired by the octagonal base of Brunelleschi’s dome in
          Florence and acts as a homage to the Duomo!
        </Text>
        <Text align={"justify"}>
          I love diffusers, especially around my rambunctious girls, so I don’t
          have to worry about an open flame like with candles. (Don’t get me
          wrong, I love a good candle, too!) What I love especially about the Dr
          Vranjes Firenze diffusers is that they are created to ensure
          continuous diffusion of the scent into whatever space you’re in that
          are incredibly long lasting.
        </Text>
      </Stack>

      <HStack
        pos={[null, null, "relative"]}
        justifyContent={"center"}
        h={[null, null, 650]}
        right={["15%", null, "11%"]}
        py={10}
      >
        <Image
          //   boxSize={"md"}
          w={["xs", null, "sm"]}
          //   pos={"absolute"}
          //   bottom={["10%", null, null]}
          //   right={[0, null, null]}
          //   left={["50%", null, null]}
          src="https://chriselle.wpenginepowered.com/wp-content/uploads/2022/06/ChriselleLim_DrV0608-784x1045.jpg"
        />
        <Image
          w={["3xs", null, "sm"]}
          pos={"absolute"}
          bottom={["10%", null, "20%"]}
          right={[0, null, "15%"]}
          left={["50%", null, null]}
          display={["none", null, null]}
          src="https://chriselle.wpenginepowered.com/wp-content/uploads/2022/06/ChriselleLim_DrV0605-784x1045.jpg"
        />
      </HStack>

      <Stack w={[null, null, 600]} py={10} spacing={8}>
        <Text fontSize={"xl"}>PETALI DI ROSE – MY MOTHER’S ROSE GARDEN</Text>
        <Text align={"justify"}>
          Not only does it tie everything together, in fashion and in your home,
          but scent is also one of your strongest senses and is one of the
          easiest ways to recall memory! Finding luxe scents that transport me
          feels like it’s very own vacation. A moment of reprieve and relaxation
          at any time of the day, anywhere in the world.
        </Text>
        <Text align={"justify"}>
          Which is why I’m so excited to be teaming up with Dr. Vranjes Firenze
          to take you through a journey of scent. Dr. Vranjes Firenze is an
          incredible Italian brand with a rich history… and they know their
          scents! Each scent was created by Doctor Vranjes, a master perfumer.
          Even their diffuser bottles are handcrafted by Florentine artisans,
          the shape inspired by the octagonal base of Brunelleschi’s dome in
          Florence and acts as a homage to the Duomo!
        </Text>
        <Text align={"justify"}>
          I love diffusers, especially around my rambunctious girls, so I don’t
          have to worry about an open flame like with candles. (Don’t get me
          wrong, I love a good candle, too!) What I love especially about the Dr
          Vranjes Firenze diffusers is that they are created to ensure
          continuous diffusion of the scent into whatever space you’re in that
          are incredibly long lasting.
        </Text>
      </Stack>
      <Box>
        <Image src="https://chriselle.wpenginepowered.com/wp-content/uploads/2021/06/Photo-May-27-1-46-47-AM-2-784x1045.jpg" />
      </Box>

      <Divider mt={10} />

      <HStack justifyContent={"center"} py={5}>
        <Text>Shop Bag</Text>
        <Divider orientation="vertical" h={5} colorScheme={"blackAlpha"} />
        <Text>Shop Tops</Text>
        <Divider orientation="vertical" h={5} colorScheme={"blackAlpha"} />
        <Text>Shop Pants</Text>
      </HStack>

      <Divider />

      <Stack>
        <Heading pt={5}>More Post</Heading>
        <Flex flexDir={["column", null, "row"]} p={10} justify={"center"}>
          <Box p={3}>
            <Image src="https://chriselle.wpenginepowered.com/wp-content/uploads/2022/11/Photo-Nov-19-7-03-45-PM-395x263.jpg" />
            <Box align={"center"} p={"2"}>
              <Heading size={"md"}>Expensive look & a budget</Heading>
              <Text fontSize={14} p={2}>
                Nama Penulis
              </Text>
              <Text w={[null, null, 350]} fontSize={14}>
                Ut ea eiusmod cupidatat excepteur exercitation nisi anim. Sunt
                ad dolor elit ea Lorem est quis. Sunt ad dolor elit ea Lorem
                est.
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
              <Text w={[null, null, 350]} fontSize={14}>
                Ut ea eiusmod cupidatat excepteur exercitation nisi anim. Sunt
                ad dolor elit ea Lorem est quis. Sunt ad dolor elit ea Lorem
                est.
              </Text>
            </Box>
          </Box>
          <Box p={3} align={"center"}>
            <Image src="https://chriselle.wpenginepowered.com/wp-content/uploads/2021/06/ChriselleLim_setlist0011-318x398.jpg" />
            <Box align={"center"} p={"2"}>
              <Heading size={"md"}>
                Wardrobe Items That See The Least Use.
              </Heading>
              <Text fontSize={14} p={2}>
                Nama Penulis
              </Text>
              <Text w={[null, null, 350]} fontSize={14}>
                Ut ea eiusmod cupidatat excepteur exercitation nisi anim. Sunt
                ad dolor elit ea Lorem est quis. Sunt ad dolor elit ea Lorem
                est.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};

export default BlogPostSingle;
