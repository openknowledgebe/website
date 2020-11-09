import React from 'react';
import StyledLink from './UI/StyledLink';

const links = [
  { to: '/', name: 'Open Knowledge' },
  { to: '/team', name: 'Team' },
  { to: '/activities', name: 'Our activities' },
  { to: '/calendar', name: 'Calendar' },
  { to: '/stories', name: 'Our stories' }
];

const NavItems = ({ isTop = false, className, isOpen, toggle }) => {
  return (
    <>
      {isTop && (
        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          type="button"
          onClick={() => toggle()}
        >
          <span />
        </button>
      )}
      <nav className={`bold6 ${className}`} style={{ display: isOpen ? 'block' : '' }}>
        <ul className="nav-items">
          {links.map(link => (
            <li key={link.to}>
              <StyledLink
                to={link.to}
                activeClassName={isTop ? 'active underlined' : ''}
                className="inline hoverable"
              >
                <span>{link.name}</span>
              </StyledLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavItems;
