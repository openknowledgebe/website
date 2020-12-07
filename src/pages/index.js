import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Newsletter from '../components/Newsletter';
import Activity from '../components/Activity';
import { Img, StyledLink, Title } from '../components/UI';
import { breakpoints } from '../styles/globals';

const PinnedActivites = styled.section`
  & .content.gap {
    --gap: 30px;
  }
  & .content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  & > a {
    margin-top: 2rem;
  }

  @media (min-width: ${breakpoints.medium}px) {
    & .content {
      flex-direction: row;
      flex-wrap: wrap;
    }

    & .content.gap > * {
      margin: calc(2rem + 12px) 0 2rem var(--gap);
    }
  }
`;

const PinnedStories = styled.section`
  @media (min-width: ${breakpoints.medium}px) {
    & .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & .content > * {
      max-width: 45%;
    }

    &.content > * {
      max-width: 45%;
    }

    & .content > div {
      width: 100%;
    }
  }
`;

const PinnedStory = styled.div`
  padding: 2rem 0;

  &:not(:first-of-type) {
    border-top: 0.5px solid #a7a5a1;
  }

  &:first-of-type {
    padding-top: 0;
  }

  & .pinned-story-link {
    display: block;
  }

  & .story-date {
    font-size: 1.4rem;
    color: var(--color-secondary);
  }
`;

const Hero = styled.section`
  display: grid;
  gap: 2rem;

  & .hero-copy > h1 {
    margin: 0;
  }

  & .hero-copy > p {
    display: none;
  }

  & .hero-image {
    justify-self: flex-end;
    width: 100%;
  }

  & .hero-image > ${Img} {
    width: 100%;
  }

  @media (min-width: ${breakpoints.medium}px) {
    grid-template-columns: 0.6fr 1fr;
    column-gap: 1rem;

    & .hero-image {
      width: auto;
    }

    & .hero-copy {
      align-self: center;
    }

    & .hero-copy > h1 {
      margin-bottom: 2rem;
    }
  }

  @media (min-width: ${breakpoints.intermidiate}px) {
    & .hero-copy {
      align-self: flex-end;
    }

    & .hero-copy > *:not(:last-child) {
      margin-bottom: 2rem;
    }

    & .hero-copy > p {
      display: block;
    }
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
`;

const Home = ({ data }) => {
  const {
    frontmatter: { seo }
  } = data.home;

  const featuredActivities = data.home.frontmatter.activities.featured_activities.map(activity => ({
    ...activity.frontmatter,
    ...activity.fields,
    logo: activity.frontmatter.logo.publicURL
  }));

  const activities = {
    ...data.home.frontmatter.activities,
    featured_activities: featuredActivities
  };

  const featuredStories = data.home.frontmatter.stories.featured_stories.map(story => ({
    ...story.frontmatter,
    ...story.fields
  }));

  const stories = {
    ...data.home.frontmatter.stories,
    featured_stories: featuredStories,
    featured_image: {
      ...data.home.frontmatter.stories.featured_image,
      image: data.home.frontmatter.stories.featured_image.image.publicURL
    }
  };

  const header = {
    ...data.home.frontmatter.header,
    featured_image: {
      ...data.home.frontmatter.header.featured_image,
      image: data.home.frontmatter.header.featured_image.image.publicURL
    }
  };
  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} />
      <HomeTemplate data={{ ...data.home.frontmatter, header, activities, stories }} />
    </Layout>
  );
};

export default Home;

export const HomeTemplate = ({ data }) => {
  return (
    <>
      <Hero>
        <div className="hero-copy">
          <h1>{data.header?.tagline}</h1>
          {data.header?.mission && (
            <Markdown options={{ forceBlock: true }}>{data.header?.mission}</Markdown>
          )}
          <StyledLink to={data.header?.cta?.to} className="underlined d-inline-block-md d-none-sm">
            <span>{data.header?.cta?.label}</span>
          </StyledLink>
        </div>
        <div className="hero-image">
          <Img src={data.header?.featured_image?.image} alt={data.header?.featured_image?.alt} />
        </div>
        <div className="d-none-md">
          <StyledLink to={data.header?.cta?.to} className="underlined" $callToAction>
            <span>{data.header?.cta?.label}</span>
          </StyledLink>
        </div>
      </Hero>
      <PinnedActivites data-state="reversed">
        <Heading>
          <Title>
            Our
            <br />
            activities
          </Title>
          <StyledLink
            to={data.activities?.cta?.to}
            className="underlined d-inline-block-md d-none-sm"
          >
            <span>{data.activities?.cta?.label}</span>
          </StyledLink>
        </Heading>
        <div className="content gap">
          {data.activities?.featured_activities.map(({ name, logo, color, tags, slug }) => (
            <Activity name={name} logo={logo} color={color} tags={tags} key={name} to={slug} />
          ))}
        </div>
        <StyledLink to={data.activities?.cta?.to} className="underlined d-none-md" $callToAction>
          <span>{data.activities?.cta?.label}</span>
        </StyledLink>
      </PinnedActivites>
      <PinnedStories>
        <Heading>
          <Title>
            Our
            <br /> stories
          </Title>
          <StyledLink
            to={data.stories?.cta?.to}
            className="bold6 underlined work-sans d-inline-block-md d-none-sm"
          >
            <span>{data.stories?.cta?.label}</span>
          </StyledLink>
        </Heading>
        <div className="content">
          <Img
            src={data.stories?.featured_image?.image}
            alt={data.stories?.featured_image?.alt}
            className="d-block-md d-none-sm"
            css="height:100%; object-fit:cover;"
          />
          <div>
            {data.stories?.featured_stories.map(({ slug, title, date }) => (
              <PinnedStory key={title} className="pinned-story">
                <StyledLink to={slug} className="pinned-story-link">
                  {title}
                </StyledLink>
                <div className="story-date">{date}</div>
              </PinnedStory>
            ))}
          </div>
        </div>
        <StyledLink to={data.stories?.cta?.to} className="underlined d-none-md" $callToAction>
          <span>{data.stories?.cta?.label}</span>
        </StyledLink>
      </PinnedStories>
      <Newsletter content={data.newsletter} />
    </>
  );
};

export const query = graphql`
  {
    home: markdownRemark(fields: { collection: { eq: "home" } }) {
      frontmatter {
        header {
          mission
          tagline
          cta {
            label
            to
          }
          featured_image {
            alt
            image {
              publicURL
            }
          }
        }
        activities {
          featured_activities {
            frontmatter {
              name
              logo {
                publicURL
              }
              tags
              color
            }
            fields {
              slug
            }
          }
          cta {
            label
            to
          }
        }
        stories {
          cta {
            label
            to
          }
          featured_image {
            image {
              publicURL
            }
            alt
          }
          featured_stories {
            frontmatter {
              title
              date(formatString: "LL")
            }
            fields {
              slug
            }
          }
        }
        newsletter {
          subheading
          heading
        }
        seo {
          description
          title
        }
      }
    }
  }
`;
