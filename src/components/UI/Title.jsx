import styled from 'styled-components';
import { underline } from '../../styles/globals';

const Title = styled.h2`
  position: relative;
  margin: 0 0 3rem;
  &::after {
    ${underline}
    width: 5rem;
  }
`;

export default Title;
