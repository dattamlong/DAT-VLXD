const initialValues = {
  oldpassword: '',
  newpassword: '',
  confirmpassword: '',
};

const listInput = [
  {
    name: 'oldpassword',
    type: 'password',
    placeholder: 'Old Password',
  },
  {
    name: 'newpasswork',
    type: 'password',
    placeholder: 'New Password',
  },
  {
    name: 'confirmpassword',
    type: 'password',
    placeholder: 'Confirm Password',
  },
];

const changePassword = {
  initialValues,
  listInput,
};

export default changePassword;
