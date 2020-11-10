import React from 'react';

import Header from './Header';
import Footer from './Footer';

// normalize CSS across browsers
import '../styles/normalize.css';
// custom CSS styles
import '../style.css';
import { GlobalStyle } from '../styles/globals';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <div id="app">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
