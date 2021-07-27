import React from 'react';
import {
  useColorMode,
  Container,
  Flex,
  Box,
  Button,
  Text,
  useStyleConfig,
} from '@chakra-ui/react';
import { Line } from './atoms';
import { BiSun, BiMoon } from 'react-icons/bi';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const styles = useStyleConfig('Navbar');

  return (
    <>
      <Box __css={styles}>
        <Container maxW="container.xl">
          <Flex justifyContent={{ base: 'center', md: 'start' }}>
            <Button
              variant="navbar-button"
              _focus={{ outline: 'none' }}
              onClick={toggleColorMode}
            >
              {colorMode === 'dark' ? <BiSun /> : <BiMoon />}
            </Button>
            {/* {navbar.map((item, index) => {
              return (
                <Button variant="navbar-button" key={index}>
                  {item.label}
                </Button>
              );
            })} */}
          </Flex>
        </Container>
      </Box>

      {/* ---- Side section indicator section ---- */}
      <Box
        display={{ base: 'none', sm: 'flex' }}
        flexDirection="column"
        position="fixed"
        alignItems="center"
        justifyContent="center"
        top="0"
        bottom="0"
        left="2%"
        mt="auto"
        mb="auto"
        zIndex="1024"
      >
        <Line mb="2rem" />
        <Text
          transform="rotate(90deg)"
          color={colorMode === 'dark' ? '#2DEA4B' : 'orange'}
        >
          Wear.Ins
        </Text>
        <Line mt="2rem" />
      </Box>
    </>
  );
}
