import { Box, Center, Flex, Text, useToast } from '@chakra-ui/react';
import authApi from 'api/authApi';
import register from 'constants/auth/register';
import RegisterForm from 'features/Auth/Register/RegisterForm';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const toast = useToast();

  const navigate = useNavigate();

  const handleSubmit = async v => {
    try {
      const { success } = await authApi.register(v);
      if (success) {
        toast({
          position: 'top-right',
          title: 'Thông báo',
          description: 'Đăng ký thành công, vui lòng đăng nhập',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });

        navigate('/auth');
        return;
      }
      throw new Error();
    } catch (error) {
      toast({
        position: 'top-right',
        title: 'Thông báo',
        description: 'Email hoặc SDT đã được đăng ký',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
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
            Quality is our main priority
          </Text>
        </Center>
        <RegisterForm
          initialValues={register.initialValues}
          listInput={register.listInput}
          onSubmit={handleSubmit}
        />
      </Box>
    </Flex>
  );
};

export default Register;
