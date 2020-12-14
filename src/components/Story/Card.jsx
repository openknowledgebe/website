import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/globals';

import Header from './Header';

const Card = styled.article`
  padding: 4rem 3rem;
  margin: 0;

  &:hover,
  &:focus,
  &:focus-within {
    color: var(--bg-light);
    background-color: var(--color-secondary);
  }

  &:hover time,
  &:focus time,
  &:focus-within time {
    color: var(--bg-light);
  }

  & p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (min-width: ${breakpoints.medium}px) {
    & p {
      -webkit-line-clamp: 4;
    }
  }

  @media (min-width: ${breakpoints.medium}px) {
    & p {
      -webkit-line-clamp: 5;
    }
  }
`;

const StoryCard = ({ title, date, excerpt, to }) => (
  <Card className="box">
    <Header title={title} date={date} to={to} />
    <p>{`${excerpt}...`}</p>
  </Card>
);

export default StoryCard;
