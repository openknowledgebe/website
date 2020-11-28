import React from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Img, Person, Tag as StyledTag, Title } from '../components/UI';
import {
  btmFacingArrow,
  facebookBlackIcon,
  twitterBlackIcon,
  linkedinIcon,
  githubBlackIcon
} from '../images/icons';

import { breakpoints } from '../styles/globals';

const ActivityLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus,
  &.active {
    color: var(--color-secondary);
  }
`;

const Tag = styled(StyledTag)`
  background-color: #f9f6ff;
`;

const MainSection = styled.div`
  & h3 {
    margin-top: 2.5rem;
  }

  & .heading {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  & ${Title} {
    margin: var(--gap) 0 0 var(--gap);
  }
`;

const ContactBox = styled.div`
  padding: 20px 0;
  & h3 {
    color: var(--color-secondary);
  }

  & .content {
    display: flex;
    height: 100%;
  }

  & .content address {
    margin-left: 2.5rem;
  }

  & .content address > div {
    padding: 1rem 0;
  }

  & .content address > div:first-of-type {
    padding-top: 0;
  }

  & .content address > div:last-of-type {
    padding-bottom: 0;
  }

  & .arrow > img {
    height: 100%;
  }

  & .socials > * {
    margin-right: 1.5rem;
  }

  @media (min-width: ${breakpoints.medium}px) {
    box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.05);
  }
`;

const ActivityHeader = styled.header`
  position: relative;
  padding: 0;
  margin-bottom: 50px;

  & .banner-image {
    width: 100%;
  }

  & .banner-image > ${Img} {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
  }

  & .container {
    padding: 3rem var(--page-lr-margin);
  }

  @media (min-width: ${breakpoints.medium}px) {
    & .container > ${ContactBox} {
      padding-left: var(--page-lr-margin);
      padding-right: var(--page-lr-margin);
    }

    & .container {
      display: flex;
      justify-content: space-between;
    }

    & .container > ${ContactBox} {
      align-self: flex-start;
      margin-left: auto;
    }

    & .container > ${MainSection} {
      margin-right: 5em;
    }
  }

  @media (min-width: ${breakpoints.large}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;

    & .container {
      width: 45%;
      padding: 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    & .container > ${MainSection} {
      margin-right: 0;
      margin-bottom: 15px;
    }

    & .container > ${MainSection}, & .container > ${ContactBox} {
      padding-left: var(--page-lr-margin);
      padding-right: 30px;
    }

    & .container > ${ContactBox} {
      align-self: flex-end;
      width: 100%;
    }

    & .banner-image {
      width: auto;
      order: 2;
    }

    & .banner-image > ${Img} {
      max-height: unset;
      height: 100%;
    }
  }
`;

const Members = styled.section`
  box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.05);

  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 4rem;
  justify-content: center;

  @media (min-width: ${breakpoints.medium}px) {
    box-shadow: none;
  }
`;

export default function Activity() {
  return (
    <Layout>
      <SEO />
      <ActivityTemplate />
    </Layout>
  );
}

export const ActivityTemplate = ({ data }) => {
  return (
    <>
      <ActivityHeader>
        <div className="banner-image">
          <Img src={data.featured_image} alt="placeholder" />
        </div>
        <div className="container">
          <MainSection>
            <div className="heading gap">
              <Title as="h1">{data.name}</Title>
              {data.tags && data.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </div>
            {data.catchphrase && <h3>{data.catchphrase}</h3>}
            <Markdown options={{ forceBlock: true }}>{data.body}</Markdown>
          </MainSection>
          <ContactBox>
            <h3>Contact us</h3>
            <div className="content">
              <div className="arrow">
                <img src={btmFacingArrow} role="presentation" alt="" />
              </div>
              <address>
                <div>
                  <span className="work-sans bold6">Website</span>
                  <br />
                  <ActivityLink href={data.contact_info.website}>
                    {data.contact_info.website}
                  </ActivityLink>
                </div>
                <div>
                  <span className="work-sans bold6">Email</span>
                  <br />
                  <ActivityLink href={`mailto:${data.contact_info.email}`}>
                    {data.contact_info.email}
                  </ActivityLink>
                </div>
                {data.contact_info.socials && (
                  <div className="flex socials">
                    {data.contact_info.socials.github && (
                      <a
                        href={data.contact_info.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={githubBlackIcon} alt="Github" />
                      </a>
                    )}

                    {data.contact_info.socials.linkedin && (
                      <a
                        href={data.contact_info.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={linkedinIcon} alt="Linkedin" />
                      </a>
                    )}

                    {data.contact_info.socials.twitter && (
                      <a
                        href={data.contact_info.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={twitterBlackIcon} alt="Linkedin" />
                      </a>
                    )}

                    {data.contact_info.socials.facebook && (
                      <a
                        href={data.contact_info.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={facebookBlackIcon} alt="Linkedin" />
                      </a>
                    )}
                  </div>
                )}
              </address>
            </div>
          </ContactBox>
        </div>
      </ActivityHeader>
      {data.members && (
        <Members>
          {data.members.map(({ name, task, picture, contact_info: socials }) => (
            <Person name={name} task={task} socials={socials} picture={picture} />
          ))}
        </Members>
      )}
    </>
  );
};
