import { CloseButton, Flex, Link, Select, Text } from '@chakra-ui/react';
import { PriceTag } from 'features/Customer/components/PriceTag';
import * as React from 'react';
import { CartProductMeta } from '../../components/ProductMeta';
const Quantity = value => {
  return <Text maxW="64px">x{value.value}</Text>;
};

export const CartItem = props => {
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
        <CloseButton
          aria-label={`Delete ${product_name} from cart`}
          onClick={onClickDelete}
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
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <Quantity value={product_quantity} />
        <PriceTag price={product_price} />
      </Flex>
    </Flex>
  );
};
