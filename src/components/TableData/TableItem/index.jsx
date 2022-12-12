import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { HStack, Stack, Td, Tr } from '@chakra-ui/react';

const TableItem = props => {
  const { data, keyMap, canEdit } = props;
  // console.log('>>>TableItem: ', props);
  const ICON_SIZE = 5;

  const handleEdit = () => {
    console.log('Edit Clicked');
  };

  const handleDelete = () => {
    console.log('Delete Clicked');
  };

  return (
    <Tr>
      {keyMap.map((key, idx) => (
        <Td key={idx}>{data[key]}</Td>
      ))}
      {canEdit && (
        <Td>
          <HStack>
            <EditIcon
              w={ICON_SIZE}
              h={ICON_SIZE}
              cursor="pointer"
              color="teal"
              onClick={handleEdit}
            />
            <DeleteIcon
              w={ICON_SIZE}
              h={ICON_SIZE}
              cursor="pointer"
              color="red.500"
              onClick={handleDelete}
            />
          </HStack>
        </Td>
      )}
    </Tr>
  );
};

export default TableItem;
