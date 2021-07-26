import { Box, useStyleConfig } from '@chakra-ui/react';

export function Line(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig('Line', { variant });

  return <Box __css={styles} {...rest} />;
}
