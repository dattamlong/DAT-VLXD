import { Th, Thead, Tr } from '@chakra-ui/react';

const TableHeader = props => {
  const { data, keyMap, canEdit } = props;
  // console.log('>>>TableHeader: ', props);
  return (
    <Thead>
      <Tr>
        {keyMap.map((key, idx) => (
          <Th key={idx}>{data[key]}</Th>
        ))}
        {canEdit && <Th>Action</Th>}
      </Tr>
    </Thead>
  );
};

export default TableHeader;
