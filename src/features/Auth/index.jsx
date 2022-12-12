import { Flex } from '@chakra-ui/react';
import useAuth from 'hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const Auth = () => {
  const { auth } = useAuth();
  console.log(auth);
  return auth.accessToken ? (
    <Navigate to="/" />
  ) : (
    <Flex
      direction="column"
      bg="gray.100"
      align="center"
      justify="center"
      h="100vh"
    >
      <Outlet />
    </Flex>
  );
};

export default Auth;
