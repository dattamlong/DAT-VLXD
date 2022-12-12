import { Button, Flex } from '@chakra-ui/react';
import TableData from 'components/TableData';
import userManager from 'constants/admin/userManager';
function UserManager() {
  // console.log('>>>User manager: ', admin);
  return (
    <Flex direction="column" alignItems="flex-end">
      {/* <Box alignItems="flex-end"> */}
      <Button m={3} colorScheme="teal">
        Add User
      </Button>
      {/* </Box> */}
      <TableData {...userManager} canEdit={true} />
    </Flex>
  );
}

export default UserManager;
