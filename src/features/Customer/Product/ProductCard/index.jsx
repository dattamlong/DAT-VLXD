import {
  AspectRatio,
  Box,
  Button,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { Sale } from '../../components/Sale';
import { PriceTag } from '../../components/PriceTag';

const ProductCard = props => {
  const { product } = props;
  const {
    product_id,
    product_detail,
    product_name,
    product_price,
    product_issaleoff,
  } = product;

  const isSale =
    product_issaleoff !== 0 &&
    product_issaleoff.length !== 0 &&
    new Date(product_issaleoff[0].saleoff_start).getTime() <
      new Date().getTime();

  const cardHeader = (
    <Box
      position="relative"
      boxShadow="0 0.0625rem 0.125rem 0 rgb(0 0 0 / 10%)"
    >
      <AspectRatio ratio={1}>
        <Image
          objectFit="contain"
          src={product_detail[0].image}
          alt={product_name}
          draggable="false"
          fallback={<Skeleton />}
          borderTopLeftRadius={useBreakpointValue({
            base: 'md',
            md: 'xl',
          })}
          borderTopRightRadius={useBreakpointValue({
            base: 'md',
            md: 'xl',
          })}
        />
      </AspectRatio>
      {product_issaleoff !== 0 &&
      product_issaleoff.length !== 0 &&
      new Date(product_issaleoff[0].saleoff_start).getTime() <
        new Date().getTime() ? (
        <Sale
          position="absolute"
          top="4"
          right="4"
          percent={product_issaleoff[0].saleoff_discount}
        />
      ) : (
        ''
      )}
    </Box>
  );

  const cardPrice = (
    <Stack spacing="1">
      <Text
        fontSize={useBreakpointValue({ base: '0.9125rem', lg: '1rem' })}
        fontWeight="medium"
        color="gray.700"
      >
        {product_name}
      </Text>
      <PriceTag
        priceProps={{
          fontSize: useBreakpointValue({ base: '0.9rem', lg: '1rem' }),
        }}
        salePriceProps={{
          fontSize: useBreakpointValue({ base: '0.9rem', lg: '1rem' }),
        }}
        price={product_price}
        salePrice={
          isSale
            ? product_price * (1 - product_issaleoff[0].saleoff_discount / 100)
            : ''
        }
        currency="VND"
      />
    </Stack>
  );

  // const cardFooter = (
  //   <Stack align="center" mt={3}>
  //     <Button
  //       fontSize={useBreakpointValue({ base: '0.9125rem', lg: '`rem' })}
  //       colorScheme="blue"
  //       width="full"
  //     >
  //       Thêm Vào Giỏ Hàng
  //     </Button>
  //     <Link textDecoration="underline" fontWeight="medium" color="gray.600">
  //       Chi tiết sản phẩm
  //     </Link>
  //   </Stack>
  // );

  return (
    <RouterLink to={`/product/${product_id}`}>
      <Stack
        overflow="hidden"
        border="1px solid transparent"
        borderRadius=".125rem"
        boxShadow="0 0.0625rem 0.125rem 0 rgb(0 0 0 / 10%)"
        transition="all ease-in .15s"
        _hover={{
          border: '1px solid',
          borderColor: 'teal',
          transform: 'translateY(-3px)',
          boxShadow: 'lg',
          // boxShadow: 'lg',
        }}
      >
        {cardHeader}

        <Box p={3}>
          {cardPrice}
          {/* {cardFooter} */}
        </Box>
      </Stack>
    </RouterLink>
  );
};
export default ProductCard;
