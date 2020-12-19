import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Article, Title } from '../components/UI';

const Header = styled.header`
  padding: 0;
`;

export default function About({ data }) {
  const {
    frontmatter: { seo },
    html: body
  } = data.about;

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} />
      <AboutTemplate data={{ seo, body }} />
    </Layout>
  );
}

export const AboutTemplate = ({ data, preview }) => (
  <article>
    <Header>
      <Title as="h1">{data.seo?.title}</Title>
    </Header>

    <Article>
      {preview ? data.body : data.body && <div dangerouslySetInnerHTML={{ __html: data.body }} />}
    </Article>
  </article>
);

export const query = graphql`
  {
    about: markdownRemark(fields: { collection: { eq: "about" } }) {
      frontmatter {
        seo {
          description
          title
        }
      }
      html
    }
  }
`;
