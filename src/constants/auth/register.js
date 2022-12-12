const initialValues = {
  fullname: '',
  email: '',
  phone: '',
  password: '',
  retypepassword: '',
};

const listInput = [
  {
    label: 'Full Name',
    name: 'fullname',
  },
  {
    label: 'Phone',
    name: 'phone',
  },
  {
    label: 'Email',
    name: 'email',
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
  },
  {
    label: 'Retype Password',
    name: 'retypepassword',
    type: 'password',
  },
];

const register = {
  initialValues,
  listInput,
};

export default register;
