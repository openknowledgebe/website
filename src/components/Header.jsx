import React, { useState } from 'react';

import logo from '../images/logo/okbe.svg';
import NavItems from './NavItems';
import StyledLink from './UI/StyledLink';

const Header = () => {
  const [isOpen, setOpen] = useState();
  const callbackMenuToggled = () => {
    setOpen(!isOpen);
  };

  return (
    <header className="unstyled-links work-sans navbar" data-state={`${isOpen ? 'reversed' : ''}`}>
      <StyledLink to="/" className="brand">
        <img src={logo} alt="Open Knowledge Belgium" />
        <h1>
          Open&nbsp;Knowledge
          <br /> <span className="regular">Belgium</span>
        </h1>
      </StyledLink>
      <NavItems isTop className="top-nav" isOpen={isOpen} toggle={callbackMenuToggled} />
    </header>
  );
};

export default Header;
