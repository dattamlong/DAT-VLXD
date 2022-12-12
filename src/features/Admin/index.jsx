import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <Grid
      templateAreas={`"nav header"
                  "nav main"
                  "nav main"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'200px 1fr'}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={'header'}>
        Header
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={'nav'}>
        Nav
      </GridItem>
      <GridItem p="2" area={'main'}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Admin;
