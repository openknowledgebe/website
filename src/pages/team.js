import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Img, Person, Title } from '../components/UI';
import { breakpoints, dimensions } from '../styles/globals';
import { PinnedStory } from '../components/Story';

const Header = styled.header`
  & .img {
    width: 100%;
    margin-top: 2rem;
  }

  & article {
    padding: 0;

    & h3 {
      margin-top: 3rem;
    }

    & p {
      margin-top: 0;
    }
  }

  @media (min-width: ${breakpoints.medium + 51}px) {
    display: grid;
    grid-template-areas: 't i' 'v i' 'v i';
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: flex-start;

    & ${Title} {
      grid-area: t;
    }

    & .img {
      grid-area: i;
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

    & article {
      grid-area: v;

      & h3 {
        margin-top: 0;
      }
    }
  }

  @media (min-width: ${breakpoints.intermidiate}px) {
    & ${Title}, & article {
      max-width: 60%;
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
    h3 {
      margin-bottom: 3rem;
    }

    > div {
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
        fields: { slug },
        frontmatter: { title, date }
      }
    }) => ({ slug, title, date })
  );

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} />
      <TeamTemplate
        data={{
          ...data.team.frontmatter,
          header: {
            ...data.team.frontmatter.header,
            featured_image: {
              ...data.team.frontmatter.header.featured_image,
              image: data.team.frontmatter.header.featured_image.image
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
    <Header>
      <Title as="h1">
        Our <br />
        Team
      </Title>
      <div className="img">
        <Img image={data?.header?.featured_image.image} alt={data?.header?.featured_image.alt} />
      </div>
      <article>
        <h3>{data?.header?.about_volunteers.heading}</h3>
        {data?.header?.about_volunteers.body && (
          <Markdown options={{ forceBlock: true }}>{data.header.about_volunteers.body}</Markdown>
        )}
      </article>
    </Header>
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
          <div className="jobs">
            {data.jobs.map(({ title, date, slug }) => (
              <PinnedStory key={slug} title={title} date={date} slug={slug} />
            ))}
          </div>
        ) : (
          data.opportunities.default_text && (
            <div>
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
        header {
          featured_image {
            ...GeneralFeaturedImage
          }
          about_volunteers {
            heading
            body
          }
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
          fields {
            slug
          }
        }
      }
    }
  }
`;
