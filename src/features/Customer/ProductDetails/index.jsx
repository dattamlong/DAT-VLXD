import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  HStack,
  useRadio,
  useRadioGroup,
  useBreakpointValue,
  Center,
  useToast,
} from '@chakra-ui/react';
import { ProductDetail } from 'constants/customer/productDetail';
import { PriceTag } from 'features/Customer/components/PriceTag';
import QuantityInput from 'features/Customer/components/QuantityInput';
import { useState } from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { useParams } from 'react-router-dom';
export default function ProductDetails() {
  const { id } = useParams();
  const iD = { id }.id;
  const productDetail = ProductDetail[iD - 1];
  const details = productDetail.product_detail;
  const productIsSaleoff = productDetail.product_issaleoff;
  const [imageProduct, setImageProduct] = useState(details[0].image);
  const toast = useToast();
  const isSaleoff =
    productIsSaleoff !== 0 &&
    productIsSaleoff.length > 0 &&
    new Date(productIsSaleoff[0].saleoff_start).getTime() <
      new Date().getTime();

  function CustomRadio(props) {
    const { image, ...radioProps } = props;
    const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
      useRadio(radioProps);
    return (
      <chakra.label {...htmlProps} cursor="pointer">
        <input {...getInputProps({})} hidden />
        <Box
          {...getCheckboxProps()}
          bg={state.isChecked ? 'green.200' : 'transparent'}
          w={12}
          p={1}
          rounded="full"
        >
          <Image src={image} rounded="full" {...getLabelProps()} />
        </Box>
      </chakra.label>
    );
  }

  const handleOnChange = value => {
    setImageProduct(value.slice(value.indexOf(' ') + 1, value.length));
  };

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: '' + details[0].quantity + ' ' + details[0].image,
    onChange: handleOnChange,
  });

  function AttributeSelection({ details }) {
    return (
      <Stack {...getRootProps()}>
        <HStack>
          {details.map(detail => {
            return (
              <CustomRadio
                key={detail.image}
                image={detail.image}
                {...getRadioProps({
                  value: '' + detail.quantity + ' ' + detail.image,
                })}
              />
            );
          })}
        </HStack>
        <Stack>
          <Text fontWeight={'bold'}>Số lượng</Text>
          <QuantityInput
            quantitybyColor={value.substr(0, value.indexOf(' '))}
          />
          <Text color="grey">
            {value.substr(0, value.indexOf(' '))} sản phẩm có sẵn
          </Text>
        </Stack>
      </Stack>
    );
  }

  const img = (
    <Flex>
      <Image
        rounded={'md'}
        alt={'product image'}
        src={imageProduct}
        fit={'cover'}
        align={'center'}
        w={'100%'}
        h={{ base: '100%', sm: '400px', lg: '500px' }}
      />
    </Flex>
  );

  const header = (
    <Stack as={'header'}>
      <Box>
        <Heading
          color="teal"
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
        >
          {productDetail.product_name}
        </Heading>
        <Text fontSize="lg">{productDetail.product_description}</Text>
      </Box>
      <Box>
        <PriceTag
          priceProps={{
            fontSize: useBreakpointValue({ base: '1rem', lg: '1.8rem' }),
          }}
          salePriceProps={{
            fontSize: useBreakpointValue({ base: '1rem', lg: '1.8rem' }),
          }}
          price={productDetail.product_price}
          salePrice={
            isSaleoff
              ? productDetail.product_price *
                (1 - productIsSaleoff[0].saleoff_discount / 100)
              : ''
          }
          currency="VND"
        />
        {isSaleoff ? (
          <Center bg="tomato" color="white" px={4} h={8}>
            {productIsSaleoff[0].saleoff_description}
          </Center>
        ) : (
          ''
        )}
      </Box>
    </Stack>
  );

  const productParameter = (
    <Stack>
      <HStack>
        <Text fontWeight="bold">Kích cỡ:</Text>
        <Text color="grey">
          {productDetail.product_height}x{productDetail.product_length}
        </Text>
      </HStack>
      <HStack>
        <Text fontWeight="bold">Nhà cung cấp:</Text>
        <Text color="grey">{productDetail.product_supplier}</Text>
      </HStack>
      <HStack>
        <Text fontWeight="bold">Loại Vật liệu:</Text>
        <Text color="grey">
          {productDetail.product_category[0].productcat_name}
        </Text>
      </HStack>
      <HStack>
        <Text fontWeight="bold">Mô tả:</Text>
        <Text color="grey">
          {productDetail.product_category[0].productcat_description}
        </Text>
      </HStack>
    </Stack>
  );

  const handleAddToCart = () => {
    toast({
      position: 'top-right',
      title: 'Thông báo',
      description: 'Đã thêm vào giỏ hàng',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const addToCart = (
    <Button
      rounded={'none'}
      w={'full'}
      mt={8}
      size={'lg'}
      py={'7'}
      bg="teal"
      color="white"
      textTransform={'uppercase'}
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      }}
      onClick={() => handleAddToCart()}
    >
      Thêm Vào Giỏ Hàng
    </Button>
  );

  return (
    <Container maxW={'7xl'} bg="white" px="30px">
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        {img}
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={'column'}
          divider={<StackDivider borderColor="gray.300" />}
        >
          <Stack spacing={{ base: 6, md: 8 }}>
            {header}
            {productParameter}
          </Stack>

          <Stack spacing={{ base: 6, md: 8 }}>
            <Stack>
              <Text fontWeight={'bold'}>Màu Sắc</Text>
              <AttributeSelection details={details} />
            </Stack>
            {addToCart}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={'center'}
            >
              <MdLocalShipping color="teal" />
              <Text>Giao trong 4 - 6 ngày</Text>
            </Stack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
