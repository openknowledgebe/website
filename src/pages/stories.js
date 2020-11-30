import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import StoryCard from '../components/Story/Card';
import { Title } from '../components/UI';
import { breakpoints } from '../styles/globals';

const StoriesContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;

  @media (min-width: ${breakpoints.medium}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

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
        <StoriesContainer>
          {stories &&
            stories.map(({ node: { frontmatter: { title, date }, excerpt } }) => (
              <StoryCard key={title} title={title} date={date} excerpt={excerpt} />
            ))}
        </StoriesContainer>
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
