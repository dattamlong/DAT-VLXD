import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { useEffect, useLayoutEffect, useState } from 'react';
import { account, login } from '../../../../constants';
import AccountForm from '../../../Auth/components/AccountForm';
import LoginForm from '../../../Auth/Login/LoginForm';

const Account = () => {
  const [remember, setRemember] = useState(false);
  const [initialValues, setInitialValues] = useState({
    ...login.initialValues,
  });

  useEffect(() => {
    const dataRemember = localStorage.getItem('remember');
    if (dataRemember)
      setInitialValues({
        ...JSON.parse(dataRemember),
      });
  }, []);

  const handleSubmit = v => {
    if (remember) {
      localStorage.setItem('remember', JSON.stringify({ ...v }));
    } else {
      localStorage.removeItem('remember');
    }
    //console.log(v);
  };

  return (
    <Flex
      direction="column"
      bg="gray.100"
      align="center"
      justify="center"
      h="100vh"
    >
      <Box bg="white" p={6} rounded="md" w={'full'} maxW={'md'}>
        <Center mb={5}>
          <Text as="b" color="teal.400" fontSize="3xl">
            Account
          </Text>
        </Center>
        <AccountForm
          initialValues={initialValues}
          listInput={account.listInput}
          onSubmit={handleSubmit}
        />
      </Box>
    </Flex>
  );
};

export default Account;
