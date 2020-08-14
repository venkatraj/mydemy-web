import React from 'react';
import { Grid } from '@material-ui/core';
import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

function App() {
  return (
    <Grid>
      <Header />
      <Menu />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Footer />
    </Grid>
  );
}

export default App;
