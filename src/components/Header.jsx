import React from 'react';
import { Link } from 'gatsby';

import logo from '../images/logo/okbe.svg';
import NavItems from './NavItems';

const Header = () => {
  return (
    <header className="unstyled-links work-sans navbar">
      <Link to="/" className="brand">
        <img src={logo} alt="Open Knowledge Belgium" />
        <div>
          <span className="bold">Open Knowledge</span>
          <br /> Belgium
        </div>
      </Link>
      <NavItems showActiveStyle className="top-nav" />
    </header>
  );
};

export default Header;
