import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik';
import InputField from '../../../../custom-fields/inputFields';
import {
  Button,
  Center,
  Checkbox,
  HStack,
  Link,
  Text,
  VStack,
  Stack,
  Flex,
  FormControl,
  WrapItem,
} from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const AccountForm = props => {
  const { initialValues, listInput, remember, onSubmit, setRemember } = props;
  console.log(initialValues);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {formikProps => {
        const { values, errors, touched, isSubmitting, setFieldValue } =
          formikProps;
        // console.log({ values, errors, touched });

        return (
          <Form>
            <Flex>
              <FormControl mr="20px">
                <VStack spacing={5} align="flex-start">
                  {listInput.map((input, idx) => (
                    <FastField key={idx} {...input} component={InputField} />
                  ))}
                  <Center mt={3}>
                    <Text>
                      <Link as={ReachLink} to="../changepassword">
                        change password
                      </Link>
                    </Text>
                  </Center>
                  <Button
                    colorScheme="teal"
                    isLoading={isSubmitting}
                    loadingText="Loading"
                    type={'submit'}
                    width="full"
                  >
                    Update
                  </Button>
                </VStack>
              </FormControl>

              <VStack mt="25px">
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Center mt={3}>
                  <Text>
                    <Link as={ReachLink} to="hi">
                      change avatar
                    </Link>
                  </Text>
                </Center>
              </VStack>
            </Flex>
          </Form>
        );
      }}
    </Formik>
  );
};

AccountForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  listInput: PropTypes.array.isRequired,
  remember: PropTypes.bool,
  onSubmit: PropTypes.func,
  setRemember: PropTypes.func,
};

AccountForm.defaultProps = {
  initialValues: {
    username: '',
    password: '',
  },
  listInput: [],
  remember: false,
  onSubmit: () => {},
  setRemember: () => {},
};
export default AccountForm;
