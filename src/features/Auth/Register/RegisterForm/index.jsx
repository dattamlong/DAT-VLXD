import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik';
import InputField from '../../../../custom-fields/inputFields';
import { Button, Flex, Input, Text, VStack } from '@chakra-ui/react';

import { Link as ReachLink } from 'react-router-dom';

import * as Yup from 'yup';

const RegisterForm = props => {
  const { listInput } = props;

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Không bỏ trống dòng này'),

    email: Yup.string()
      .email('Sai định dạng email')
      .required('Không bỏ trống dòng này'),

    phone: Yup.string().required('Không bỏ trống dòng này'),

    password: Yup.string()
      .required('Không bỏ trống dòng này')
      .min(8, 'Mật khẩu của bạn quá ngắn'),

    retypepassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Mật khẩu không giống')
      .required('Không bỏ trống dòng này')
      .min(8, 'Mật khẩu của bạn quá ngắn'),
  });

  return (
    <Formik {...props} validationSchema={validationSchema}>
      {formikProps => {
        const { values, errors, touched, isSubmitting, setFieldValue } =
          formikProps;

        return (
          <Form>
            <VStack spacing={5} align="flex-start">
              {listInput.map((input, idx) => (
                <FastField key={idx} {...input} component={InputField} />
              ))}
              <Button
                colorScheme="teal"
                isLoading={isSubmitting}
                loadingText="Loading"
                type={'submit'}
                width="full"
              >
                Submit
              </Button>
              <Button as={ReachLink} to="../" colorScheme="teal" width="full">
                Sign In
              </Button>
            </VStack>
          </Form>
        );
      }}
    </Formik>
  );
};

RegisterForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  listInput: PropTypes.array.isRequired,
  onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
  initialValues: {
    firstname: '',
    lastname: '',
    username: '',
    numberphone: '',
    password: '',
    retypepassword: '',
  },
  listInput: [],
  onSubmit: null,
};
export default RegisterForm;
