import React from 'react';
import { Grid } from '@material-ui/core';

import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

function App() {
  return (
    <Grid>
      <Header />
      <Menu />
      <Footer />
    </Grid>
  );
}

export default App;
