import { Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import saleOffManager from 'constants/admin/saleOffManager';
// import SearchBar from 'components/SearchBar/SearchBar';
import TableData from 'components/TableData';

const SaleOffManager = () => {
  return (
    <Flex direction="column" p={3}>
      <Flex alignItems="center" justifyContent={'space-between'}>
        <Button colorScheme="teal">Add coupon</Button>
        {/* <SearchBar /> */}
      </Flex>
      {/* </Box> */}
      <TableData {...saleOffManager} canEdit={true} />
    </Flex>
  );
};

export default SaleOffManager;
