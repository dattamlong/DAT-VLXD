import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  Link,
  Select,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { formatPrice, PriceTag } from 'features/Customer/components/PriceTag';
import * as React from 'react';
import { CartProductMeta } from '../ProductMeta';
const Quantity = value => {
  return <Text maxW="64px">x{value.value}</Text>;
};

export const OderHistoryItem = props => {
  const {
    product_name,
    product_description,
    product_quantity,
    product_image,
    product_price,
    product_issaleoff,
    onClickDelete,
  } = props;
  const isSale =
    product_issaleoff !== 0 &&
    product_issaleoff.length > 0 &&
    new Date(product_issaleoff[0].saleoff_start).getTime() <
      new Date().getTime();
  return (
    <Stack
      spacing={{ base: 4, sm: 6 }}
      direction={'column'}
      divider={<StackDivider borderColor="gray.300" />}
      bg="white"
      p="40px"
      boxShadow="lg"
    >
      <Flex
        direction={{
          base: 'column',
          md: 'row',
        }}
        justify="space-between"
        align="center"
      >
        <CartProductMeta
          name={product_name}
          description={product_description}
          image={product_image}
        />

        {/* Desktop */}
        <Flex
          width="full"
          justify="space-between"
          display={{
            base: 'none',
            md: 'flex',
          }}
        >
          <Quantity value={product_quantity} />
          <PriceTag
            price={product_price}
            salePrice={
              isSale
                ? product_price *
                  (1 - product_issaleoff[0].saleoff_discount / 100)
                : ''
            }
          />
        </Flex>

        {/* Mobile */}
        <Flex
          mt="4"
          align="center"
          width="full"
          justify="space-between"
          display={{
            base: 'flex',
            md: 'none',
          }}
        >
          <Quantity value={product_quantity} />
          <PriceTag price={product_price} />
        </Flex>
      </Flex>
      <Flex justify="space-between">
        <Text color="grey.100">Ngày mua: 16/11/2022</Text>
        <Stack>
          <HStack justify="right">
            <Text fontSize="xl" fontWeight="semibo  ld" color="teal" mr="15px">
              Tổng số tiền:
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {formatPrice(
                isSale
                  ? (1 - product_issaleoff[0].saleoff_discount / 100) *
                      product_price *
                      product_quantity
                  : product_price * product_quantity
              )}
            </Text>
          </HStack>
          <Flex justify="right">
            <Button
              rounded={'5px'}
              size={'lg'}
              py={'7'}
              minW="300px"
              bg="teal"
              color="white"
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              Xem sản phẩm
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
};
