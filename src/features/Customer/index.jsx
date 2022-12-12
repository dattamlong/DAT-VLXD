import { Grid, GridItem } from '@chakra-ui/react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Navbar from 'components/Navbar';
import { Outlet } from 'react-router-dom';

const Customer = () => {
  return (
    <Grid
      templateAreas={`"header"
              "main"
              "footer"`}
      gridTemplateRows={{ base: '70px', md: '90px' }}
      h="100vh"
      // bgColor={'gray.100'}
    >
      <GridItem area={'header'}>
        <Header />
      </GridItem>
      <GridItem bgColor={'gray.100'} area={'main'}>
        <Outlet />
      </GridItem>
      <GridItem area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Customer;
