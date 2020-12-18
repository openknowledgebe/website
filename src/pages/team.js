import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Img, Person, Tag, Title } from '../components/UI';
import { breakpoints, dimensions } from '../styles/globals';
import { StoryCard, StoryCardContainer } from '../components/Story';

const Values = styled.article`
  padding: 2rem 0;
  margin-bottom: 2rem;

  & {
    .values {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

const Volunteers = styled.article`
  padding: 2rem 0;
  & .img {
    width: 100%;
  }

  & .p-medium {
    display: none;
  }

  @media (min-width: ${breakpoints.medium + 51}px) {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    column-gap: 1rem;

    & .p-mobile {
      display: none;
    }

    & .p-medium {
      display: block;
    }

    & .content {
      align-self: center;

      h3 {
        margin-bottom: 2rem;
      }
    }

    & .img {
      margin: 0;
      max-width: ${dimensions.featured.width}px;
      height: 100%;
      justify-self: flex-end;

      & > * {
        height: 100%;
        width: 100%;
      }

      & > img {
        object-fit: cover;
      }
    }
  }
`;

const Members = styled.article`
  & > h3 {
    margin-bottom: 3rem;
  }
  & .members {
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    gap: 4rem;
    justify-content: center;
  }
`;

const JobOpportunies = styled.article`
  & {
    .default {
      margin-top: 3rem;
      text-align: center;
    }
  }
`;

const mapPictures = members =>
  members.map(member => ({
    ...member,
    picture: member.picture
  }));

export default function Team({ data }) {
  const {
    frontmatter: { seo }
  } = data.team;

  const jobs = data.jobs.edges.map(
    ({
      node: {
        excerpt,
        fields: { slug },
        frontmatter: { title, date }
      }
    }) => ({ excerpt, slug, title, date })
  );

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} />
      <TeamTemplate
        data={{
          ...data.team.frontmatter,
          volunteers: {
            ...data.team.frontmatter.volunteers,
            featured_image: {
              ...data.team.frontmatter.volunteers.featured_image,
              image: data.team.frontmatter.volunteers.featured_image.image
            }
          },
          team: mapPictures(data.team.frontmatter.team),
          directors: mapPictures(data.team.frontmatter.directors),
          jobs: jobs.length ? jobs : undefined
        }}
      />
    </Layout>
  );
}

export const TeamTemplate = ({ data }) => (
  <>
    <section>
      <Title as="h1">Team</Title>
      <Values>
        <h3>{data?.values_section?.heading}</h3>
        <div className="values gap">
          {data?.values_section?.values.map(tag => (
            <Tag css="background-color: #f9f6ff" key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
      </Values>
      <Volunteers>
        <div className="content">
          <h3>{data?.volunteers?.heading}</h3>
          <div className="p-medium">
            {data?.volunteers.body && (
              <Markdown options={{ forceBlock: true }}>{data.volunteers.body}</Markdown>
            )}
          </div>
        </div>
        <div className="img">
          <Img
            image={data?.volunteers?.featured_image.image}
            alt={data?.volunteers?.featured_image.alt}
          />
        </div>
        <div className="p-mobile">
          {data?.volunteers.body && (
            <Markdown options={{ forceBlock: true }}>{data.volunteers.body}</Markdown>
          )}
        </div>
      </Volunteers>
    </section>
    {data?.team && (
      <Members>
        <h3>Team</h3>
        <div className="members">
          {data.team.map(({ name, task, contact_info: socials, picture }) => (
            <Person
              key={socials.email}
              task={task}
              socials={socials}
              name={name}
              picture={picture}
            />
          ))}
        </div>
      </Members>
    )}
    {data?.directors && (
      <Members>
        <h3>Board of directors</h3>
        <div className="members">
          {data.directors.map(({ name, task, contact_info: socials, picture }) => (
            <Person
              key={socials.email}
              task={task}
              socials={socials}
              name={name}
              picture={picture}
            />
          ))}
        </div>
      </Members>
    )}

    {data.opportunities && (
      <JobOpportunies id="opportunities">
        <h3>{data.opportunities.heading}</h3>
        {data.jobs ? (
          <StoryCardContainer className="jobs">
            {data.jobs.map(({ title, date, slug, excerpt }) => (
              <StoryCard key={slug} title={title} excerpt={excerpt} date={date} to={slug} />
            ))}
          </StoryCardContainer>
        ) : (
          data.opportunities.default_text && (
            <div className="default">
              <Markdown>{data.opportunities.default_text}</Markdown>
            </div>
          )
        )}
      </JobOpportunies>
    )}
  </>
);

export const pageQuery = graphql`
  query {
    team: markdownRemark(fields: { collection: { eq: "team" } }) {
      frontmatter {
        volunteers {
          featured_image {
            ...GeneralFeaturedImage
          }
          heading
          body
        }
        values_section {
          values
          heading
        }
        team {
          name
          task
          ...Picture
          contact_info {
            email
            twitter
            linkedin
          }
        }
        directors {
          name
          task
          ...Picture
          contact_info {
            email
            twitter
            linkedin
          }
        }
        opportunities {
          heading
          default_text
        }
        seo {
          description
          title
        }
      }
    }

    jobs: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "job" } }, fields: { collection: { eq: "story" } } }
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
