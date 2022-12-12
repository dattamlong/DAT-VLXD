import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiMenu } from 'react-icons/fi';

const DesktopNav = () => {
  return (
    <Flex justify="space-between" flex="1">
      <ButtonGroup variant="link" spacing="8">
        {['Trang chủ', 'Sản phẩm bán chạy', 'Sản phẩm giảm giá', 'Liên hệ'].map(
          item => (
            <Button key={item}>{item}</Button>
          )
        )}
      </ButtonGroup>
      <HStack spacing="3">
        <Button variant="ghost">Đăng ký</Button>
        <Button variant="primary">Đăng nhập</Button>
      </HStack>
    </Flex>
  );
};

const MobileNav = () => {
  return (
    <IconButton
      variant="ghost"
      icon={<FiMenu fontSize="1.25rem" />}
      aria-label="Open Menu"
    />
  );
};

const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box as="section">
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={'sm'}
        p={{
          base: '2',
          lg: '3',
        }}
      >
        <HStack spacing="10" justify="space-between">
          {isDesktop ? <DesktopNav /> : <MobileNav />}
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
