const headerKeyList = ['name', 'email', 'total', 'creationDate'];

const headerNameList = {
  name: 'Name',
  email: 'Email',
  total: 'Total',
  creationDate: 'Creation Date',
};

const bodyList = [
  {
    name: 'Tu Duc',
    email: 'tuduc@gmail.com',
    total: '10.503.000',
    creationDate: '15/08/2020 00:00',
  },
  {
    name: 'Nhat Duy',
    email: 'nhatduy@gmail.com',
    total: '10.503.000',
    creationDate: '15/08/2020 00:01',
  },
  {
    name: 'Nhat Truong',
    email: 'nhattruong@gmail.com',
    total: '10.503.000',
    creationDate: '15/08/2020 00:02',
  },
];

const userManager = { headerKeyList, headerNameList, bodyList };

export default userManager;
