/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled, { css } from 'styled-components';
import { underline } from '../../styles/globals';

const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
  color: inherit;
  font-family: var(--titles-font);
  font-weight: 600;

  &.inline,
  &.hoverable,
  &.underlined {
    display: inline-block;
    position: relative;
  }

  &:hover,
  &:focus,
  &.active {
    color: var(--color-secondary);
  }

  &.hoverable:hover::after,
  &.hoverable:focus::after,
  &.underlined::after {
    ${underline}
    bottom: -0.2rem;
    width: 100%;
  }

  ${({ $callToAction }) =>
    $callToAction &&
    css`
      font-size: 2rem;

      @media (min-width: var(--breakpoint-medium)) {
        font-size: inherit;
      }
    `}
`;

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
function Link({ children, to, activeClassName, partiallyActive, ...other }) {
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);
  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <StyledLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </StyledLink>
    );
  }
  return (
    <StyledLink as="a" href={to} {...other}>
      {children}
    </StyledLink>
  );
}

export default Link;
