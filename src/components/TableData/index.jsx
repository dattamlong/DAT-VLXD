import { Table, TableContainer } from '@chakra-ui/react';
import TableHeader from './TableHeader';
import TableList from './TableList';

const TableData = props => {
  const { headerKeyList, headerNameList, bodyList, canEdit } = props;

  // console.log('>>>TableData: ', props);
  return (
    <TableContainer
      width="full"
      border="1px"
      borderColor="teal"
      borderRadius="10px"
      mt={3}
    >
      <Table variant="striped" colorScheme="teal">
        <TableHeader
          data={headerNameList}
          keyMap={headerKeyList}
          canEdit={canEdit}
        />
        <TableList data={bodyList} keyMap={headerKeyList} canEdit={canEdit} />
      </Table>
    </TableContainer>
  );
};

export default TableData;
