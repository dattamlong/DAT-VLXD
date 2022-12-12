import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Heading,
  IconButton,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import {
  FaFacebook,
  FaFacebookMessenger,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
const header = (
  <Stack
    spacing={{
      base: '2',
      md: '4',
    }}
    align="start"
  >
    <Text fontWeight="bold" fontSize="2xl" color="teal">
      VatlieuXaydung
    </Text>
    <Text color="muted">Cung cấp vật liệu xây dựng chất lượng cao</Text>
  </Stack>
);
const body = (
  <Stack spacing={4}>
    <Text fontSize="sm" fontWeight="semibold" color="subtle">
      Thông tin liên hệ
    </Text>
    <Stack direction="row" spacing="1">
      <Stack spacing="2" minW="30px" flex="1">
        <Stack spacing="3" shouldWrapChildren>
          <Text fontSize="sm" fontWeight={'Bold'}>
            Đia chỉ:
          </Text>
          <Text fontSize="sm" fontWeight={'Bold'}>
            SĐT:
          </Text>
          <Text fontSize="sm" fontWeight={'Bold'}>
            Mail:
          </Text>
          <Text fontSize="sm" fontWeight={'Bold'}>
            Facebook:
          </Text>
          <Text fontSize="sm" fontWeight={'Bold'}>
            Instagram:
          </Text>
        </Stack>
      </Stack>

      <Stack spacing="3" shouldWrapChildren>
        <Text fontSize="sm" color={'grey'}>
          3/2, Xuân Khánh, Ninh Kiều, Cần Thơ
        </Text>
        <Text fontSize="sm" color={'grey'}>
          0943221567
        </Text>
        <Text fontSize="sm" color={'grey'}>
          Vatlieuxaydung567@gmail.com
        </Text>
        <Text fontSize="sm" color={'grey'}>
          Vật liệu xây dụng
        </Text>
        <Text fontSize="sm" color={'grey'}>
          Vat_lieu_xaydung_
        </Text>
      </Stack>
    </Stack>
  </Stack>
);
const stayUpToDate = (
  <Stack spacing="4">
    <Text fontSize="sm" fontWeight="semibold" color="subtle">
      Đăng ký nhận tin
    </Text>
    <Stack
      spacing="2"
      direction={{
        base: 'column',
        sm: 'row',
      }}
      maxW={{
        lg: '360px',
      }}
    >
      <Input placeholder="Email của bạn" type="email" required />
      <Button
        variant="primary"
        type="submit"
        flexShrink={0}
        bg="teal"
        color="white"
      >
        Đăng ký
      </Button>
    </Stack>
  </Stack>
);
const socialMedia = (
  <Stack
    pt="8"
    pb="12"
    justify="space-between"
    direction={{
      base: 'column-reverse',
      md: 'row',
    }}
    align="center"
  >
    <Text fontSize="sm" color="subtle" fontStyle="italic">
      &copy; {new Date().getFullYear()} Vatlieuxaydung, nhà phân phối vật liệu
      xây dựng hàng đầu Việt Nam
    </Text>
    <ButtonGroup variant="ghost">
      <IconButton
        as="a"
        href="#"
        aria-label="Facebook "
        icon={<FaFacebook fontSize="1.25rem" />}
      />

      <IconButton
        as="a"
        href="#"
        aria-label="Messenger"
        icon={<FaFacebookMessenger fontSize="1.25rem" />}
      />
    </ButtonGroup>
  </Stack>
);
const Footer = () => (
  <Container maxW="6xl" role="contentinfo">
    <Stack
      spacing="8"
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      py={{
        base: '12',
        md: '16',
      }}
    >
      {header}

      {body}
      {stayUpToDate}
    </Stack>
    <Divider />
    {socialMedia}
  </Container>
);
export default Footer;
