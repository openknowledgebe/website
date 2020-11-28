import React from 'react';
import styled from 'styled-components';
import Activity from '../components/Activity';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Title } from '../components/UI';
import { breakpoints } from '../styles/globals';

const Activities = styled.div`
  & > * {
    margin-bottom: 30px;
  }

  @media (min-width: ${breakpoints.medium - 200}px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    gap: 30px 10px;

    & > * {
      width: auto;
      height: 30rem;
    }
  }

  @media (min-width: ${breakpoints.medium}px) {
    grid-template-columns: repeat(3, 33.33%);
  }

  @media (min-width: ${breakpoints.large}px) {
    grid-template-columns: repeat(4, 25%);
  }
`;

const activities = ({ data }) => {
  return (
    <Layout>
      <SEO title="Our activities" />
      <section>
        <Title as="h1" css="margin-bottom: 3rem;">
          Our <br />
          activities
        </Title>
        <Activities>
          {data &&
            data.map(({ name, logo, tags, color }) => (
              <Activity key={name} name={name} logo={logo} tags={tags} color={color} />
            ))}
        </Activities>
      </section>
    </Layout>
  );
};

export default activities;
