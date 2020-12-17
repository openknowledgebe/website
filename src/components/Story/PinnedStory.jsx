import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../UI';

const StyledPinnedStory = styled.div`
  padding: 2rem 0;

  &:not(:first-of-type) {
    border-top: 0.5px solid #a7a5a1;
  }

  &:first-of-type {
    padding-top: 0;
  }

  & .pinned-story-link {
    display: block;
  }

  & .story-date {
    font-size: 1.4rem;
    color: var(--color-secondary);
  }
`;

const PinnedStory = ({ title, date, slug }) => (
  <StyledPinnedStory>
    <StyledLink to={slug} className="pinned-story-link">
      {title}
    </StyledLink>
    <div className="story-date">{date}</div>
  </StyledPinnedStory>
);

export default PinnedStory;
