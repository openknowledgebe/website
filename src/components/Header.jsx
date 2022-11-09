import React, { useState } from 'react';
import styled from 'styled-components';

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

  & .brand img {
    transform: scale(1.2);
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

function Header({ data }) {
  const [isOpen, setOpen] = useState();
  const callbackMenuToggled = () => {
    setOpen(!isOpen);
  };

  return (
    <StyledHeader className="work-sans" data-state={`${isOpen ? 'reversed' : ''}`}>
      <StyledLink to="/" className="brand">
        <h1>
          <img src={data.logo} alt={data.org_name} />
        </h1>
      </StyledLink>
      <NavItems
        isTop
        className="top-nav"
        isOpen={isOpen}
        toggle={callbackMenuToggled}
        links={data.nav_items}
      />
    </StyledHeader>
  );
}

export default Header;
