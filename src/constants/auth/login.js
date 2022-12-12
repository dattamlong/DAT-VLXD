const initialValues = {
  phone: '',
  password: '',
};

const listInput = [
  {
    name: 'phone',
    placeholder: 'phone',
  },

  {
    name: 'password',
    type: 'password',
    placeholder: 'password',
  },
];

const login = {
  initialValues,
  listInput,
};

export default login;
