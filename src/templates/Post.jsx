import React from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';

import Layout from '../components/Layout';
import { StoryHeader } from '../components/Story';

const Body = styled.div`
  max-width: 80rem;
  margin: auto;
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
      <StoryHeader title={data.title} date={data.date} author={data.author} />
      <Body>
        <Markdown>{data.body}</Markdown>
      </Body>
    </article>
  );
};
