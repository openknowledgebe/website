import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { StoryCard, StoryCardContainer } from '../components/Story';
import { Title } from '../components/UI';

const Stories = ({ data }) => {
  const stories = data.stories.edges;
  return (
    <Layout>
      <SEO title="Our stories" />
      <section>
        <Title as="h1">
          Our <br />
          stories
        </Title>
        <StoryCardContainer>
          {stories &&
            stories.map(({ node: { frontmatter: { title, date }, excerpt, fields: { slug } } }) => (
              <StoryCard key={title} title={title} date={date} excerpt={excerpt} to={slug} />
            ))}
        </StoryCardContainer>
      </section>
    </Layout>
  );
};

export default Stories;

export const pageQuery = graphql`
  query {
    stories: allMarkdownRemark(
      filter: { fields: { collection: { eq: "story" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "LL")
          }
          excerpt(pruneLength: 304)
          fields {
            slug
          }
        }
      }
    }
  }
`;
