import {
  Stack,
  Flex,
  Box,
  Img,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import DetailProduct from './DetailProduct';

export default function ProductItem(props) {
  const {
    name,
    spesifications,
    tShirt,
    price,
    discountedPrice,
    isDiscount,
    ...rest
  } = props;
  const direction = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Box {...rest}>
      <Img src={tShirt} alt="t-shirt" />
      <Stack direction={direction}>
        <DetailProduct name={name} spesifications={spesifications} flex={1} />
        <Flex flex={1} justifyContent="center" alignItems="center">
          {!isDiscount ? (
            <Heading variant="price-tag">{price}</Heading>
          ) : (
            <Stack direction="column">
              <Heading variant="discount-price-tag">{price}</Heading>
              <Heading variant="price-tag">{discountedPrice}</Heading>
            </Stack>
          )}
        </Flex>
      </Stack>
    </Box>
  );
}
