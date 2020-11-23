import React from 'react';
import styled from 'styled-components';

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
`;

const StoryCard = ({ title, date, excerpt }) => {
  const shrinked = excerpt.length > 304 ? `${excerpt.substring(0, 304)}...` : excerpt;

  return (
    <Card className="box">
      <Header title={title} date={date} />
      <p>{shrinked}</p>
    </Card>
  );
};

export default StoryCard;
