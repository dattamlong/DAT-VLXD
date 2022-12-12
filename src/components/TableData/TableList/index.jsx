import { Tbody } from '@chakra-ui/react';
// import TableHeader from '../TableHeader';
import TableItem from '../TableItem/';

const TableList = props => {
  const { data, keyMap, canEdit } = props;

  return (
    <Tbody>
      {data.map((item, idx) => (
        <TableItem key={idx} data={item} keyMap={keyMap} canEdit={canEdit} />
      ))}
    </Tbody>
  );
};

export default TableList;
