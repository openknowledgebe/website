import React, { useState } from 'react';
import { arrow } from '../images/icons';
import StyledLink from './UI/StyledLink';

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
          <div key={tag} className="tag">
            {tag}
          </div>
        ))}
      </div>
      <div className="logo">
        <img src={logo} alt={name} />
      </div>
      <div className="activity-link-container">
        <StyledLink to="/" className="bold6 work-sans activity-link">
          <span>{name}</span>
          <img src={arrow} alt="" />
        </StyledLink>
      </div>
    </div>
  );
};

export default Activity;
