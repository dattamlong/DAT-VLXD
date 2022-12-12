import { Text } from '@chakra-ui/react';
import * as React from 'react';

export const Sale = ({ percent }) => {
  return (
    <Text
      position="absolute"
      size="10px"
      top={2}
      right={2}
      bg="red.500"
      p="4px"
      rounded={3}
      color={'white'}
    >
      -{percent}%
    </Text>
  );
};
