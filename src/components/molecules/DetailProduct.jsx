import {
  Box,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  TableCaption,
} from '@chakra-ui/react';

export default function DetailProduct(props) {
  const { tShirt, ...rest } = props;

  return (
    <Box {...rest}>
      <Table>
        <TableCaption color="orange">
          Let us know about <strong>size</strong> and <strong>color</strong> you
          want!
        </TableCaption>
        <Thead>
          <Tr>
            <Th fontSize="md">Spesification</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Material</Td>
            <Td>
              <strong>Cotton Combad 30s</strong>
            </Td>
          </Tr>
          <Tr>
            <Td>Color</Td>
            <Td>
              <strong>Black, White</strong>
            </Td>
          </Tr>
          <Tr>
            <Td>Size</Td>
            <Td>
              <strong>S, M, L, XL, XXL</strong>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}
