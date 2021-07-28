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
  const { name, spesifications, ...rest } = props;

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
            <Td>Name/Code</Td>
            <Td textTransform="capitalize">
              <strong>{name}</strong>
            </Td>
          </Tr>
          <Tr>
            <Td>Material</Td>
            <Td textTransform="capitalize">
              <strong>{spesifications.material}</strong>
            </Td>
          </Tr>
          <Tr>
            <Td>Color</Td>
            <Td textTransform="capitalize">
              <strong>{spesifications.color}</strong>
            </Td>
          </Tr>
          <Tr>
            <Td>Size</Td>
            <Td>
              <strong>{spesifications.size}</strong>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}
