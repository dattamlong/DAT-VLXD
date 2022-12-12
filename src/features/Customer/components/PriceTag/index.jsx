import { HStack, Text, useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react';
export function formatPrice(value, opts = {}) {
  const { locale = 'it-IT', currency = 'VND' } = opts;
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
}

export const PriceTag = props => {
  const {
    price,
    currency,
    salePrice,
    rootProps,
    priceProps,
    salePriceProps,
    fontSize,
  } = props;
  return (
    <HStack spacing="1" {...rootProps}>
      <Price fontSize={fontSize} isOnSale={!!salePrice} textProps={priceProps}>
        {formatPrice(price, {
          currency,
        })}
      </Price>
      {salePrice && (
        <SalePrice {...salePriceProps}>
          {formatPrice(salePrice, {
            currency,
          })}
        </SalePrice>
      )}
    </HStack>
  );
};
const Price = props => {
  const { isOnSale, children, textProps, fontSize } = props;
  const defaultColor = 'gray.700';
  const onSaleColor = 'gray.400';
  const color = isOnSale ? onSaleColor : defaultColor;

  return (
    <Text
      as="span"
      fontWeight="medium"
      color={color}
      fontSize={fontSize}
      textDecoration={isOnSale ? 'line-through' : 'none'}
      {...textProps}
    >
      {children}
    </Text>
  );
};
const SalePrice = props => (
  <Text
    as="span"
    fontWeight="semibold"
    color={mode('gray.800', 'gray.100')}
    {...props}
  />
);
