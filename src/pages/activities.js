import React from 'react';
import styled from 'styled-components';
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

const Activities = ({ data }) => {
  return (
    <Layout>
      <SEO title="Our activities" />
      <section>
        <Title as="h1" css="margin-bottom: 3rem;">
          Our <br />
          activities
        </Title>
        <ActivitiesContainer>
          {data &&
            data.map(({ name, logo, tags, color, to }) => (
              <Activity key={name} name={name} logo={logo} tags={tags} color={color} to={to} />
            ))}
        </ActivitiesContainer>
      </section>
    </Layout>
  );
};

export default Activities;
