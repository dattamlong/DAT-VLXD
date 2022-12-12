import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik';
import InputField from '../../../../custom-fields/inputFields';
import { Button, Center, Checkbox, Link, Text, VStack } from '@chakra-ui/react';
import * as Yup from 'yup';

import { Link as ReachLink } from 'react-router-dom';

const LoginForm = props => {
  const { initialValues, listInput, remember, onSubmit, setRemember } = props;

  const validationSchema = Yup.object().shape({
    phone: Yup.string().required('Không bỏ trống ô này'),

    password: Yup.string().required('Không bỏ trống ô này'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {formikProps => {
        const { values, errors, touched, isSubmitting, setFieldValue } =
          formikProps;

        return (
          <Form>
            <VStack spacing={5} align="flex-start">
              {listInput.map((input, idx) => (
                <FastField key={idx} {...input} component={InputField} />
              ))}
              <Checkbox
                isChecked={remember}
                colorScheme="teal"
                onChange={e => setRemember(e.target.checked)}
              >
                Remember me
              </Checkbox>
              <Button
                colorScheme="teal"
                isLoading={isSubmitting}
                loadingText="Loading"
                type={'submit'}
                width="full"
              >
                Submit
              </Button>
              <Button
                as={ReachLink}
                to="register"
                colorScheme="teal"
                width="full"
              >
                Sign Up
              </Button>
            </VStack>
            <Center mt={3}>
              <Text>
                <Link as={ReachLink} to="hi">
                  forgot password?
                </Link>
              </Text>
            </Center>
          </Form>
        );
      }}
    </Formik>
  );
};

LoginForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  listInput: PropTypes.array.isRequired,
  remember: PropTypes.bool,
  onSubmit: PropTypes.func,
  setRemember: PropTypes.func,
};

LoginForm.defaultProps = {
  initialValues: {
    phone: '',
    password: '',
  },
  listInput: [],
  remember: false,
  onSubmit: () => {},
  setRemember: () => {},
};
export default LoginForm;
