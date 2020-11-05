import React, { useState } from 'react';
import { Link } from 'gatsby';

import logo from '../images/logo/okbe.svg';
import NavItems from './NavItems';

const Header = () => {
  const [isOpen, setOpen] = useState();
  const callbackMenuToggled = () => {
    setOpen(!isOpen);
  };

  return (
    <header className="unstyled-links work-sans navbar" data-state={`${isOpen ? 'reversed' : ''}`}>
      <Link to="/" className="brand">
        <img src={logo} alt="Open Knowledge Belgium" />
        <h1>
          Open&nbsp;Knowledge
          <br /> <span className="regular">Belgium</span>
        </h1>
      </Link>
      <NavItems isTop className="top-nav" isOpen={isOpen} toggle={callbackMenuToggled} />
    </header>
  );
};

export default Header;
