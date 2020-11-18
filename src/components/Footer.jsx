import React from 'react';
import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';

import NavItems from './NavItems';
import { facebookIcon, githubIcon, twitterIcon } from '../images/icons';
import { breakpoints } from '../styles/globals';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;

  & .footer-nav .nav-items {
    flex-direction: column;
  }

  & .socials {
    margin-top: 1.6rem;
  }

  & .footer-nav > ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (min-width: ${breakpoints.medium}px) {
    & > div:first-of-type {
      display: flex;
      justify-content: space-between;
    }

    & .contact,
    & .socials {
      width: 45%;
    }

    & .socials {
      margin-top: 0;
    }

    & p {
      margin: 0;
    }

    & .footer-nav .nav-items {
      flex-direction: row;
    }
  }

  @media (min-width: ${breakpoints.large}px) {
    & > div {
      display: flex;
      justify-content: space-between;
    }

    & .footer-nav .nav-items {
      margin-bottom: 0;
    }

    & .footer-nav .nav-items > li {
      margin-right: 1rem;
    }

    & .footer-nav,
    & .license {
      width: 45%;
    }

    & .footer-nav {
      align-self: flex-end;
    }

    & .license {
      position: relative;
      margin-top: -3rem;
    }
  }
`;

const Footer = ({ data }) => {
  return (
    <StyledFooter>
      <div>
        <div className="contact">
          <h3>{data.contact.heading}</h3>
          <address>
            <Markdown>{data.contact.contact_info}</Markdown>
          </address>
        </div>
        <div className="socials">
          <h3>{data.socials.heading}</h3>
          <div className="flex">
            <a
              href={data.socials.twitter}
              className="mg-r-b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a
              href={data.socials.github}
              className="mg-r-b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="Github" />
            </a>
            <a
              href={data.socials.facebook}
              className="mg-r-b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <NavItems className="footer-nav unstyled-links work-sans" links={data.footer_nav} />
        <div className="license">
          <Markdown>{data.attributions}</Markdown>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
