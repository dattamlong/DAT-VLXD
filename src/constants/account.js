const initialValues = {
  username: '',
  firstname: '',
  lastname: '',
  email: '',
};

const listInput = [
  {
    name: 'username',
    placeholder: 'User name',
  },
  {
    name: 'firstname',
    placeholder: 'First Name',
  },
  {
    name: 'lastname',
    placeholder: 'Last Name',
  },
  {
    name: 'email',
    placeholder: 'Email',
  },
];

const account = {
  initialValues,
  listInput,
};

export default account;
