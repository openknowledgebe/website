import React from 'react';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Img, Person, Title } from '../components/UI';
import { breakpoints } from '../styles/globals';
import { btmFacingArrow } from '../images/icons';

const Header = styled.header`
  & img {
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
    grid-template-areas: 't i i' 'v i i' 'v i i';
    gap: 20px;
    align-items: flex-start;

    & ${Title} {
      grid-area: t;
    }

    & ${Img} {
      grid-area: i;
      margin: 0;
      min-height: 100%;
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

export default function Team() {
  return (
    <Layout>
      <SEO title="Our team" />
      <TeamTemplate data={{}} />
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
        <Img src={data?.header?.featured_image} alt="" />
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
              <Person key={name} task={task} socials={socials} name={name} picture={picture} />
            ))}
          </div>
        </Members>
      )}

      {data?.directors && (
        <Members>
          <h3>Board of directors</h3>
          <div className="members">
            {data.directors.map(({ name, task, contact_info: socials, picture }) => (
              <Person key={name} task={task} socials={socials} name={name} picture={picture} />
            ))}
          </div>
        </Members>
      )}

      {data?.positions && (
        <OpenPositions>
          <h3>We're hiring!</h3>
          <div>
            <div className="arrow">
              <img src={btmFacingArrow} role="presentation" alt="" />
            </div>
            <div className="jobs">
              {data.positions.employee && data.positions.employee.length && (
                <div>
                  <h4>Employee</h4>
                  <ul>
                    {data.positions.employee.map(job => (
                      <li key={job}>{job}</li>
                    ))}
                  </ul>
                </div>
              )}
              {data.positions.internship && data.positions.internship.length && (
                <div>
                  <h4>Internship</h4>
                  <ul>
                    {data.positions.internship.map(job => (
                      <li key={job}>{job}</li>
                    ))}
                  </ul>
                </div>
              )}

              {data.positions.volunteer && data.positions.volunteer.length && (
                <div>
                  <h4>Volunteer</h4>
                  <ul>
                    {data.positions.volunteer.map(job => (
                      <li key={job}>{job}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </OpenPositions>
      )}
    </>
  );
};
