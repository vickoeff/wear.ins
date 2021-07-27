import {
  Box,
  Stack,
  Container,
  Heading,
  Img,
  Text,
  IconButton,
  Button,
  useStyleConfig,
  useColorMode,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Card } from '../components/atoms';

export default function Footer() {
  const styles = useStyleConfig('Footer');
  const direction = useBreakpointValue({ base: 'column', md: 'row' });

  const { colorMode } = useColorMode();

  const waButton = () => {
    window.open('https://wa.me/082134601303', '_blank');
  };
  const igButton = () => {
    window.open('https://www.instagram.com/wear.ins_ofc/', '_blank');
  };

  return (
    <Box __css={styles}>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="#00000061"
        zIndex="1"
      ></Box>

      {/* start blured box footer */}
      <Card variant="blured-box-footer"></Card>
      {/* end blured box footer */}

      <Box
        position="relative"
        bg={colorMode === 'dark' ? '#111' : '#fff'}
        zIndex="2"
        pt="1rem"
        pb="2rem"
      >
        <Container maxW="container.xl" pt="2rem">
          <Img
            src={
              colorMode === 'dark'
                ? process.env.PUBLIC_URL + '/logo-transparent-border.png'
                : process.env.PUBLIC_URL + '/logo-dark.png'
            }
            position="absolute"
            top={{ base: '-38vw', sm: '-45%', md: '-64%' }}
            maxW={{ base: '50%', sm: '50%', md: '100%' }}
            w={{ base: '80px', sm: '160px', md: '160px' }}
            mr="auto"
          />
          <Heading fontSize="6xl" textTransform="none">
            Wear.Ins
          </Heading>
          <Stack direction={direction}>
            <Box flex={2} mt={2}>
              <Text fontSize="md" textTransform="capitalize">
                Pahlawan street Gg. Kidam no. 162,
                <br />
                Postal Code 67214,
                <br />
                Probolinggo City, Indonesia
              </Text>
            </Box>
            <Box flex={1} mt={2}>
              <Heading fontSize="2xl" textTransform="none">
                Contact Us
              </Heading>
              <Text fontSize="md" mt={2}>
                <IconButton
                  mr={4}
                  aria-label="contact WA"
                  icon={<FaWhatsapp />}
                  onClick={waButton}
                />
                0821-3460-1303
              </Text>
              <Text fontSize="md" mt={1} textTransform="lowercase">
                <IconButton
                  mr={4}
                  aria-label="contact WA"
                  icon={<FaInstagram />}
                  onClick={igButton}
                />
                @wear.ins
              </Text>
            </Box>
            <Box flex={1} mt={2} textAlign={{ base: 'start', md: 'end' }}>
              <Text fontSize="md" mt={1} textTransform="lowercase">
                <Button
                  height="fit-content"
                  p={{ base: '0.5rem ', md: '1rem 2rem' }}
                  mr={4}
                  _focus={{ outline: 'none' }}
                >
                  <Img
                    src={process.env.PUBLIC_URL + '/shopee-logo.png'}
                    width={{ base: '24px', md: '64px' }}
                  />
                </Button>
                {direction === 'column' ? '@wear.ins' : ''}
              </Text>
            </Box>
          </Stack>
          <Stack direction="row" mt={5}>
            <Text fontSize="sm">© Copyright ⋅ Some right reserved</Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
