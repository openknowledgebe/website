import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { underline } from '../../styles/fragments';

const StyledLink = styled(Link)`
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

export default StyledLink;
