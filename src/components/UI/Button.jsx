import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--color-secondary);
  border: none;
  color: var(--bg-light);
  padding: 1rem;

  &:hover {
    background-color: var(--color-secondary-opacity);
  }
`;
export default Button;
