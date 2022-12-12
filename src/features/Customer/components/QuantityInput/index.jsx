import { useEffect } from 'react';

const {
  HStack,
  Button,
  Input,
  useNumberInput,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} = require('@chakra-ui/react');

const QuantityInput = props => {
  const { quantitybyColor } = props;

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: quantitybyColor,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <InputGroup size="md" maxW="150px" boxShadow="lg">
      <InputLeftElement fontWeight={'bold'} color="teal" {...dec}>
        -
      </InputLeftElement>
      <Input textAlign="center" {...input} />
      <InputRightElement fontWeight={'bold'} color="teal" {...inc}>
        +
      </InputRightElement>
    </InputGroup>
  );
};
export default QuantityInput;
