import styled from 'styled-components';
import { breakpoints } from '../../styles/globals';

const StoryCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;

  @media (min-width: ${breakpoints.medium}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default StoryCardContainer;
