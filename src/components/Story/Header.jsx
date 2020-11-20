import React from 'react';
import styled from 'styled-components';

import { Date } from '../UI';

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

const Header = ({ title, date, author }) => {
  return (
    <header className="work-sans" style={{ padding: 0, marginBottom: '1rem' }}>
      <Title>{title}</Title>
      <Meta>
        {date && <Date date={date} />}
        {author && <address>{author}</address>}
      </Meta>
    </header>
  );
};

export default Header;
