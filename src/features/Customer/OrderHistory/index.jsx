import { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useBreakpointValue,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import * as React from 'react';
import { CartItem } from '../Cart/CartItem';

import { ProductDetail } from 'constants/customer/productDetail';
import { useMemo } from 'react';
import { OderHistoryItem } from '../components/OderHistoryItem';

const Wrapper = ({ children }) => {
  return (
    <Container
      maxW={{
        base: '3xl',
        lg: '7xl',
      }}
      mx="auto"
      px={{
        base: '4',
        md: '8',
        lg: '12',
      }}
      borderRadius="5px"
    >
      {children}
    </Container>
  );
};

const OrderHistory = () => {
  const productCart = ProductDetail;
  const total = useMemo(() => {
    const result = productCart.reduce((total, price) => {
      return (total += price.product_price);
    }, 0);
    return result;
  }, [productCart]);

  const promotion = useMemo(() => {
    const result = productCart.reduce((promotion, sale) => {
      const productIsSaleoff = sale.product_issaleoff;
      const isSale =
        productIsSaleoff !== 0 &&
        productIsSaleoff.length !== 0 &&
        new Date(productIsSaleoff[0].saleoff_start).getTime() <
          new Date().getTime();
      const discount = isSale
        ? sale.product_price * (productIsSaleoff[0].saleoff_discount / 100)
        : 0;

      return (promotion += discount);
    }, 0);
    return result;
  }, [productCart]);

  return (
    <Wrapper>
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        align={{
          lg: 'flex-start',
        }}
        spacing={{
          base: '8',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            md: '10',
          }}
          flex="2"
        >
          <Stack spacing="3">
            {productCart.map(item => {
              return <OderHistoryItem key={item.product_id} {...item} />;
            })}
          </Stack>
        </Stack>
      </Stack>
    </Wrapper>
  );
};

export default OrderHistory;
