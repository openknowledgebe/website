import React from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';

import Layout from '../components/Layout';
import { Date } from '../components/UI';

const Body = styled.div`
  max-width: 80rem;
  margin: auto;
`;

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

export default function Post() {
  return (
    <Layout>
      <PostTemplate />
    </Layout>
  );
}

export const PostTemplate = ({ data }) => {
  return (
    <article>
      <header className="work-sans" style={{ padding: 0, marginBottom: '1rem' }}>
        <Title>{data.title}</Title>
        <Meta>
          <Date date={data.date} />
          <address>{data.author}</address>
        </Meta>
      </header>
      <Body>
        <Markdown>{data.body}</Markdown>
      </Body>
    </article>
  );
};
