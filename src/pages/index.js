import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Newsletter from '../components/Newsletter';
import Activity from '../components/Activity';
import { Img, StyledLink, Title } from '../components/UI';

const pinnedStories = [
  {
    href: '#',
    title: '5 Lessons We Learned From Open Belgium 2018',
    date: 'April 12, 2018'
  },
  { href: '#', title: 'Open data day : Towards Clean Air with Open Data!', date: 'March 3, 2018' },
  {
    href: '#',
    title: 'Open Knowledge Belgium is preparing for open Summer of code’17',
    date: 'February 23, 2018'
  }
];

const pinnedActivities = [
  {
    name: 'Open summer of code',
    logo: 'https://via.placeholder.com/306x235',
    tags: ['Open Source', 'Event', 'Open innovation', 'Co-creation']
  },
  {
    name: 'Civiclab',
    logo: 'https://via.placeholder.com/326x57',
    tags: ['Civic action', 'Co-creation'],
    color: '#FEDC3E'
  },
  {
    name: 'iRail',
    logo: 'https://via.placeholder.com/177x212',
    tags: ['Open Transport', 'Linked Open Data'],
    color: '#B63832'
  }
];

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero">
        <div className="hero-copy">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget tellus eget orci
            viverra facilisis sed nec erat. Donec nec sem sodales, cursus risus non, aliquam massa.
            Proin mauris sapien, sollicitudin vitae imperdiet et, rutrum sit amet libero.
          </p>
          <StyledLink to="/teams" className="underlined md inline-block">
            <span>Get to know as</span>
          </StyledLink>
        </div>
        <div className="hero-image">
          <Img src="https://via.placeholder.com/516x336" alt="placeholder" />
        </div>
        <div className="sm-only">
          <StyledLink to="/teams" className="underlined" callToAction>
            <span>Get to know as</span>
          </StyledLink>
        </div>
      </section>
      <section className="pinned-activities" data-state="reversed">
        <div className="heading">
          <Title>
            Our
            <br />
            activities
          </Title>
          <StyledLink to="/activities" className="underlined md inline-block">
            <span>Discover all activities</span>
          </StyledLink>
        </div>
        <div className="content">
          {pinnedActivities.map(({ name, logo, color, tags }) => (
            <Activity name={name} logo={logo} color={color} tags={tags} key={name} />
          ))}
        </div>
        <StyledLink to="/activities" className="underlined sm-only inline-block" callToAction>
          <span>Discover all activities</span>
        </StyledLink>
      </section>
      <section className="pinned-stories">
        <div className="heading">
          <Title>
            Our
            <br /> stories
          </Title>
          <StyledLink to="/stories" className="bold6 underlined work-sans md inline-block">
            <span>Discover all stories</span>
          </StyledLink>
        </div>
        <div className="content">
          <Img
            src="https://via.placeholder.com/516x336"
            alt="placeholder"
            className="md block"
            css="height:100%; object-fit:cover;"
          />
          <div>
            {pinnedStories.map(({ href, title, date }) => (
              <div key={title} className="pinned-story">
                <StyledLink href={href} className="pinned-story-link">
                  {title}
                </StyledLink>
                <div className="pinned story-date">{date}</div>
              </div>
            ))}
          </div>
        </div>
        <StyledLink to="/stories" className="underlined sm-only" callToAction>
          <span>Discover all stories</span>
        </StyledLink>
      </section>
      <Newsletter />
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
