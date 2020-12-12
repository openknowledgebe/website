import styled from 'styled-components';

const Article = styled.article`
  padding: 0;
  max-width: 70rem;
  margin: auto;

  & a {
    overflow-wrap: anywhere;
  }

  & img {
    max-width: 100%;
  }
`;

export default Article;
