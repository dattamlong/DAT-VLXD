import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { useEffect, useLayoutEffect, useState } from 'react';
import { login } from '../../../../constants';
import changePassword from '../../../../constants/changePassword';
import ChangePassWordForm from '../../components/ChangePasswordForm';
import LoginForm from '../../components/LoginForm';

const ChangePassword = () => {
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
    console.log(v);
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
            Change Password
          </Text>
        </Center>
        <ChangePassWordForm
          initialValues={initialValues}
          listInput={changePassword.listInput}
          onSubmit={handleSubmit}
        />
      </Box>
    </Flex>
  );
};

export default ChangePassword;
