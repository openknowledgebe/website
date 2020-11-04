import React from 'react';
import { Link } from 'gatsby';

import logo from '../images/logo/okbe.svg';
import NavItems from './NavItems';

const Header = () => {
  return (
    <header className="unstyled-links work-sans navbar">
      <Link to="/" className="brand">
        <img src={logo} alt="Open Knowledge Belgium" />
        <h1>
          Open&nbsp;Knowledge
          <br /> <span className="regular">Belgium</span>
        </h1>
      </Link>
      <NavItems isTop className="top-nav" />
    </header>
  );
};

export default Header;
