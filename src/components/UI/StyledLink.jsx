import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

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
    position: absolute;
    content: '';
    left: 0;
    bottom: -0.2rem;
    width: 100%;
    height: 0.2rem;
    background-color: var(--color-secondary);
    transition: all 0.3s;
  }

  ${({ callToAction }) =>
    callToAction &&
    css`
      font-size: 2rem;

      @media (min-width: var(--breakpoint-medium)) {
        font-size: inherit;
      }
    `}
`;

export default StyledLink;
