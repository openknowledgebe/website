import React, { useState } from 'react';
import { arrow } from '../images/icons';
import { Img, StyledLink, Tag } from './UI';

const Activity = ({ name, logo, color, tags }) => {
  const [hovering, setHovering] = useState(false);
  const defaultColor = 'var(--bg-light)';
  return (
    <div
      className="pinned-activity box activity"
      style={{
        backgroundColor: color || defaultColor
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onBlur={() => setHovering(false)}
      onFocus={() => setHovering(true)}
    >
      <div className={`tags ${hovering ? 'show' : 'visually-hidden'}`}>
        {tags.map(tag => (
          <Tag key={tag} css="margin: 1rem;">
            {tag}
          </Tag>
        ))}
      </div>
      <div className="logo">
        <Img src={logo} alt={name} />
      </div>
      <div className="activity-link-container">
        <StyledLink to="/" className="activity-link">
          <span>{name}</span>
          <Img src={arrow} alt="" />
        </StyledLink>
      </div>
    </div>
  );
};

export default Activity;
