import React from 'react';
import styled from 'styled-components';

import StyledLink from './UI/StyledLink';
import { breakpoints } from '../styles/globals';

const Hamburger = styled.button`
  background: transparent;
  border: none;
  display: block;
  height: 4rem;
  width: 3rem;

  & > span,
  & > span::before,
  & > span::after {
    position: relative;
    display: block;
    width: 100%;
    height: 0.2rem;
    background-color: var(--color-primary);
  }

  & > span::before,
  & > span::after {
    content: '';
    position: absolute;
    left: 0;
  }

  & > span::before {
    top: -0.7rem;
  }

  & > span::after {
    top: 0.7rem;
  }

  &.open > span {
    background-color: transparent;
  }

  &.open > span::after,
  &.open > span::before {
    top: 0;
  }
  &.open > span::after {
    transform: rotate(45deg);
  }

  &.open > span::before {
    transform: rotate(-45deg);
  }

  @media (min-width: ${breakpoints.large}px) {
    & {
      display: none;
    }
  }
`;

const Nav = styled.nav`
  & .nav-items {
    list-style: none;
    padding: 0;
    display: flex;
  }

  & .nav-items li {
    min-height: 4rem;
    margin: 0.5rem 0;
  }

  @media (min-width: ${breakpoints.large}px) {
    &.top-nav .nav-items > li {
      margin-left: 4em;
    }

    &.top-nav {
      height: 100%;
    }

    &.top-nav .nav-items {
      align-items: flex-end;
      height: 100%;
      margin: 0;
    }
  }
`;

function NavItems({ isTop = false, className, isOpen, toggle, links }) {
  return (
    <>
      {isTop && (
        <Hamburger
          className={`hamburger ${isOpen ? 'open' : ''}`}
          type="button"
          onClick={() => toggle()}
        >
          <span />
        </Hamburger>
      )}
      <Nav className={`bold6 ${className}`} style={{ display: isOpen ? 'block' : '' }}>
        <ul className="nav-items">
          {links.map(link => (
            <li key={link.to}>
              <StyledLink
                to={link.to}
                activeClassName={isTop ? 'active underlined' : ''}
                className="inline hoverable"
              >
                <span>{link.label}</span>
              </StyledLink>
            </li>
          ))}
        </ul>
      </Nav>
    </>
  );
}

export default NavItems;
