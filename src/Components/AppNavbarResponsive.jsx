import React, { useState } from 'react';
import { Box, Flex, Spacer, Button, IconButton, useDisclosure, VStack, HStack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const AppNavbarResponsive = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useState(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  }, []);

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" bg="teal.500" color="white" py={6} px={10}>
      <Box as="a" href="#" fontWeight="bold" fontSize="xl">
        My Site
      </Box>

      <Spacer />

      {isMobile ? (
        <>
          <IconButton icon={<HamburgerIcon />} aria-label="Open menu" size="md" mr={2} onClick={onOpen} />
          <VStack spacing={4} align="stretch">
            <Box py={2} borderBottom="1px" borderColor="gray.200">
              <Button w="100%" variant="ghost" onClick={onClose}>
                Close
              </Button>
            </Box>
            <Box py={2}>
              <Button w="100%" variant="ghost" onClick={() => console.log('Clicked Link 1')}>
                Link 1
              </Button>
            </Box>
            <Box py={2}>
              <Button w="100%" variant="ghost" onClick={() => console.log('Clicked Link 2')}>
                Link 2
              </Button>
            </Box>
            <Box py={2}>
              <Button w="100%" variant="ghost" onClick={() => console.log('Clicked Link 3')}>
                Link 3
              </Button>
            </Box>
          </VStack>
        </>
      ) : (
        <HStack spacing={4} align="stretch">
          <Box as="a" href="#" py={2}>
            Link 1
          </Box>
          <Box as="a" href="#" py={2}>
            Link 2
          </Box>
          <Box as="a" href="#" py={2}>
            Link 3
          </Box>
        </HStack>
      )}
    </Flex>
  );
};

export default AppNavbarResponsive;
