import { SimpleGrid } from '@chakra-ui/react';
import { ProductDetail } from 'constants/customer/productDetail';
import { Children, isValidElement, useMemo } from 'react';
import ProductCard from '../ProductCard';

const Wrapper = ({ children }) => {
  const columns = useMemo(() => {
    const count = Children.toArray(children).filter(isValidElement).length;
    return {
      base: Math.min(2, count),
      md: Math.min(3, count),
      xl: Math.min(4, count),
    };
  }, [children]);
  return (
    <SimpleGrid
      columns={columns}
      columnGap={{
        base: '4',
        md: '6',
      }}
      rowGap={{
        base: '5',
        md: '7',
      }}
    >
      {children}
    </SimpleGrid>
  );
};

const ProductList = () => (
  <Wrapper>
    {ProductDetail.map(product => (
      <ProductCard key={product.product_id} product={product} />
    ))}
  </Wrapper>
);

export default ProductList;
