import {
  Box,
  Flex,
  Container,
  useBreakpointValue,
  Text,
  Divider,
} from '@chakra-ui/react';
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductList from './ProductList';

const Title = ({ query }) => {
  return (
    <>
      <Flex flexWrap={'wrap'}>
        <Text display="inline-block">Kết quả tìm kiếm cho từ khoá: </Text>
        <Text display="inline-block" wordBreak="break-word" color="teal.400">
          {query}
        </Text>
      </Flex>
      <Divider my={3} orientation="horizontal" />
    </>
  );
};

const Wrapper = ({ children }) => {
  return (
    <Box p={4}>
      <Container
        borderRadius="5px"
        bgColor={'white'}
        maxW={useBreakpointValue({
          md: 'container.sm',
          xl: 'container.lg',
        })}
        p={4}
      >
        {children}
      </Container>
    </Box>
  );
};

const Product = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const query = searchParams.get('q');
    setQuery(query);
  }, [searchParams]);

  const getProduct = useMemo(async () => {
    if (query) console.log('GET ITEM');
    else console.log('ok');
  }, [query]);

  return (
    <Wrapper>
      {query && <Title query={query} />}
      <ProductList />
    </Wrapper>
  );
};

export default Product;
