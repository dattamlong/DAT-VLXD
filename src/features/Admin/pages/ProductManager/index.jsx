import { admin } from '../../../../constants';
import { Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import productManager from 'constants/admin/productManager';
// import SearchBar from 'components/SearchBar/SearchBar';
import TableData from 'components/TableData';

const ProductManager = () => {
  return (
    <Flex direction="column" p={3}>
      <Flex alignItems="center" justifyContent={'space-between'}>
        <Button colorScheme="teal">Add Product</Button>
        {/* <SearchBar /> */}
      </Flex>
      {/* </Box> */}
      <TableData {...productManager} canEdit={true} />
    </Flex>
  );
};

export default ProductManager;
