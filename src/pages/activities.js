import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Activity from '../components/Activity';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Title } from '../components/UI';
import { breakpoints } from '../styles/globals';

const ActivitiesContainer = styled.div`
  & > * {
    margin-bottom: 30px;
  }

  @media (min-width: ${breakpoints.medium}px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 20px;

    & > * {
      width: auto;
      height: 30rem;
    }
  }

  @media (min-width: ${breakpoints.medium + 150}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${breakpoints.large}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function Activities({ data }) {
  const activities = data.activities.edges;
  const { seo } = data.page.frontmatter;

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} />
      <section>
        <Title as="h1">{seo.title}</Title>
        <ActivitiesContainer>
          {activities &&
            activities.map(
              ({
                node: {
                  frontmatter: { name, logo, color, tags },
                  fields: { slug: to }
                }
              }) => <Activity key={to} name={name} logo={logo} tags={tags} color={color} to={to} />
            )}
        </ActivitiesContainer>
      </section>
    </Layout>
  );
}

export default Activities;

export const pageQuery = graphql`
  query {
    activities: allMarkdownRemark(
      filter: { fields: { collection: { eq: "activity" } } }
      sort: { fields: frontmatter___name, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            name
            ...Logo
            color
            tags
          }
          fields {
            slug
          }
        }
      }
    }
    page: markdownRemark(fields: { collection: { eq: "activities" } }) {
      frontmatter {
        seo {
          description
          title
        }
      }
    }
  }
`;
