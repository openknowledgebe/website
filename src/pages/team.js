import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Img, Person, Title } from '../components/UI';
import { breakpoints, dimensions } from '../styles/globals';
import { btmFacingArrow } from '../images/icons';

const Header = styled.header`
  & .img {
    width: 100%;
    margin-top: 2rem;

    & > img {
      width: 100%;
    }
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
    grid-template-areas: 't i i' 'v i i' 'v i i';
    gap: 20px;
    align-items: flex-start;

    & ${Title} {
      grid-area: t;
    }

    & .img {
      grid-area: i;
      margin: 0;
      max-width: ${dimensions.featured.width}px !important;
      height: 100%;

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

const OpenPositions = styled.article`
  & > div {
    display: flex;
    & .arrow {
      margin-right: 2rem;
      width: 50px;
    }
    & .arrow > img {
      height: 100%;
      max-width: 50px;
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
          directors: mapPictures(data.team.frontmatter.directors)
        }}
      />
    </Layout>
  );
}

export const TeamTemplate = ({ data }) => {
  return (
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

      {data?.positions &&
      (data.positions.employee?.length > 0 ||
        data.positions.internship?.length > 0 ||
        data.positions.volunteer?.length > 0) ? (
        <OpenPositions>
          <h3>We're hiring!</h3>
          <div>
            <div className="arrow">
              <img src={btmFacingArrow} role="presentation" alt="" />
            </div>
            <div className="jobs">
              {data.positions.employee?.length > 0 ? (
                <div>
                  <h4>Employee</h4>
                  <ul>
                    {data.positions.employee.map(job => (
                      <li key={job}>{job}</li>
                    ))}
                  </ul>
                </div>
              ) : undefined}
              {data.positions.internship?.length > 0 ? (
                <div>
                  <h4>Internship</h4>
                  <ul>
                    {data.positions.internship.map(job => (
                      <li key={job}>{job}</li>
                    ))}
                  </ul>
                </div>
              ) : undefined}

              {data.positions.volunteer?.length > 0 ? (
                <div>
                  <h4>Volunteer</h4>
                  <ul>
                    {data.positions.volunteer.map(job => (
                      <li key={job}>{job}</li>
                    ))}
                  </ul>
                </div>
              ) : undefined}
            </div>
          </div>
        </OpenPositions>
      ) : undefined}
    </>
  );
};

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
        seo {
          description
          title
        }
      }
    }
  }
`;
