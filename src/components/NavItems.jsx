import React, { useState } from 'react';
import { Link } from 'gatsby';

const links = [
  { to: '/', name: 'Open Knowledge' },
  { to: '/team', name: 'Team' },
  { to: '/activities', name: 'Our activities' },
  { to: '/calendar', name: 'Calendar' },
  { to: '/stories', name: 'Our stories' }
];

const NavItems = ({ isTop, className }) => {
  const [isOpen, setOpen] = useState();

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      {isTop && (
        <button className={`hamburger ${isOpen ? 'open' : ''}`} type="button" onClick={toggle}>
          <span />
        </button>
      )}
      <nav className={`bold6 ${className}`} style={{ display: isOpen === true ? 'block' : '' }}>
        <ul className="nav-items">
          {links.map(link => (
            <li key={link.to}>
              <Link to={link.to} activeClassName={isTop && 'active underlined'}>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavItems;
