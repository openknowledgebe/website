import React from 'react';
import Header from './Header';
import NavItems from './NavItems';

const Layout = ({ children }) => {
  return (
    <div id="app">
      <Header />
      <main>{children}</main>
      <footer>
        <NavItems className="footer-nav unstyled-links work-sans" />
      </footer>
    </div>
  );
};

export default Layout;
