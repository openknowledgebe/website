import styled from 'styled-components';
import { underline } from '../../styles/fragments';

const Title = styled.h2`
  position: relative;
  margin: 0;
  &::after {
    ${underline}
    width: 5rem;
  }
`;

export default Title;