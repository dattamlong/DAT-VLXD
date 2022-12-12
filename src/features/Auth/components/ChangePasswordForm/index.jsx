import PropTypes from 'prop-types';
import { FastField, Form, Formik } from 'formik';
import InputField from '../../../../custom-fields/inputFields';
import { Button, Center, Checkbox, Link, Text, VStack } from '@chakra-ui/react';

import { Link as ReachLink } from 'react-router-dom';

const ChangePassWordForm = props => {
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
                Save
              </Button>
            </VStack>
          </Form>
        );
      }}
    </Formik>
  );
};

ChangePassWordForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  listInput: PropTypes.array.isRequired,
  remember: PropTypes.bool,
  onSubmit: PropTypes.func,
  setRemember: PropTypes.func,
};

ChangePassWordForm.defaultProps = {
  initialValues: {
    username: '',
    password: '',
  },
  listInput: [],
  remember: false,
  onSubmit: () => {},
  setRemember: () => {},
};
export default ChangePassWordForm;
