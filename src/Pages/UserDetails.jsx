import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const UserDetails = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useState(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <Stack mt={75}>
      <Box py={5}>
        <Text align={"center"} fontSize={14}>
          Have a question? We can help
        </Text>
        <Divider mt={8} />
      </Box>

      <Flex px={10} flexDir={["column", null, "row"]} gap={[5, null, null]}>
        {isMobile ? (
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              borderRadius={0}
              bg={"white"}
              border={"1px"}
            >
              My Account
            </MenuButton>
            <MenuList w={"xs"} fontWeight={"semibold"}>
              <MenuItem>My Favorites</MenuItem>
              <MenuItem>Order History</MenuItem>
              <MenuItem>Account Details</MenuItem>
              <MenuItem>Communication Preferences</MenuItem>
              <MenuItem>Sign Out</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Stack spacing={5} w={["100%", null, "20%"]}>
            <Stack spacing={1}>
              <Heading size={"md"}>My Shopping</Heading>
              <Text>My Favorites</Text>
              <Text>Order History</Text>
            </Stack>
            <Stack>
              <Heading size={"md"}>My Account</Heading>
              <Text>Account Details</Text>
              <Text>Saved Addresses</Text>
              <Text>Communication Preferences</Text>
              <Text>Sign Out</Text>
            </Stack>
          </Stack>
        )}

        <Stack w={["100%", null, "30%"]}>
          <Stack spacing={5}>
            <Box>
              <Heading size={"lg"} mb={2}>
                ACCOUNT DETAILS
              </Heading>
              <Box>
                <Text mb={2}>Full Name</Text>
                <Input borderRadius={0} placeholder="Full Name" />
              </Box>
              <Box my={4}>
                <Text mb={2}>Email Address</Text>
                <Input borderRadius={0} type={"email"} placeholder="Email" />
              </Box>
              <Text mb={2}>Birthday</Text>
              <HStack>
                <Box>
                  <Select borderRadius={0} placeholder="Select Month">
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </Select>
                </Box>
                <Box>
                  <Select borderRadius={0} placeholder="Select Day">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </Select>
                </Box>
              </HStack>
              <Box mt={4}>
                <Text mb={2}>Country</Text>
                <Select borderRadius={0} placeholder="Country">
                  <option>Indonesia</option>
                  <option>Malaysia</option>
                  <option>Singapore</option>
                  <option>United State</option>
                </Select>
              </Box>
            </Box>

            <Box mt={5}>
              <Heading size={"sm"}>Password</Heading>
              <Text color={"gray.500"} fontSize={"sm"} my={3}>
                Update your account password here. If you have been issued a
                temporary password, please change it here.
              </Text>
              <Stack spacing={5}>
                <Input borderRadius={0} placeholder="Current Password*" />
                <Input borderRadius={0} placeholder="New Password*" />
                <Input borderRadius={0} placeholder="Reenter New Password*" />
              </Stack>
              <Button
                bg={"black"}
                color={"white"}
                borderRadius={0}
                w={["full", null, "20%"]}
                my={5}
              >
                SAVE
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default UserDetails;
