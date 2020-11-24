import React, { useState } from 'react';
import styled from 'styled-components';

import logo from '../images/logo/okbe.svg';
import NavItems from './NavItems';
import StyledLink from './UI/StyledLink';

import { breakpoints } from '../styles/globals';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--nav-height);

  & .brand {
    display: flex;
    align-items: center;
    line-height: normal;
  }

  & .brand > h1 {
    margin: 2rem 0 0;
    font-size: inherit;
  }

  & .top-nav {
    display: none;
  }

  @media (max-width: ${breakpoints.large - 1}px) {
    background-color: var(--bg-light);
    box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 0;
    z-index: var(--max-zindex);

    & .top-nav {
      position: absolute;
      top: var(--nav-height);
      left: 0;
      background-color: var(--bg-light);
      width: 100%;
      height: auto;
      box-shadow: 0px 45px 33px -33px rgba(0, 0, 0, 0.05);
      border-top: 1px solid rgba(0, 0, 0, 0.05);
    }

    & .top-nav .nav-items {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin: 0 var(--page-lr-margin);
      margin-bottom: 1rem;
    }
  }

  @media (min-width: ${breakpoints.large}px) {
    & .top-nav {
      display: block;
    }
  }
`;

const legacyLinks = [
  { to: '/', label: 'Open Knowledge' },
  { to: '/team', label: 'Team' },
  { to: '/activities', label: 'Our activities' },
  { to: '/calendar', label: 'Calendar' },
  { to: '/stories', label: 'Our stories' }
];

const Header = () => {
  const [isOpen, setOpen] = useState();
  const callbackMenuToggled = () => {
    setOpen(!isOpen);
  };

  return (
    <StyledHeader className="work-sans" data-state={`${isOpen ? 'reversed' : ''}`}>
      <StyledLink to="/" className="brand">
        <img src={logo} alt="Open Knowledge Belgium" />
        <h1>
          Open&nbsp;Knowledge
          <br /> <span className="regular">Belgium</span>
        </h1>
      </StyledLink>
      <NavItems
        isTop
        className="top-nav"
        isOpen={isOpen}
        toggle={callbackMenuToggled}
        links={legacyLinks}
      />
    </StyledHeader>
  );
};

export default Header;
