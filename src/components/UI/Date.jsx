import React from 'react';
import styled from 'styled-components';

const StyledDate = styled.time`
  color: var(--color-secondary);
`;

const Date = ({ date }) => <StyledDate dateTime={date}>{date}</StyledDate>;

export default Date;
