import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { StoryHeader } from '../components/Story';
import SEO from '../components/SEO';
import { Article, Tag as StyledTag } from '../components/UI';

const Tag = styled(StyledTag)`
  background-color: #f9f6ff;
  font-size: 1.4rem;
`;

const Tags = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
`;

export default function Story({ data }) {
  const {
    frontmatter: { title, date, author, tags },
    html,
    excerpt
  } = data.markdownRemark;

  const post = { title, date, author, tags, body: html, excerpt };

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <StoryTemplate data={post} />
    </Layout>
  );
}

export function StoryTemplate({ data, preview }) {
  return (
    <article>
      <StoryHeader title={data.title} date={data.date} author={data.author} />
      <Article>
        <Tags className="gap">{data.tags && data.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}</Tags>
        {preview ? data.body : data.body && <div dangerouslySetInnerHTML={{ __html: data.body }} />}
      </Article>
    </article>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "LL")
        author
        tags
      }
      excerpt(pruneLength: 304)
      html
    }
  }
`;
