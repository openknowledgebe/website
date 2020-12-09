import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Body = styled.article`
  padding: 0;
  max-width: 700px;
  margin: auto;
`;

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

export const AboutTemplate = ({ data, preview }) => {
  return (
    <article>
      <Header>
        <h1>{data.seo?.title}</h1>
      </Header>

      <Body>
        {preview ? data.body : data.body && <div dangerouslySetInnerHTML={{ __html: data.body }} />}
      </Body>
    </article>
  );
};

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
