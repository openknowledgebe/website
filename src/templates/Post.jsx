import React from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { StoryHeader } from '../components/Story';
import SEO from '../components/SEO';

const Body = styled.div`
  max-width: 80rem;
  margin: auto;
`;

export default function Post({ data }) {
  const {
    frontmatter: { title, date, author },
    html,
    excerpt
  } = data.markdownRemark;

  const post = { title, date, author, body: html, excerpt };
  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <PostTemplate data={post} />
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

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "LL")
        author
      }
      excerpt(pruneLength: 304)
      html
    }
  }
`;
