import { Box, Center, Flex, Text, useToast } from '@chakra-ui/react';
import { useEffect, useLayoutEffect, useState } from 'react';
import AuthContext from 'context/AuthProvider';

import login from 'constants/auth/login';

import LoginForm from 'features/Auth/Login/LoginForm';
import authApi from 'api/authApi';
import useAuth from 'hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { setAuth } = useAuth();
  const toast = useToast();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [remember, setRemember] = useState(() => {
    const isCheck = Boolean(localStorage.getItem('checkbox'));
    return isCheck;
  });

  const [initialValues, setInitialValues] = useState(() => {
    const value = localStorage.getItem('remember');
    if (value)
      return {
        ...JSON.parse(value),
      };
    return { ...login.initialValues };
  });

  const handleSubmit = async value => {
    if (remember) {
      localStorage.setItem('remember', JSON.stringify({ ...value }));
      localStorage.setItem('checkbox', true);
    } else {
      localStorage.removeItem('remember');
      localStorage.removeItem('checkbox');
    }
    try {
      const res = await authApi.login(value);
      // console.log(res);
      if (!res?.success) throw new Error();
      const accessToken = res?.token;
      const name = res?.user?.fullname;
      const urlImage = res?.user?.photo ?? '';
      const role = res?.user?.roleId;

      // const accessToken = 'dasdsadasd';
      // const name = 'Trần Thái Toàn';
      // const role = 1;
      localStorage.setItem(
        'login',
        JSON.stringify({ accessToken, name, urlImage, role })
      );
      setAuth({ accessToken, name, role, urlImage });
      toast({
        position: 'top-right',
        title: 'Thông báo',
        description: 'Đăng nhập thành công',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      navigate(from, { replace: true });
    } catch (error) {
      toast({
        position: 'top-right',
        title: 'Thông báo',
        description: 'Đăng nhập thất bại',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return {};
    }
  };

  return (
    <Box bg="white" p={6} rounded="md" w={'full'} maxW={'md'}>
      <LoginHeader />
      <LoginForm
        initialValues={initialValues}
        listInput={login.listInput}
        onSubmit={handleSubmit}
        remember={remember}
        setRemember={setRemember}
      />
    </Box>
  );
};

const LoginHeader = () => {
  return (
    <Center mb={5}>
      <Text as="b" color="teal.400" fontSize="3xl">
        Quality is our main priority
      </Text>
    </Center>
  );
};

export default Login;
