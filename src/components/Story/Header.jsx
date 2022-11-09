import React from 'react';
import styled from 'styled-components';

import { Date, StyledLink } from '../UI';

const Title = styled.h1`
  max-width: 40rem;
  width: 100%;
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 1.4rem;
`;

const Link = styled(StyledLink)`
  &:hover,
  &:focus,
  &.active {
    color: inherit;
  }
`;

function Header({ title, date, author, to }) {
  return (
    <header className="work-sans" style={{ padding: 0, marginBottom: '1rem' }}>
      {to ? (
        <Link to={to}>
          <Title>{title}</Title>
        </Link>
      ) : (
        <Title>{title}</Title>
      )}
      <Meta>
        {date && <Date date={date} />}
        {author && <address>{author}</address>}
      </Meta>
    </header>
  );
}

export default Header;
