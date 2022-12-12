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
import { CartItem } from './CartItem';
import { CartOrderSummary } from './CartOrderSummary';
import { cart } from 'constants/customer/cart';

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
      py={{
        base: '6',
        md: '8',
        lg: '12',
      }}
      borderRadius="5px"
      bg="white"
    >
      {children}
    </Container>
  );
};

const Cart = () => {
  const productCart = cart[0]?.cart_details || [];

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
          <Heading fontSize="2xl" fontWeight="extrabold" color="teal">
            Giỏ hàng ({productCart.length} sản phẩm)
          </Heading>

          <Stack spacing="6">
            {productCart.map(item => {
              return <CartItem key={item.product_id} {...item} />;
            })}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary
            total={cart[0].cart_total}
            price={cart[0].cart_price}
          />
          <HStack mt="6" fontWeight="semibold">
            <p>hoặc</p>
            <RouterLink to="/" color="teal">
              Tiếp tục mua hàng
            </RouterLink>
          </HStack>
        </Flex>
      </Stack>
    </Wrapper>
  );
};

export default Cart;
