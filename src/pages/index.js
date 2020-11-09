import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Newsletter from '../components/Newsletter';
import Activity from '../components/Activity';

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
          <Link to="/teams" className="unstyled-link bold6 underlined work-sans md inline-block">
            <span>Get to know as</span>
          </Link>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/516x336" alt="placeholder" />
        </div>
        <div className="sm-only">
          <Link to="/teams" className="unstyled-link bold6 underlined work-sans call-to-action">
            <span>Get to know as</span>
          </Link>
        </div>
      </section>
      <section className="pinned-activities" data-state="reversed">
        <div className="heading">
          <h2 className="title">
            Our
            <br />
            activities
          </h2>
          <Link
            to="/stories"
            className="unstyled-link bold6 underlined work-sans md inline-block call-to-action"
          >
            <span>Discover all activities</span>
          </Link>
        </div>
        <div className="content">
          {pinnedActivities.map(({ name, logo, color, tags }) => (
            <Activity name={name} logo={logo} color={color} tags={tags} key={name} />
          ))}
        </div>
        <Link
          to="/stories"
          className="unstyled-link bold6 underlined work-sans sm-only inline-block call-to-action"
        >
          <span>Discover all activities</span>
        </Link>
      </section>
      <section className="pinned-stories">
        <div className="heading">
          <h2 className="title">
            Our
            <br /> stories
          </h2>
          <Link
            to="/stories"
            className="unstyled-link bold6 underlined work-sans md inline-block call-to-action"
          >
            <span>Discover all stories</span>
          </Link>
        </div>
        <div className="content">
          <img src="https://via.placeholder.com/516x336" alt="placeholder" className="md block" />
          <div>
            {pinnedStories.map(({ href, title, date }) => (
              <div key={title} className="pinned-story">
                <a href={href} className="pinned-story-link unstyled-link bold6 work-sans">
                  {title}
                </a>
                <div className="pinned story-date">{date}</div>
              </div>
            ))}
          </div>
        </div>
        <Link
          to="/stories"
          className="unstyled-link bold6 underlined work-sans sm-only call-to-action"
        >
          <span>Discover all stories</span>
        </Link>
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
