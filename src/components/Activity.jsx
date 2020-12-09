import React, { useState } from 'react';
import styled from 'styled-components';

import { arrow } from '../images/icons';
import { Img, StyledLink, Tag } from './UI';
import { breakpoints, dimensions } from '../styles/globals';

const ActivityCard = styled.div`
  position: relative;
  height: 17.5rem;

  & .logo {
    width: 100%;
    height: 100%;
    max-width: ${dimensions.logo.maxWidth}px;
    max-height: ${dimensions.logo.maxHeight}px;

    & > * {
      max-height: 100%;
    }
  }

  & .tags.show {
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--logo-box-hovered);
    width: 100%;
    height: 100%;
    z-index: 1;

    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
  }

  @media (min-width: ${breakpoints.medium}px) {
    width: 30rem;
    height: 40rem;
  }

  @media (min-width: ${breakpoints.large}px) {
    width: 32rem;
    height: 40rem;
  }
`;

const ActivityLinks = styled.div`
  position: absolute;
  bottom: -2rem;
  right: -1rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & .activity-link {
    box-shadow: 0px 0px 19.1237px rgba(0, 0, 0, 0.05);
    background-color: var(--bg-light);
    z-index: 2;
    padding: 2.5rem 1rem 1rem;
  }
`;

const Activity = ({ name, logo, color, tags, to }) => {
  const [hovering, setHovering] = useState(false);
  const defaultColor = 'var(--bg-light)';
  return (
    <ActivityCard
      className="box"
      style={{
        backgroundColor: color || defaultColor
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onBlur={() => setHovering(false)}
      onFocus={() => setHovering(true)}
    >
      {tags && (
        <div className={`tags ${hovering ? 'show' : 'visually-hidden'}`}>
          {tags.map(tag => (
            <Tag key={tag} css="margin: 1rem;">
              {tag}
            </Tag>
          ))}
        </div>
      )}
      <div className="logo">
        <Img image={logo} alt={name} />
      </div>
      <ActivityLinks>
        <StyledLink to={to} className="activity-link">
          <span>{name}</span>
          <Img src={arrow} alt="" />
        </StyledLink>
      </ActivityLinks>
    </ActivityCard>
  );
};

export default Activity;
