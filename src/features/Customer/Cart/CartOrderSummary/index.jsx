import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { formatPrice } from '../../components/PriceTag';
export const OrderSummaryItem = props => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color="gray.600">
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = props => {
  const { total, price } = props;
  return (
    <Stack
      spacing="8"
      borderWidth="1px"
      rounded="lg"
      padding="8"
      width="full"
      boxShadow="lg"
    >
      <Heading size="md" color="teal">
        Tóm tắt đơn hàng
      </Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Tổng cộng" value={formatPrice(total)} />
        <OrderSummaryItem
          label="Khuyến mãi"
          value={formatPrice(price - total)}
        ></OrderSummaryItem>

        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold" color="teal">
            Thành Tiền
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(price)}
          </Text>
        </Flex>
      </Stack>
      <Button colorScheme="teal" size="lg" fontSize="md">
        Thanh Toán
      </Button>
    </Stack>
  );
};
