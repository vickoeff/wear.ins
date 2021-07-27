import { Container, Flex, Box, Heading, Text, Img } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

export default function Banner() {
  const { colorMode } = useColorMode();

  return (
    <Container maxW="container.xl">
      <Flex
        minH="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
      >
        <Box
          flex={1}
          order={{ base: '2', sm: '2', md: '1' }}
          maxH={{ base: '40vw', sm: '40vw', md: '100%' }}
          textAlign={{ base: 'center', sm: 'center', md: 'start' }}
        >
          <Heading fontSize="6xl" ml="-3px" textTransform="none">
            Wear.Ins
          </Heading>
          <Text>Wearing clothes with awesome inspiration</Text>
        </Box>
        <Box
          flex={1}
          order={{ base: '1', sm: '1', md: '2' }}
          maxH={{ base: '52vw', sm: '52vw', md: '100%' }}
        >
          <Img
            src={
              colorMode === 'dark'
                ? process.env.PUBLIC_URL + '/logo-dark.png'
                : process.env.PUBLIC_URL + '/logo-light.png'
            }
            maxW={{ base: '50%', sm: '50%', md: '100%' }}
            w="360px"
            mr="auto"
            ml="auto"
          />
        </Box>
      </Flex>
    </Container>
  );
}
