import {
  Box,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Center,
} from '@chakra-ui/react';
const AddProduct = () => {
  const image = (
    <Flex>
      <Image
        rounded={'md'}
        alt={'product image'}
        src={
          'http://3.bp.blogspot.com/-szAOfneT6vk/TnAaovjvvRI/AAAAAAAAACs/nbY-VmWk8pE/s1600/GachongDN.jpg'
        }
        align={'center'}
        w={'100%'}
        h="90%"
        width="100%"
        objectFit="contain"
      />
    </Flex>
  );
  const header = (
    <Box as={'header'}>
      <Heading
        color={'teal'}
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
      >
        Gạch ngói
      </Heading>
      <Text color="red.500" fontWeight={600} fontSize={'2xl'}>
        450.000VNĐ
      </Text>
    </Box>
  );
  const numberInput = (
    <NumberInput step={1} defaultValue={1} min={1} max={100} w="10rem">
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
  const numberOfProduct = (
    <Box>
      <Box>
        <Text as={'span'} fontWeight={'bold'}>
          Số Lượng
        </Text>
        {numberInput}
      </Box>
      <Button
        rounded={'none'}
        w={'full'}
        mt={8}
        size={'lg'}
        py={'7'}
        bg={'teal'}
        color={'white'}
        textTransform={'uppercase'}
        _hover={{
          transform: 'translateY(2px)',
          boxShadow: 'lg',
        }}
      >
        Thêm vào giỏ hàng
      </Button>
    </Box>
  );
  return (
    <>
      {image}
      <VStack spacing={{ base: 4, sm: 6 }} align="flex-start">
        {header} {numberOfProduct}
      </VStack>
    </>
  );
};

export default AddProduct;
