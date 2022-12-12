import { SearchIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import useAuth from 'hooks/useAuth';
import { useEffect } from 'react';
import authApi from 'api/authApi';

const Separator = () => {
  return <Box borderRight="1px solid hsla(0,0%,100%,.4)" height=".8125rem" />;
};

const FindInput = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleOnchange = e => {
    setQuery(e.target.value);
  };

  const handleOnClick = () => {
    navigate({
      pathname: '/',
      search: query ? `?q=${query}` : '',
    });
  };

  return (
    <InputGroup flex={1}>
      <Input
        onChange={handleOnchange}
        height="2.8rem"
        bgColor="white"
        value={query}
      />
      <InputRightElement m="2px">
        <Button
          onClick={() => handleOnClick()}
          bgColor="teal.400"
          _hover={{ bgColor: 'teal.200' }}
        >
          <SearchIcon color="white" />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

const Desktop = ({ user }) => {
  const { setAuth } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogOut = async () => {
    // await authApi.logout(user?.accessToken);
    localStorage.removeItem('login');
    setAuth({});
  };

  const headerAuth = (
    <HStack>
      <RouterLink to="/auth/register">
        <Link fontSize=".8125rem" color="white">
          Đăng ký
        </Link>
      </RouterLink>
      <Separator />
      <RouterLink to="/auth">
        <Link fontSize=".8125rem" color="white">
          Đăng nhập
        </Link>
      </RouterLink>
    </HStack>
  );

  const headerUser = (
    <HStack mt={1} mb={-1}>
      <Avatar size="xs" src={user.urlImage} />
      <Menu isOpen={isOpen}>
        <MenuButton
          fontSize=".8125rem"
          color="white"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          {user.name}
        </MenuButton>
        <MenuList zIndex={100} onMouseEnter={onOpen} onMouseLeave={onClose}>
          <MenuItem>Tài khoản của tôi</MenuItem>
          <MenuItem>Lịch sử mua hàng</MenuItem>
          <MenuItem onClick={() => handleLogOut()}>Đăng xuất</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );

  return (
    <Box bgColor="teal.400">
      <Container
        maxW={useBreakpointValue({
          md: 'container.sm',
          xl: 'container.lg',
        })}
      >
        <Flex direction="column" alignItems="flex-end">
          {user.accessToken ? headerUser : headerAuth}
        </Flex>
        <Flex py={3} justifyContent="space-between" alignItems="center">
          <RouterLink to="/">
            <Text mr={3} color="white" fontWeight="bold">
              VLXD
            </Text>
          </RouterLink>
          <FindInput />
          <RouterLink to="/cart">
            <Box ml={3} cursor="pointer">
              <FontAwesomeIcon
                fontSize="1.0625rem"
                color="white"
                icon={faCartShopping}
              />
            </Box>
          </RouterLink>
        </Flex>
      </Container>
    </Box>
  );
};

const Mobile = () => {
  return (
    <Box bgColor="teal.400">
      <Flex p={3} justifyContent="space-between" alignItems="center">
        <FindInput />
        <Box ml={3} cursor="pointer">
          <FontAwesomeIcon
            fontSize="1.0625rem"
            color="white"
            icon={faCartShopping}
          />
        </Box>
        <Box ml={3} cursor="pointer">
          <FontAwesomeIcon fontSize="1.0625rem" color="white" icon={faUser} />
        </Box>
      </Flex>
    </Box>
  );
};

const Header = () => {
  const { auth } = useAuth();

  const isDesktop = useBreakpointValue({ base: false, md: true });
  return <>{isDesktop ? <Desktop user={auth} /> : <Mobile />}</>;
};

export default Header;
