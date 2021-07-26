import {
  Box,
  Stack,
  Container,
  Heading,
  Img,
  Text,
  IconButton,
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
        pb="4rem"
      >
        <Container maxW="container.xl" pt="2rem">
          <Img
            src={process.env.PUBLIC_URL + '/logo-transparent.png'}
            position="absolute"
            top="-64%"
            maxW={{ base: '50%', sm: '50%', md: '100%' }}
            w="160px"
            mr="auto"
          />
          <Heading fontSize="6xl" textTransform="none">
            Wear.Ins
          </Heading>
          <Stack direction={direction}>
            <Box flex={1} mt={2}>
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
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
