import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  HStack,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import {
  FaAddressBook,
  FaAddressCard,
  FaClosedCaptioning,
  FaCreditCard,
  FaLocationArrow,
  FaRegIdCard,
  FaSearchLocation,
} from 'react-icons/fa';
import { CartOrderSummary, OrderSummaryItem } from '../Cart/CartOrderSummary';
import { formatPrice } from '../components/PriceTag';

const Wrapper = ({ children }) => {
  return (
    <Container
      maxW={{
        base: '3xl',
        lg: '6xl',
      }}
      mx="auto"
      px={{
        base: '4',
        md: '8',
        lg: '12',
      }}
      borderRadius="5px"
    >
      {children}
    </Container>
  );
};

const Order = () => {
  return (
    <Wrapper>
      <Stack>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={'column'}
          bg="white"
          p="40px"
          boxShadow="lg"
        >
          <HStack>
            <FaLocationArrow color="teal" />
            <Text fontSize="xl" fontWeight="semibold" color="teal">
              Địa chỉ đặt hàng
            </Text>
          </HStack>
          <Flex>
            <Box mr="50px">
              <Text fontWeight="semibold">Nguyễn Tuấn Đạt</Text>
              <Text fontWeight="semibold">0868246843</Text>
            </Box>
            <Text>
              6U1-6U2 hẻm 51, đường 3/2, phường An Khánh, Quận Ninh Kiều, Thành
              Phố Cần Thơ
            </Text>
          </Flex>
        </Stack>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={'column'}
          bg="white"
          p="40px"
          boxShadow="lg"
          divider={<StackDivider borderColor="gray.300" />}
        >
          <Flex justify="right">
            <SimpleGrid spacing="6" columns={2}>
              <Stack>
                <Text fontSize="md" fontWeight="semibold" color="teal">
                  Mã đơn hàng:
                </Text>
                <Text fontSize="lg" fontWeight="semibold" color="teal">
                  Tổng thành tiền:
                </Text>
              </Stack>

              <Stack>
                <Text fontSize="md" fontWeight="md">
                  12312392138
                </Text>
                <Text fontSize="xl" fontWeight="extrabold">
                  {formatPrice(2131)}{' '}
                </Text>
              </Stack>
            </SimpleGrid>
          </Flex>
          <Flex justify="right">
            <Button
              colorScheme="teal"
              size="lg"
              fontSize="md"
              minW="200px"
              rounded="none"
            >
              Đặt hàng
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </Wrapper>
  );
};
export default Order;
