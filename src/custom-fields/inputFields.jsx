import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
} from '@chakra-ui/react';
import { ErrorMessage } from 'formik';

const InputField = props => {
  const { field, form, label, type, placeholder, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showErr = errors[name] && touched[name];
  return (
    <FormControl isInvalid={showErr}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <InputGroup>
        <Input
          id={name}
          {...field}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          // invalid={showErr}
        />
      </InputGroup>
      <ErrorMessage name={name} component={FormErrorMessage} />
    </FormControl>
  );
};

InputField.defaultProps = {
  label: '',
  type: 'text',
  placeholder: '',
  disabled: false,
};

export default InputField;
