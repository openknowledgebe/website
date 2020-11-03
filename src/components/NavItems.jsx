import React from 'react';
import { Link } from 'gatsby';

const links = [
  { to: '/', name: 'Open Knowledge' },
  { to: '/team', name: 'Team' },
  { to: '/activities', name: 'Our activities' },
  { to: '/calendar', name: 'Calendar' },
  { to: '/stories', name: 'Our stories' }
];

const NavItems = ({ showActiveStyle = undefined, className }) => {
  return (
    <nav className={`bold6 ${className}`}>
      <ul className="nav-items">
        {links.map(link => (
          <li>
            <Link to={link.to} key={link.to} activeClassName={showActiveStyle && 'active'}>
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;
